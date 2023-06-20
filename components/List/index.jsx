import { styles } from "./styles"
import { View, Text } from "react-native"
import { Task } from "../Task"
import { FontAwesome5 } from '@expo/vector-icons';

export function List({
    list = [],
    onPressTrash = () => { },
    onComplete = () => { },
}) {

    return (
        <View style={styles.container}>
            {list.map((task) => (
                <Task
                    task={task}
                    key={task.id}
                    onPressTrash={onPressTrash}
                    onComplete={onComplete}
                />
            ))}

            {list.length <= 0 && (
                <View style={styles.empty}>
                    <FontAwesome5 name="clipboard-list" size={50} color="blue" />
                    <View>
                        <Text>Você ainda não tem tarefas cadastradas</Text>
                        <Text>Crie suas tarfas e se organize</Text>
                    </View>
                </View>
            )}
        </View>
    )
}
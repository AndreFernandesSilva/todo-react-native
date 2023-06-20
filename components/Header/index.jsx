import { styles } from "./styles"
import { View, Text, TextInput } from "react-native"
import { useRef } from "react"

export function Header({ onAddNewTask = () => { } }) {
    const input=useRef(null)
    function handleSubmit(e) {

        const description=e.nativeEvent.text

        onAddNewTask(description);
        input.current.clear()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todas as tarefas</Text>
                <TextInput
                ref={input}
                    onSubmitEditing={handleSubmit}
                    placeholder="Adicionar uma nova tarefa"
                    style={styles.TextInput}
                />
        </View>
    )
}
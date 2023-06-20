import { useState } from "react"
import { styles } from "./styles"
import { View, Text } from "react-native"
import CheckBox from 'expo-checkbox'
import { FontAwesome } from '@expo/vector-icons'

export function Task({
    task = {},
    onPressTrash = () => { },
    onComplete = () => { },
}) {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>
            <CheckBox
                style={{
                    borderRadius: 4,
                    borderColor: '#5967EA',
                    borderWidth: 2,
                }}

                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) =>
                    {
                        onComplete(task.id, newValue)
                        setToggleCheckBox(newValue)
                    }
                    }
            />

            <Text style={{
                ...styles.description,
                textDecorationLine: task.is_completed ? 'line-through': "",
                textDecorationStyle: 'solid'
            }}>
                {task.description}
            </Text>

            <View>
                <FontAwesome.Button
                    style={styles.delet}
                    name="trash-o"
                    size={24}
                    backgroundColor="transparent"
                    color="red"
                    onPress={() => onPressTrash(task.id)}>
                </FontAwesome.Button>
            </View>
        </View>
    )
}
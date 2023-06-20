import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        //flex: 1,
        flexDirection: 'column',
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },

    title: {
        fontSize: 40,
        fontWeight: 700,
        marginTop: 60,
        //marginBottom: 150,
        lineHeight: 80,
    },

    TextInput: {
        width: '100%',
        height: 47,
        fontSize: 15,
        //border: "none",
        borderRadius: 8,
        backgroundColor: '#f3f3f3',
        paddingLeft: 10,
        lineHeight: 18,
        fontWeight: '400',
    },
});
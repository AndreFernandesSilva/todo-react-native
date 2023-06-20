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
        padding: 10,
    },

    empty: {
        marginTop: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
        textAlign: "center",
        color: "#5A5A5A",
        fontSize: 18,
    },
});
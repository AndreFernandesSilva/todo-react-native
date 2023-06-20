import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        //flex: 1,
        flexDirection: 'row',
        //backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 18,
        justifyContent: 'space-between'
        
    },

    description: {
        display: 'flex',
        color: '#5A5A5A',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '700',
    },

    delet: {
        backgroundColor: 'transparent',
    },
});
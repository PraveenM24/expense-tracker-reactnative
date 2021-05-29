import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop: '40%',
        alignItems: 'center'
    },
    title: {
        fontSize:20,
        textAlign: 'center',
        margin: 20,
    },
    input: {
        margin: 5,
        borderRadius: 10,
        width: '80%',
        justifyContent: 'center',
    },
    buttonGroup: {
        flex: 3,
        flexDirection: 'row'
    },
    button: {
        margin: 10,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    link: {
        margin: 10,
        borderRadius: 10,
        paddingVertical: 5,
    }

})
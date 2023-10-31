import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333333'
    },
    nameTecnology: {
        fontSize: 16,
        color: '#FDFCFE',
        fontWeight: 'bold',
        marginLeft: 16,
        flex: 1,
    },
    nameTecnologyCheckout: {
        fontSize: 16,
        color: '#808080',
        fontWeight: 'bold',
        marginLeft: 16,
        flex: 1,
        textDecorationLine: 'line-through'

    }

});
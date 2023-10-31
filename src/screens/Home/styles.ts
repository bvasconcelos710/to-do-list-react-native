import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 70,
        backgroundColor: '#0D0D0D'
    },
    title: {
        textAlign: 'center',
        color: '#4EA8DE',
        fontSize: 34,
        fontWeight: 'bold'
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 44,
        marginBottom: 34
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        fontSize: 14,
        color: '#FDFCFE',
        padding: 12,
        borderRadius: 4
    },
    tecnologysContainer: {
        flex: 3,
        paddingTop: 10,
        paddingHorizontal: 24,
        backgroundColor: '#1A1A1A'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    created: {
        fontSize: 14,
        fontWeight: "700",
        color: '#4EA8DE'
    },
    done: {
        fontSize: 14,
        fontWeight: "700",
        color: '#8284FA'
    },
    counterView: {
        backgroundColor: '#333333',
        width: 25,
        height: 19,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counterText: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: 'bold'

    },
    containerList: {
        marginTop: 24
    },
    listEmpty: {
        marginTop: 10,
        color: '#808080',
        fontSize: 16,
        textAlign: 'center'
    },
    viewEmpty: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyLogo: {
        width: 65,
        height: 65
    }
}
);
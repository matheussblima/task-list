import { StyleSheet } from 'react-native';
import { colors } from '../../res';

export default StyleSheet.create({
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    buttonSection: {
        flex: 1,
        padding: 32,
        justifyContent: 'center',
    },
    buttonLogin: {
        backgroundColor: colors.green,
        borderColor: colors.green
    },
    buttonLoginText: {
        color: '#FFF'
    },
    containerHeaderText: {
        marginTop: 32,
        padding: 32
    },
    HeaderText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
    }
});
import { StyleSheet } from 'react-native';
import { colors } from '../../res';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
        padding: 32,
        marginTop: 24,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
    },
    sectionInputs: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonSection: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonLogin: {
        backgroundColor: colors.green,
        borderColor: colors.green,
    },
    buttonLoginText: {
        color: '#FFF'
    },
    inputUsername: {
        marginBottom: 8
    }
});
import { StyleSheet } from 'react-native';
import { colors } from '../../res'


const styles = StyleSheet.create({
    containerList: { 
        marginHorizontal: -32,
        flex: 1,
        marginTop: 42 
    },
    contanierModal: { 
        flex: 0.8, 
        backgroundColor: colors.gray, 
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 32
    },
    inputNameTask: {
        marginBottom: 8,
    },
    titleModel: {
        textAlign: 'center',
        marginBottom: 16
    },
    buttonAddModal: {
        marginTop: 8,
        backgroundColor: colors.green,
        borderColor: colors.green
    },
    buttonAddModalText: {
        color: '#FFF'
    }
});

export default styles;
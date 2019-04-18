import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../res'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
        padding: 32,
        marginTop:  Platform.OS === 'ios' ? 0 : 24,
    },
});
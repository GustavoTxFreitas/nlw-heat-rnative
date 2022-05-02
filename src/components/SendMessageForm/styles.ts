import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        height: 184,
        width: '100%',
        paddingTop: 16,
        paddingHorizontal: 24,
        paddingBottom: getBottomSpace() + 16,
        backgroundColor: COLORS.BLACK_TERTIARY
    },

    input: {
        height: 88,
        width: '100%',
        color: COLORS.WHITE,
        textAlignVertical: 'top'
    }
});
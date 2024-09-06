import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	buttonWrapper: {
		borderRadius: 8,
		width: '100%',
		overflow: 'hidden',
	},
	button: {
		backgroundColor: '#222',
		height: 48,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonLabel: {
		color: '#fff',
		fontWeight: 'bold',
	},
	buttonDisabled: {
		backgroundColor: '#ccc',
	},
	buttonLabelDisabled: {
		color: '#888',
	},
});

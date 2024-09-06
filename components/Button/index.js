import { Text, Pressable, View } from 'react-native';
import { styles } from './styles';

export default function Button({ children, disabled, ...props }) {
	return (
		<View style={styles.buttonWrapper}>
			<Pressable
				disabled={disabled}
				style={[styles.button, disabled && styles.buttonDisabled]}
				android_ripple={{ color: '#777' }}
				{...props}
			>
				<Text
					style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}
				>
					{children}
				</Text>
			</Pressable>
		</View>
	);
}

import { TextInput } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Input(props) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<TextInput
			{...props}
			style={[styles.input, isFocused && styles.inputIsFocused]}
			placeholderTextColor='#aaa'
			editable
			// textAlign='left'
			// maxLength={3}
			// caretHidden={true}
			// cursorColor='#f00' * Android only
			// selectionColor='#f00'
			// autoFocus
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		/>
	);
}

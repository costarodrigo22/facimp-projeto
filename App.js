import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';

export default function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handlesubmit() {
		console.log({ email, password });
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textLogo}>Driver</Text>

				<Text style={styles.textSlogan}>faça seu login</Text>
			</View>

			<Input
				placeholder='E-mail'
				keyboardType='email-address'
				autoCapitalize='none'
				autoCorrect={true}
				autoComplete='email'
				value={email}
				// onChange={(event) => setEmail(event.nativeEvent.text)}
				onChangeText={(text) => setEmail(text)}
			/>

			<Input
				placeholder='Senha'
				secureTextEntry
				value={password}
				// onChange={(event) => setPassword(event.nativeEvent.text)}
				// onSubmitEditing={handlesubmit}
				onChangeText={(text) => setPassword(text)}
			/>

			<Button disabled={false} onPress={handlesubmit}>
				Acessar
			</Button>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		gap: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		alignItems: 'center',
	},
	textLogo: {
		fontWeight: 'bold',
		fontSize: 22,
	},
	textSlogan: {
		color: '#333',
		fontSize: 12,
	},
	navBar: {
		width: '100%',
		height: 100,
		backgroundColor: '#f00',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

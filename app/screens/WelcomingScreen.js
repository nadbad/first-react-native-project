import { StyleSheet, Text, ImageBackground, Image, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';

import colors from '../config/colors';

export default function WelcomingScreen(props) {
	return (
		<SafeAreaProvider style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require('../assets/background.jpg')}>
				<View style={styles.topSection}>
					<Image
						style={styles.logo}
						source={require('../assets/logo-red.png')}
					/>
					<Text style={styles.appName}>Trade It</Text>
				</View>
				<View style={styles.bottomSection}>
					<Button
						title='Login'
						buttonStyle={{
							backgroundColor: colors.primary,
							borderRadius: 15,
						}}
						containerStyle={{
							width: 300,
							marginHorizontal: 50,
							marginVertical: 10,
						}}
					/>
					<Button
						title='Register'
						buttonStyle={{
							backgroundColor: colors.secondary,
							borderRadius: 15,
						}}
						containerStyle={{
							width: 300,
							marginHorizontal: 50,
							marginVertical: 10,
						}}
					/>
				</View>
			</ImageBackground>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: (10, 10, 10, 40),
	},
	topSection: { flex: 0.25, justifyContent: 'space-around' },
	logo: {
		width: 100,
		height: 100,
	},
	appName: {
		fontSize: 28,
	},
	bottomSection: {
		flex: 0.15,
		justifyContent: 'space-between',
	},
});

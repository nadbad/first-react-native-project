import { StyleSheet, Text, ImageBackground, Image, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';

import colors from '../config/colors';

export default function ViewImageScreen(props) {
	return (
		<SafeAreaProvider style={styles.container}>
			<View style={styles.topSection}>
				<Button
					title='Delete'
					buttonStyle={{
						backgroundColor: colors.primary,
						borderRadius: 15,
					}}
				/>
				<Button
					title='Close'
					buttonStyle={{
						backgroundColor: colors.secondary,
						borderRadius: 15,
					}}
				/>
			</View>
			<View>
				<Image
					resizeMode='contain'
					style={styles.image}
					source={require('../assets/chair.jpg')}
				/>
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},
	topSection: {
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});

import { StyleSheet, Text, ImageBackground, Image, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';

export default function ViewImageScreen(props) {
	return (
		<SafeAreaProvider style={styles.container}>
			<View style={styles.topSection}>
				<Button title='Delete' style={styles.deleteBtn} />
				<Button title='Close' style={styles.closeBtn} />
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
		backgroundColor: '#323232',
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
	deleteBtn: {
		width: '100%',
		height: '100%',
	},
	closeBtn: {
		width: '100%',
		height: '100%',
	},
});

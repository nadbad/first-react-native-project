import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
	Button,
	Alert,
	Platform,
	StatusBar,
	ImageBackground,
} from 'react-native';
import WelcomingScreen from './app/screens/WelcomingScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
	return <ViewImageScreen />;
}

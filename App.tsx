import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <CalculatorScreen />
      <StatusBar
        backgroundColor='black'
        style='light'
       />
    </SafeAreaView>
  );
}


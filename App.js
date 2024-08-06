import { StatusBar } from 'expo-status-bar';
import { Camera } from 'lucide-react-native';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ScrollViewExample from "./ScrollViewExample";
import FlatListExample from "./FlatListExample";
import MoviesList from "./MoviesList";

export default function App() {
  return (
    <MoviesList />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

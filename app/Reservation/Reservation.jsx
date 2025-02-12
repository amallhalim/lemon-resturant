import { View, Text, StyleSheet } from 'react-native';

export default function ReservationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reservation --------------</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

// Exporting header options directly:
export const config = {
  options: {
    headerTitle: 'Reservation', // Custom header title
    headerStyle: { backgroundColor: '#007BFF' }, // Header background
    headerTintColor: '#fff', // Text color
    headerTitleStyle: { fontWeight: 'bold' }, // Title style
    headerShown:false
  },
};

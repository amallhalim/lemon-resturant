import { View, Text, StyleSheet } from 'react-native';
import People from '../pages/Reservation/People';
import Table from '../pages/Reservation/Table';
import Res_Card from '../pages/Reservation/Res_Card';

export default function ReservationScreen() {
  return (
    <View style={{ display: "flex", width: "100%", height: "100%", backgroundColor: "black" }}>
      <View style={{ flex: 1 }}>
        <Res_Card />
      </View>
      <View style={{ flex: 1 }}>
        <People />
      </View>
      <View style={{ flex: 1 }}>
        <Table />
      </View>
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

export const config = {
  options: {
    headerTitle: 'Reservation', 
    headerStyle: { backgroundColor: '#007BFF' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' }, 
    headerShown: false
  },
};

import React from 'react';
import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

export default function MenuFlatList() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: 'yellow',
    },
    listContainer: {
      backgroundColor: 'red',
      flex: 1,
      marginBottom: 20,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor: '#fff',
      marginVertical: 4,
      marginHorizontal: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    sectionHeader: {
      padding: 10,
      fontSize: 22,
      fontWeight: 'bold',
      backgroundColor: '#f0f0f0',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    footerText: {
      textAlign: 'center',
      fontSize: 16,
      padding: 10,
      backgroundColor: '#eee',
    },
  });

  return (
    <View style={styles.container}>
      {/* FlatList Section */}
      <View style={styles.listContainer}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          keyExtractor={(item, index) => `flatlist-${index}`}
        />
      </View>

      {/* Footer Text */}
      <Text style={styles.footerText}>8888888888888888888888</Text>

      {/* SectionList Section */}
      <View style={styles.listContainer}>
        <SectionList
          sections={[
            { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
            {
              title: 'J',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie',
              ],
            },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => `sectionlist-${index}`}
        />
      </View>
    </View>
  );
}

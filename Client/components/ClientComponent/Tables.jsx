import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

const Tables = ({ onClose }) => {
  const [selectedTable, setSelectedTable] = useState(null);

  const TableClick = (number) => {
    setSelectedTable(number);
    Alert.alert(
      'Table Selected',
      `You have selected Table ${number}. Are you sure?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Confirm', onPress: () => handleConfirmation(number) },
      ]
    );
  };

  const handleConfirmation = (number) => {
    Alert.alert(
      'Confirmed',
      `You have confirmed the selection of Table ${number}.`
    );
    onClose();
  };

  const tables = [
    { number: 1, capacity: 4 },
    { number: 2, capacity: 2 },
    { number: 3, capacity: 6 },
    { number: 4, capacity: 5 },
    { number: 5, capacity: 8 },
    { number: 6, capacity: 6 },
    { number: 7, capacity: 2 },
    { number: 8, capacity: 8 },
    { number: 9, capacity: 4 },
    { number: 10, capacity: 4 },
    { number: 11, capacity: 4 },
    { number: 12, capacity: 2 },
    { number: 13, capacity: 6 },
    { number: 14, capacity: 5 },
    { number: 15, capacity: 8 },
    { number: 16, capacity: 6 },
    { number: 17, capacity: 2 },
    { number: 18, capacity: 8 },
  ];

  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < tables.length; i += 3) {
      const row = tables.slice(i, i + 3);
      rows.push(
        <View key={i} style={styles.tableRow}>
          {row.map(table => (
            <TouchableOpacity
              key={table.number}
              onPress={() => TableClick(table.number)}
              style={[
                styles.table,
                selectedTable === table.number && styles.selectedTable,
              ]}
            >
              <Text style={styles.tableText}>Table {table.number}</Text>
              <Text>Capacity: {table.capacity}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Select a Table:</Text>
    <ScrollView contentContainerStyle={styles.tablesContainer}>
      {tables.map(table => (
        <TouchableOpacity
          key={table.number}
          onPress={() => TableClick(table.number)}
          style={[
            styles.table,
            selectedTable === table.number && styles.selectedTable,
          ]}
        >
          <Text style={styles.tableText}>Table {table.number}</Text>
          <Text>Capacity: {table.capacity}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    <Text style={styles.selectedInfo}>
      {selectedTable ? `You selected Table ${selectedTable}` : 'Please select a table'}
    </Text>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 16,
    alignItems: 'center',
    bottom:30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tablesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  table: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    width: 100,
    alignItems: 'center',
    marginBottom: 16,
  },
  selectedTable: {
    backgroundColor: '#E7B10A',
  },
  tableText: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selectedInfo: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default Tables;

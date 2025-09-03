import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AdminPanel: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Panel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AdminPanel;
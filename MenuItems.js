import { View, Text, StyleSheet, FlatList } from 'react-native';

const menuItemsToDisplay = [
  { name: 'Chocolate Cake', id: '1A' },
  { name: 'Chocolate Brownie', id: '1B' },
    { name: 'Chocolate cookies', id: '1C' },
    { name: 'Walnut Brownie', id: '1D' },
    { name: 'Choco-Chipies', id: '1E' },
    { name: 'Banana Bread', id: '1F' },
    { name: 'Marble Cake', id: '1G' },
    { name: 'Oreo Delight', id: '1H' },
    { name: 'Doughnuts', id: '1I' },
    { name: 'Cold Cake', id: '1J' },
    { name: 'Mango Delight', id: '1K' },
    { name: 'Strawberry Delight', id: '1L' },
    { name: 'Cupcakes', id: '1M' },
    { name: 'Diet', id: '1N' },
];

const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);


const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}></FlatList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.72,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36,
  },
});

export default MenuItems;

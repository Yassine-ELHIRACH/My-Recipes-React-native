import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

import { useRecepies } from "../providers/ItemsProvider";

export default function FavoritesRecepiesScreen({navigation}) {
  const { recepies, favorites, setFavorites } = useRecepies();

  React.useEffect(() => {
    setFavorites(recepies.filter(item => item.isFav === true))
  }, [recepies])

  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      category={item.category}
      image={item.imagePath}
      onCardPress={() => navigation.navigate("Details", { recepie: {...item, iseEditable: false} })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {favorites.length !== 0 ? (
        <View>
          <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
              return (item.id + index).toString();
            }}
            numColumns={2}
          />
        </View>
      ) : (
        <View style={styles.centered}>
          <Text style={{ color: "grey", fontSize: 15}}>No favorites recepie</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    flex: 1,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

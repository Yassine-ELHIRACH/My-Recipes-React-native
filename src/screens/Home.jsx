import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import Card from '../components/Card';
import { useRecepies } from '../providers/ItemsProvider';
import { HOME_SCREEN } from '../utils/tests/testIDs';

export default function Home({ navigation }) {
  const { recepies} = useRecepies();
  
  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      category={item.category}
      image={item.imagePath}
      onCardPress={() =>
        navigation.navigate('Details', { recepie: { ...item, canLike: true } })
      }
      canLike
      isFav={item.isFav}
    />
  );

  return (
    <SafeAreaView style={styles.container} testID={HOME_SCREEN}>
      <View>
        <FlatList
          data={recepies}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return (item.id + index).toString();
          }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    flex: 1,
  },
});

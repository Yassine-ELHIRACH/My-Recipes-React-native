import React from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useRecepies } from '../providers/ItemsProvider';
import Button from '../components/Button';
import Badge from '../components/Badge'
import { DETAILS_SCREEN, DETAILS_SCREEN_ICON, DETAILS_SCREEN_IMAGE } from '../utils/tests/testIDs';

export default function Details({ route, navigation }) {
  const { recepie } = route.params;
  const { recepies, setRecepies, myRecepies, setMyRecepies } = useRecepies();
  const [isFav, setIsFav] = React.useState(recepie.isFav)

  const addToFav = () => {
    setRecepies(
      recepies.map((item) =>
        item.title === recepie.title ? { ...item, isFav: true } : item
      )
    );
    setIsFav(true);
  };

  const removeFromFav = () => {
    setRecepies(
      recepies.map((item) =>
        item.title === recepie.title ? { ...item, isFav: false } : item
      )
    );
    setIsFav(false);
  };
  console.log({ route })
  const deleteRecepie = () => {
    Alert.alert("Do you really want to delete this recepie ?", 'You will not be able to retrieve it back', [{ text: 'No' }, {
      text: 'Yes', onPress: () => {
        setRecepies(recepies.filter(item => item.title !== recepie.title))
        setMyRecepies(myRecepies.filter(item => item.title !== recepie.title))
        navigation.goBack()

      }
    }]);

  }
  const title = !isFav ? 'Add to' : 'Remove from';
  return (
    <SafeAreaView style={styles.container} testID={DETAILS_SCREEN}>
      <View>
        <Image source={recepie.imagePath} style={styles.image} testID={DETAILS_SCREEN_IMAGE} />
        <View style={styles.padding}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{recepie.title}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{recepie.description}</Text>
          </View>
          <View style={{ ...styles.row, justifyContent: 'space-between' }}>

            <Badge title={`#${recepie.category}`} />
            {myRecepies.find(item => item.title === recepie.title) && <Ionicons
              name="trash"
              size={30}
              color="red"
              onPress={() => deleteRecepie()}
            />}
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title={title + ' favorite'}
          onPress={() => (isFav ? removeFromFav() : addToFav())}
          style={{ backgroundColor: isFav ? "red" : "green" }}
        >
          <Ionicons
            name={isFav ? 'trash' : 'heart'}
            size={20}
            color="white"
          />
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginTop: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  descriptionContainer: {
    marginVertical: 20,
  },
  description: {
    fontSize: 15,
  },
  padding: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
  },
  modal: {
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  more: {
    marginVertical: 5,
  },
  switch: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    bottom: 10,
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList = ({ places }) => {
  return (  
    <View style={styles.listContainer}>
      {places.map((place, i) => (
        <ListItem 
          key={i} 
          placeName={place} 
          onItemPressed={() => alert('Item pressed - ID: ' + i)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

 
export default PlaceList;
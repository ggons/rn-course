import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const PlaceInput = ({ placeName, placeNameChangedHandler, placeSubmitHandler }) => {
  return (  
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="An awesome place"
        value={placeName}
        onChangeText={placeNameChangedHandler}
        style={styles.placeInput}
      />
      <Button 
        title="Add" 
        style={styles.placeButton} 
        onPress={placeSubmitHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    padding: 5
  },
  placeButton: {
    width: "30%"
  },
});
 
export default PlaceInput;
import React from 'react';
import { FlatList, Button, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import SpeakerItem from './speaker-item';



export default SpeakerList= ({speakers, navigation,onPress})=> {
    return (
         <View>
         {/* <Button
        onPress={() => navigation.navigate('Schedule')}
        title="Go to Schedule"
      /> */}
    <FlatList
        data={speakers}
        renderItem={({item,index}) => (<SpeakerItem {...item} id={index} onPress={onPress}/>)} 
        keyExtractor={(item,index)=>index}
      />
      </View>)
}


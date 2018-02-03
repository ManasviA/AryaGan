import React from 'react';
import { FlatList, Button, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import NewsItem from './news-item';



export default NewsList= ({news, navigation,onPress})=> {
    return (
         <View>
         {/* <Button
        onPress={() => navigation.navigate('Schedule')}
        title="Go to Schedule"
      /> */}
    <FlatList
        data={news}
        renderItem={({item,index}) => (<NewsItem {...item} index={index} onPress={onPress}/>)} 
        keyExtractor={(item,index)=>index}
      />
      </View>)
}


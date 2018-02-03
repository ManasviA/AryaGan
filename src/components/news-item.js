import React from 'react';
import { Text, Button } from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';

export default NewsItem = ({ photo, title, date, summary, onPress, index }) => {
    // return (<Card
    //     title={title}
    //     image={photo?{uri:photo}:null}
    //     containerStyle={{padding:0,paddingHorizontal:0,marginHorizontal:0}}>
    //     <Text style={{ marginBottom: 10 }}>
    //         {summary}
    //     </Text>
    //     <Button
    //         icon={{ name: 'code' }}
    //         backgroundColor='#03A9F4'
    //         fontFamily='Lato'
    //         buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
    //         title='VIEW NOW' 
    //         onPress={()=>onPress(index)}/>
    // </Card>)

    return <ListItem
    avatar={{uri:photo}}
    rightTitle={date}
    key={index}
    title={title}
    subtitle={summary}
    onPress={()=>onPress(index)}
    />

}
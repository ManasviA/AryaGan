import React from 'react';
import { List, ListItem } from 'react-native-elements';

export default SpeakerItem = ({photo,name,id,onPress})=> {
    return (<ListItem
        roundAvatar 
        avatar={{uri:photo}}
        key={id}
        title={name}
        onPress={()=>onPress(id)}
      />)
}
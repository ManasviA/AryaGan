
/* @flow */
/*eslint-disable prefer-const */
import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Image,
    Linking
} from "react-native";
import { Card, Divider } from 'react-native-elements';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    title: {
      //flex: 0,
      color: "#0f1726",
      fontSize: 18,
      fontWeight: "bold",
      paddingTop: 5
    },
    time: {
      flex: 0,
      textAlign: 'center',
      color: "#1bce7c",
      fontSize: 14,
      fontWeight: "bold",
      padding: 20,
      paddingBottom: 5
    },
    summary: {
      flex: 1,
      textAlign: 'left',
      color: "#0f1726",
      fontSize: 14,
      paddingHorizontal: 20
    },
    image: {
      height: 100,
      width: 100
    },
    speaker: {
      color: "#0f1726",
      fontSize: 18,
      fontWeight: "600",
      margin: 5,
      textAlign: "center"
    },
    company: {
      fontSize: 16,
      color: "#888",
      fontStyle: "italic",
      textAlign: "center"
    },
    overview:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingVertical:20
    },
    link:{
        color: 'blue',
        textDecorationLine:'underline'
    },
    details:{
        flex:1
    }
  });


const Information = ({ faqs }) => {
    return (<View style={{paddingHorizontal:20}}>
        <View style={styles.overview}>
            <Image style={styles.image} resizeMode="cover" source={{uri:'https://firebasestorage.googleapis.com/v0/b/reactconf-6ab3e.appspot.com/o/namaste-1-1.png?alt=media&token=588bab5b-a2be-450c-acb6-fdf7f076bae2'}}/>
            <View style={styles.details}>
                <Text style={styles.title}>AryaGan Conference</Text>
                <Text style={styles.link} onPress={()=>{Linking.openURL('https://goo.gl/maps/uhTRcLyTsoA2')}}>Address</Text>
            </View>
        </View>
        <Divider  style={{ backgroundColor: '#b5b5b5', height:1 }}/>
        <View style={{paddingVertical:20}}>
            <Text style={{fontWeight:'bold',color:'#0f1726'}}>Frequently Asked Questions</Text>
            {
                faqs?faqs.map(({question,answer},index)=>(
                    <View key={index} style={{paddingVertical:5}}>
                        <Text style={{fontWeight:'bold'}}>{question}</Text>
                        <Text>{answer}</Text>
                    </View>
                )):null
            }
        </View>
    </View>);
};


export default InformationContainer = connect((state) => ({
    faqs: state.data.faqs
}))(Information);

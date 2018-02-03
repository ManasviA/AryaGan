/* @flow */
/*eslint-disable prefer-const */
import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  BackHandler
} from "react-native";
import PropTypes from 'prop-types';
import ThemeConfig from '../config/style-config';

const styles = StyleSheet.create({
  title: {
    flex: 0,
    textAlign: 'center',
    color: "#0f1726",
    fontSize: 16,
    fontWeight: "bold",
    padding: 20,
    paddingTop: 5
  },
  time: {
    flex: 0,
    textAlign: 'center',
    color: ThemeConfig.activeTabBgColor,
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
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: ThemeConfig.activeTabBgColor,
    margin: 10,
    alignSelf: 'center'
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
});

class TalkDetail extends React.Component {
  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "column"
        }}
      >
        <Image
          resizeMode="cover"
          source={{uri: this.props.photo}}
          style={styles.image}/>
        <Text
          style={styles.speaker}>
          {this.props.speaker}
        </Text>
        <Text
          style={styles.company}>
          {this.props.company}
        </Text>
        <Text style={styles.time}>{this.props.time} </Text>
        <Text style={styles.title}>
          {this.props.title.toUpperCase()}
        </Text>
        <Text style={styles.summary}>{this.props.summary}</Text>
      </ScrollView>
    );
  }
}

TalkDetail.propTypes = {
  category: PropTypes.string,
  company: PropTypes.string,
  speaker: PropTypes.string,
  photo: PropTypes.string,
  summary: PropTypes.string,
  talk: PropTypes.bool,
  time: PropTypes.string,
  title: PropTypes.string
};

export default class TalkDetailContainer extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
    return true;
  };
  render() {
    return (<TalkDetail {...this.props.navigation.state.params.detail} />);
  }
}

/* @flow */
/*eslint-disable prefer-const */
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { TabNavigator, StackNavigator } from 'react-navigation'

import SpeakerList from "./speaker-list";
import SpeakerDetail from './speaker-detail';


const styles = StyleSheet.create({
  dayPicker: {
    flex: 0,
    flexDirection: 'row',
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {width: -5, height: 15}
  },
  dayButton: {
    flex: 1
  },
  dayText: {
    fontSize: 12,
    backgroundColor: "#16a764",
    color: "#0f1726",
    textAlign: 'center',
    padding: 10
  },
  selected: {
    backgroundColor: "#1bce7c",
    color: "white"
  },
  filter: {
    textAlign: "center",
    fontSize: 10,
    padding: 3,
    color: "white"
  },
  RethinkingRest: {
    backgroundColor: "#9b59b6"
  },
  DataFlow: {
    backgroundColor: "#3498db"
  },
  ReactGeneral: {
    backgroundColor: "#f1c40f"
  },
  ReactEverywhere: {
    backgroundColor: "#6DDB9C"
  }
});

class Speaker extends React.Component {
  constructor(props) {
    super(props);
  }
  _renderFilter() {
    if (this.props.filter !== "All") {
      return <Text style={[styles.filter, styles[this.props.filter.replace(/\s/g, "")]]}>FILTERED BY {this.props.filter.toUpperCase()}</Text>
    }
  }
  _renderSpeaker() {
    return <SpeakerList 
            {...this.props} onPress={this._loadSpeakerDetail.bind(this)}/>;
  }

_loadSpeakerDetail(id) {
  this.props.navigation.navigate('SpeakerDetail',{detail:this.props.speakers[id]});
}

  _setDay(index) {
    this.setState({
      day: index
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {/* {this._renderFilter()} */}
        {this._renderSpeaker()}
      </View>
    );
  }
}

// Speaker.propTypes = {
//   dispatch: PropTypes.func,
//   speakers: PropTypes.array
// };

// Speaker.defaultProps = {
//   dispatch: () => {},
//   speakers: []
// };

SpeakerWithNavigation = StackNavigator({
  SpeakerList:{
    screen:({screenProps,navigation})=><Speaker speakers={screenProps.speakers} navigation={navigation} />,
    navigationOptions:()=>({header:null})
  },
  SpeakerDetail:{
    screen:SpeakerDetail,
    navigationOptions:({navigation})=>({title:navigation.state.params.detail.name})
  }
},{
  headerMode:'screen'
});


export default SpeakerContainer = connect((state) => ({
    speakers: state.data.speakers
  }))(({speakers})=><SpeakerWithNavigation screenProps={{speakers:speakers}}/>);

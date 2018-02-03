
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

import { TabNavigator, StackNavigator } from 'react-navigation';
import ScheduleList from "./schedule-list";
import TalkDetail from './talk-detail';
import ThemeConfig from '../config/style-config';


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
    backgroundColor: ThemeConfig.tabBgColor,
    color: ThemeConfig.tabTextColor,
    textAlign: 'center',
    padding: 10
  },
  selected: {
    backgroundColor: ThemeConfig.activeTabBgColor,
    color: ThemeConfig.activeTabTextColor
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

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0
    };
  }
  _renderFilter() {
    if (this.props.filter !== "All") {
      return <Text style={[styles.filter, styles[this.props.filter.replace(/\s/g, "")]]}>FILTERED BY {this.props.filter.toUpperCase()}</Text>
    }
  }
  _renderSchedule() {
    return <ScheduleList
            day={this.state.day}
            {...this.props} onPress={this._loadTalkDetail.bind(this)}/>;
  }

  _loadTalkDetail(item) {
    this.props.navigation.navigate('TalkDetail',{detail:item});
  }

  _setDay(index) {
    this.setState({
      day: index
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.dayPicker}>
          {
            this.props.schedule?this.props.schedule.map((schedule,index)=>(
              <TouchableHighlight
                style={styles.dayButton}
                key={index}
                onPress={this._setDay.bind(this, index)}>
                  <Text
                    style={[styles.dayText, this.state.day === index ? styles.selected : {}]}>
                    {schedule.title}
                  </Text>
              </TouchableHighlight>
            )):null
          }
        </View>
        {/* {this._renderFilter()} */}
        {this._renderSchedule()}
      </View>
    );
  }
}

Schedule.propTypes = {
  dispatch: PropTypes.func,
  schedule: PropTypes.array
};

Schedule.defaultProps = {
  dispatch: () => {},
  schedule: []
};

  ScheduleWithNavigation = StackNavigator({
    ScheduleList:{
      screen:({screenProps,navigation})=><Schedule schedule={screenProps.schedule} navigation={navigation} />,
      navigationOptions:()=>({header:null})
    },
    TalkDetail:{
      screen:TalkDetail,
      navigationOptions:({navigation})=>({title:navigation.state.params.detail.name})
    }
  },{
    headerMode:'screen'
  });
  
  
  export default ScheduleContainer = connect((state) => ({
    schedule: state.data.schedule
    }))(({schedule})=><ScheduleWithNavigation screenProps={{schedule}}/>);
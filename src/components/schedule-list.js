/* @flow */
/*eslint-disable prefer-const */
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import PropTypes from 'prop-types';

import ScheduleItem from "./schedule-item";

class ScheduleList extends React.Component {
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
        {this.props.schedule[this.props.day]?this.props.schedule[this.props.day].slots
          .map((item, index) => {
            return <ScheduleItem key={index} onPress={this.props.onPress} {...item}/>;
          }):<ActivityIndicator size="large" />}
      </ScrollView>
    );
  }
}

ScheduleList.propTypes = {
  day: PropTypes.number,
  dispatch: PropTypes.func,
  schedule: PropTypes.array,
  speakers: PropTypes.array
};

ScheduleList.defaultProps = {
  day: 0,
  dispatch: () => {},
  schedule: [],
  speakers: []
};

export default ScheduleList;
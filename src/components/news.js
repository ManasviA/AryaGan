
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

import NewsList from "./news-list";
import NewsDetail from './news-detail';


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

class News extends React.Component {
  constructor(props) {
    super(props);
  }
  _renderFilter() {
    if (this.props.filter !== "All") {
      return <Text style={[styles.filter, styles[this.props.filter.replace(/\s/g, "")]]}>FILTERED BY {this.props.filter.toUpperCase()}</Text>
    }
  }
  _renderNews() {
    return <NewsList 
            {...this.props} onPress={this._loadNewsDetail.bind(this)}/>;
  }

_loadNewsDetail(id) {
  this.props.navigation.navigate('NewsDetail',{detail:this.props.news[id]});
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
        {this._renderNews()}
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

NewsWithNavigation = StackNavigator({
  NewsList:{
    screen:({screenProps,navigation})=><News news={screenProps.news} navigation={navigation} />,
    navigationOptions:()=>({header:null})
  },
  NewsDetail:{
    screen:({screenProps,navigation})=><NewsDetail {...screenProps} navigation={navigation} />,
    navigationOptions:({navigation})=>({title:navigation.state.params.detail.title})
  }
},{
  headerMode:'screen'
});


export default NewsContainer = connect((state) => {
    return { 
    news: state.data.news,
    newsDetail: state.data.newsDetail }
  })(({news, newsDetail, dispatch})=><NewsWithNavigation screenProps={{news,newsDetail,dispatch}}/>);

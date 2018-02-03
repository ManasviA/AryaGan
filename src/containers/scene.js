import React, { Component } from 'react'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import {Text, Header} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import  Schedule from '../components/schedule';
import Speaker from '../components/speaker';
import News from '../components/news';
import Information from '../components/information';
import ThemeConfig from '../config/style-config';

class ScheduleComp extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Schedule',
      tabBarIcon: ({ tintColor }) => (<Icon size={24} color={tintColor} name="perm-contact-calendar" />)
    }
  
    render() { return(<Schedule></Schedule>) }
  }
  
  class Speakers extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Speakers',
      tabBarIcon: ({tintColor}) => (<Icon size={24} color={tintColor} name="speaker" />)
    }
  
    render() { return(<Speaker {...this.props}/>) }
  }

 
  
  class NewsComp extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'News',
      tabBarIcon: ({tintColor}) => (<Icon size={24} color={tintColor} name="view-headline" />)
    }
  
    render() { return(<News {...this.props}/>) }
  }

  class InformationComp extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Information',
      tabBarIcon: ({tintColor}) => (<Icon size={24} color={tintColor} name="info-outline" />)
    }
  
    render() { return(<Information {...this.props}/>) }
  }
export default Scene= TabNavigator({
    Schedule: { screen: ScheduleComp},
    Speakers: { screen: Speakers },
    News: { screen: NewsComp },
    Information: { screen:InformationComp }
  }, {
    // tabBarComponent: NavigationComponent,
    // tabBarPosition: 'bottom',
    // tabBarOptions: {
    //   bottomNavigationOptions: {
    //     labelColor: 'white',
    //     rippleColor: 'white',
    //     backgroundColor:'#37474F'
    //   }
    // }
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    tabBarOptions:{
      style:{backgroundColor:ThemeConfig.navBarBgColor},
      activeTintColor:'#FFFFFF',
      inactiveTintColor:ThemeConfig.inactiveTintColor
    }
  }
)

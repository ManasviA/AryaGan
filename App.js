import React from 'react';
import Scene from './src/containers/scene'
import { Provider } from "react-redux";
import configureStore from "./src/store/configure-store";
import data from "./src/data";
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Header} from 'react-native-elements';
import { onLoad } from './src/actions/action-creators';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Share} from 'react-native';
import ThemeConfig from './src/config/style-config';


const store = configureStore({ data });


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(onLoad());
  }

  render() {
    return (
      <Provider store={store}>
          <MyHeader />
      </Provider>
    );
  }

}
export default App;


MyHeader = StackNavigator({
  Schedule: {
    screen: Scene,
    navigationOptions: {
      title: `${data.title}`,
      header:<Header
      centerComponent={{ text: 'My Title', style: { color: '#fff',fontFamily:'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif' } } }
      rightComponent={<Icon size={24} onPress={()=>{Share.share({title:'hey',message:'message'})}} name="share" color="white"/>}
      backgroundColor={ThemeConfig.primaryColor}
      statusBarProps={{ barStyle: 'light-content',translucent:true,backgroundColor:ThemeConfig.primaryColor}}
      outerContainerStyles={{
        elevation:20,
        borderBottomWidth:0
      }}
    />
    }
  },
},
  {
    mode: 'modal',
    headerMode: 'screen'
  });

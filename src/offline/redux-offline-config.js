import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
//import {firebaseApp} from '../config/firebase-config';
import firebaseApp from 'react-native-firebase';

const firebaseAction = (action, { body, resource }) => {
  //const { key, ...final } = body;
    switch (action.type) {
      case 'FETCH_DATA':
        return firebaseApp.database().ref().child('data').once('value');
      case  'FETCH_NEWS_DETAIL':
        return firebaseApp.database().ref().child('news_articles').child(action.payload.id).once('value');
      default:
        return null;
    }
}

export default {
  ...offlineConfig,
  effect: (effect, action) => {
    console.log('executing effect...')
    return firebaseAction(action, effect, action);
  }
}
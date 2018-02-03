/* @flow */

import { combineReducers } from "redux";

const data = (state = {
  schedule: [],
  speakers: [],
  tweets: [],
  loading: false,
  meta:{
    newsDetailLoading:false
  },
  faqs:[]
}, action) => {
  switch(action.type) {
    case 'DATA_LOADED':
      return action.payload.val();
    case 'FETCH_NEWS_DETAIL':
      return {...state,meta:{newsDetailLoading:true}};
    case 'NEWS_DETAIL_LOADED':
      return {...state,meta:{newsDetailLoading:false},newsDetail:action.payload.val()};
    default:
      return state;
  }
  
};

const rootReducer = combineReducers({
  data
});

export default rootReducer;

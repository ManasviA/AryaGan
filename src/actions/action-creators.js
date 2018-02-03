
export function onLoad() {
  return {
    type:'FETCH_DATA',
    meta: {
      offline: {
        // the network action to execute:
        effect: {},
        // action to dispatch when effect succeeds:
        commit: { type: 'DATA_LOADED' },
        // action to dispatch if network action fails permanently:
        rollback: { type: 'DATA_LOAD_FAILURE' }
      }
    }
  }
}

export function loadNewsDetail(id) {
  return {
    type:'FETCH_NEWS_DETAIL',
    payload:{id},
    meta: {
      offline: {
        // the network action to execute:
        effect: {},
        // action to dispatch when effect succeeds:
        commit: { type: 'NEWS_DETAIL_LOADED',meta:{id} },
        // action to dispatch if network action fails permanently:
        rollback: { type: 'NEWS_DETAIL_LOAD_FAILURE' }
      }
    }
  }
}
// return (dispatch)=> {
//     let itemsRef = firebaseApp.database().ref();
//     itemsRef.once('value', (snap) => {

//       console.log(snap);

//       dispatch({type:'DATA_LOADED',data:snap.val()});
//       // // get children as an array
//       // var items = [];
//       // snap.forEach((child) => {
//       //   items.push({
//       //     title: child.val().title,
//       //     _key: child.key
//       //   });
//       // });

//       // this.setState({
//       //   dataSource: this.state.dataSource.cloneWithRows(items)
//       // });

//     });
//   }
// }
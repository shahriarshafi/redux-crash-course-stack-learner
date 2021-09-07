import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store'
import Count from './components/Count';
import Control from './components/Control';

function App() {

  // A reducer function must have two parameters
  // State , Action
  // const reducer = (state ={}, action) => {
  //   if(action.type === 'A'){
  //     return {
  //       ...state,
  //       A : "I am A"
  //     }
  //   }
  //   if(action.type === 'B'){
  //     return {
  //       ...state,
  //       A : "I am B"
  //     }
  //   }
  //   if(action.type === 'C'){
  //     return {
  //       ...state,
  //       A : "I am C"
  //     }
  //   }

  //   return state;
  // }
  // const store = createStore(reducer);

  // store.subscribe(() => {
  //   console.log(store.getState())
  // })

  // store.dispatch({type : "A"}) //It tooks Object as argument
  // store.dispatch({type : "A"})
  // store.dispatch({type : "A"})
  // store.dispatch({type : "Something"})
  // store.dispatch({type : "C"})

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Learning Redux with Stack Learener</h1>
        <Count/>
        <Control/>
      </div>
    </Provider>
  );
}

export default App;

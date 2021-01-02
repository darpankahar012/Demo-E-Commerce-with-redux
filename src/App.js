// import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
// import "./App.css";

// import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

// class App extends Component {
//   render() {

//     return (
//       <div>
//         <h1>Hello User !</h1>
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import LoginComponent from './comp/LoginComponentt'
import SignUpComponent from './comp/SignUpComponent'
import {autoLogin} from './actions/authAction'

class App extends React.Component{

  // componentDidMount(){
  //   this.props.autoLogin()
  // }

  render(){
    return (
      <div className="App">
            {
              !this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {this.props.userReducer.user.username}</h1>
            }
           <SignUpComponent/>
           <LoginComponent/>
           <button>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



// import React, {useEffect} from 'react'
// import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
// import LoginComponent from './components/LoginComponentt'
// import SignUpComponent from './components/SignUpComponent'
// import {autoLogin} from './actions/userActions'

// const App = () => {
//   const userReducer = useSelector(state => state.userReducer)
//   const dispatch = useDispatch()
  
//   useEffect(() => {
//     dispatch(autoLogin())
//   }, [])
//   return (
//     <div className="App">
//         {
//           !userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {userReducer.user.username}</h1>
//         }
//         <SignUpComponent/>
//         <LoginComponent/>

//     </div>
//   )
// }

// export default App
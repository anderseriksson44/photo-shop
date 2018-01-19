import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actionCreators';
// import Photogrid from "./PhotoGrid";
import Photo from "./Photo";
import Menu from "./Menu"
import { Link } from "react-router-dom"

// import logo from '../style/logo.svg';
import '../style/App.css';

class App extends Component {


  componentDidMount() {
       
  }
  
  render() {  
     console.log("props", this.props);
      const list = this.props.posts.map((post, i) => {
          return <Photo {...this.props} key={i} i={i} post={post} />
      }) 
    return (
      <div>
        <Menu/>
          <div className="App">
            <Link to="/" className="linkclass"> Photo@Shop</Link>
            <h2>Du är inloggad som {this.props.user.email} </h2>
            <div className="photo-grid"> 
             { list }
            </div>
          </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
    purchase: state.purchase,
    user: state.user
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispachToProps)(App);



import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import * as actions from "../actions/actionCreators";
import firebase from "../firebase"

class Login extends Component {

    state = {
            email: "",
            passw: ""
        }

    componentDidMount() {
        this.props.userUpdate();
    }
    
    login = e => {
        firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.passw)
    }
   
    
    logout = e => {
        firebase.auth()
        .signOut();
    }

    register = e => {
            e.preventDefault()
            firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.passw)
            .then (user => {
                const newUser = {
                    email: user.email,
                    isAdmin: false
                }
                console.log(user.uid)

                firebase.database().ref(`users/${user.uid}`).set(newUser);
            })

        }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.state.user, this.state.passw);
    }

    render () {
        console.log (this.props.user.email)
        return (
            <div className="loginform">
                <form onSubmit={this.register}>
                    <input type="text" onChange={this.onChange} name="email" value={this.state.email} />
                    <input type="password" onChange={this.onChange} name="passw" value={this.state.passw}/>
                    <input type="submit" value="Register" />
                </form>
                    <button className="menubutton" onClick={this.login}> Login </button> 
                    <button className="menubutton" onClick={this.logout}>Logout </button>
                    Logged in as: { this.props.user && this.props.user.email }
    
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)    
}


function mapStateToProps(state){
  return {
      user: state.user
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);




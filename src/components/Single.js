import React, { Component } from 'react';
import Photo from './Photo';
import Menu from "./Menu"
import Comments from './Comments';
// import Kom from "./Kom"
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import * as actions from "../actions/actionCreators";

class Single extends Component {

  render() {
    console.log("Single", this.props);
    const { id } = this.props.match.params;
    console.log ("id", id)
    const i = this.props.posts.findIndex((post) => post.id === id);
    const post = this.props.posts[i];
    console.log("post", post)

    const postComments = this.props.comments[id] || [];
    console.log("postComments", postComments)
    return (
      <div>
      <Menu />
        
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
        </div>
    </div>
    )
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)    
}


function mapStateToProps(state){
  return {
      posts: state.posts,
      comments: state.comments
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Single);

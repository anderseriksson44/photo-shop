import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import * as actions from "../actions/actionCreators";
// import comments from '../data/comments';

class Comments extends Component {

state = {
    value: ""
}

// componentDidMount(){
//     //One listener for every item added
//     this.props.addListener();

// }

componentDidMount(){
  //We want to fetch them all! Like with the movies
  this.props.fetchComments();
  console.log("commennts",this.props.comments)
}


  renderComment(comment, i) {
      console.log("comment", comment.text)
      console.log("user", comment.anv)

      // console.log("props", this.state.user)
      
    return (
      <div className="comment" key={i}>
        <p>
          <span className="user"> {comment.anv } &emsp;&emsp;&emsp;</span>
          {comment.text } 
          {/* {this.props.user.email} */}
          {/* <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.match.params.id, i)}>&times;</button> */}
        </p>
      </div>
    )
  }

add = () => {
    //No need for the random ID, just send these values
    console.log("post", this.props.post)
    this.props.addComment({
      text: this.state.value,
      anv: this.props.user.email,
      postid: this.props.post
     
    }
        
    );

}

// remove = (kommentar) => {
//     this.props.removeTodo(kommentar);
//   }

//   edit = (kommentar) => {
//     const editedTodo = Object.assign({}, todo, { text: this.state.value});
//     this.props.editTodo(editedTodo);
//   }

onChange = e => this.setState({ [e.target.name]: e.target.value})


  render() {

    
    // const list = this.props.comments.map(koms, i => 
    //   <div className="comment" key={i}>
    //     <p>
    //       <strong>{koms.user}</strong>
    //       {koms.text}
    //       </p>
    // </div>
    // )
      return (
      <div className="comments">
        { this.props.comments.map(this.renderComment) }
        <input type="email" ref="author" placeholder={this.props.user.email} readOnly/>
        <input type="text" onChange={this.onChange} placeholder="comment" name="value" value={this.state.value} />
       
        <button className="button" onClick={this.add}> Add comment </button>
        {/*{ list }*/}
      </div>
    );
    
}
}
    

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)    
}


function mapStateToProps(state){
  return {
      post: state.post,
      comments: state.comments,
      user: state.user
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

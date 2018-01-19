import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import * as actions from "../actions/actionCreators";


class Comments extends Component {
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
  }
 
  handleSubmit = e =>  {
    e.preventDefault();
    const { postId } = this.props.match.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
    console.log(this.props.match.params)
    console.log("psotid", postId, "author", author, "comment", comment)
  }
  render() {
    console.log("user", this.props.user)
    if (this.props.user) 
    return (
      <div className="comments">
        {/* {this.props.postComments.map(this.renderComment)} */}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder={this.props.user.email} value={this.props.user.email}/>
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
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
      comments: state.comments,
      user: state.user
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);


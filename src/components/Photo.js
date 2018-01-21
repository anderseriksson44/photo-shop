import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CSSTransitionGroup from 'react-addons-css-transition-group';
    
class Photo extends Component {

    
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
            <Link to={`/view/${post.id}`}>
                <img src={post.display_src} alt={post.caption} className="grid-photo" />
            </Link>
          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>

        </div>

        <figcaption>
            <p>{post.caption}</p>
            <div className="control-buttons">
                <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
                <Link className="button" to={`/view/${post.id}`}>
                    <span className="comment-count">
                        <span className="speech-bubble"></span>
                            {comments[post.id] ? comments[post.id].length : 0 }
                    </span>
                </Link>
                {/* <button onClick= {this.props.purchase.bind(null, i)} className="purchase">Buy</button> */}
            </div>
        </figcaption>
    </figure>
    )
  }
};


export default Photo

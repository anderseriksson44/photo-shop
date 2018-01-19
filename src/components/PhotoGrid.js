import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
  render() {
      console.log(this.props.posts);
      const list = this.props.posts.map((post, i) => {
          return <p key={i}> { post.code } </p>
      })
    return (
      <div className="photo-grid">
          <h1> Hej </h1>
         <div className="photo-grid"> 
             { list }
        </div>
      </div>
    )
  }
};

export default PhotoGrid;

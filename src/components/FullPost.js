import React from 'react';
import classes from './FullPost.module.css';
import Auxiliary from './Auxiliary.js';
import axios from 'axios';

class FullPost extends React.Component{

	    state={
        loadedPost:null

    }

   // componentDidUpdate () {
   //      if ( this.props.currentPost) {
   //          if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id!==this.props.currentPost)){
   //              axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.currentPost )
   //                  .then( response => {
   //                      // console.log(response);
   //                      this.setState( { loadedPost: response.data } );
   //                  } );
   //          }
   
   //      }
   //  }


	render(){
		let passedPost='';
		if(this.props.currentPost){
		passedPost=this.props.posts.find(post=>post.id===this.props.currentPost);
			


		}
	
	
	let cur='';
	let result=<p>Please select a post</p>
	if(this.props.currentPost){
		if(passedPost){
			console.log(passedPost)
		result=(
				<Auxiliary>
				<h2>{passedPost.title} </h2>
				<p>{passedPost.body}</p>
				<button onClick={this.props.deletePost}> Delete </button>
				</Auxiliary>
			)
	}
	}
	


	return (
			<div className={classes.FullPost}>

				{result}
			</div>
		)
}

}
export default FullPost;
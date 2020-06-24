import React from 'react';
import classes from './AddPost.module.css';
import Auxiliary from './Auxiliary.js';
import axios from 'axios';


class AddPost extends React.Component {


	state={
		title:"",
		author:"",
		body:""
	}

	ID=()=> {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

	addPost=()=>{
		if(this.state.title!=="" && this.state.author !=="" && this.state.body!==""){
			const newPost={
				id:this.ID(),
				author:this.state.author,
				title:this.state.title,
				body:this.state.body
			}
			this.props.updateState(newPost);
			this.setState({title:"", author:"", body:""});
		}
	
	}


	render(){
	return (
		<div className={classes.AddPost}>
			<h2>Add a post </h2>
			<label>Author</label>
		 <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
			<label>Title</label>
            <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
            <label>Content</label>
            <textarea rows="4" value={this.state.body} onChange={(event) => this.setState({body: event.target.value})} />
			<button onClick={this.addPost}>Add a post</button>
		</div>
		)
}
}


export default AddPost;
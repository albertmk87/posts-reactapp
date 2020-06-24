import React from 'react';
import classes from './Post.module.css';

const Post=(props)=>{
	return (
			<div onClick={props.select} className={classes.Post}>
				<h2>{props.title}</h2>
				<p>{props.author}</p>
			</div>
		)
}


export default Post;
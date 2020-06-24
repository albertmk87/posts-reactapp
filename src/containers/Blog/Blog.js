import React from 'react';
import Post from '../../components/Post.js';
import Auxiliary from '../../components/Auxiliary.js';
import classes from './Blog.module.css';
import FullPost from '../../components/FullPost.js';
import AddPost from '../../components/AddPost.js';


class Blog extends React.Component {

	state={
		posts:[],
		currentPostId:null,
		data:{}

	}

	async componentDidMount(){
		let url="https://jsonplaceholder.typicode.com/posts";
    	  let obj=await (await fetch(url)).json();
    	  let response=obj.slice(0,8).map(post=>{
    	  	return {
    	  		...post,
    	  		author:"Albert"
    	  	}
    	  })
    	 this.setState({posts:response})
	}

	select=(id)=>{
		this.setState({currentPostId:id});
	}

	deletePost=(id)=>{
		let newPosts=this.state.posts;
		let findIndex=newPosts.findIndex(post=>post.id===id);
		newPosts.splice(findIndex,1);
		this.setState({posts:newPosts, currentPostId:null})
	}

	updateState=(newData)=>{
			const newPosts=this.state.posts;
			newPosts.push(newData);
			this.setState({posts:newPosts})

	}

	render(){

		let posts=this.state.posts.map(post=>{
			return <Post select={()=>this.select(post.id)} key={post.id} id={post.id} title={post.title} author={post.author} />
		})

		return (
			<Auxiliary>
				<div className={classes.Blog}>
				{posts}
				</div>
				<div>
				<FullPost deletePost={()=>this.deletePost(this.state.currentPostId)} currentPost={this.state.currentPostId} posts={this.state.posts} />
				</div>
				<div>
				<AddPost updateState={this.updateState} />
				</div>
				</Auxiliary>
			)
	}

}



export default Blog;
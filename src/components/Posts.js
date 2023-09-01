import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import me from "../images/me.jpg";
import mypost from "../images/mypost.jpg";

export const Posts = () => {
	const posts = useSelector(state => state.posts);
	const dispatch = useDispatch();

	const [likeCount, setLikeCount] = useState(42);
	const [commentCount, setCommentCount] = useState(12);
	const [shareCount, setShareCount] = useState(3);
	const initialButtonStates = posts.map(() => false);
	const [likeButtonStates, setLikeButtonStates] = useState(initialButtonStates);
	const [commentButtonStates, setCommentButtonStates] = useState(initialButtonStates);
	const [shareButtonStates, setShareButtonStates] = useState(initialButtonStates);
	const [likeButtonClicked, setLikeButtonClicked] = useState(false);
	const [commentButtonClicked, setCommentButtonClicked] = useState(false);
	const [shareButtonClicked, setShareButtonClicked] = useState(false);
	const handleCount = (buttonType) => {
		if (buttonType === "like") {
		  if (!likeButtonClicked) {
			 setLikeCount(likeCount + 1);
			 setLikeButtonClicked(true);
		  } else {
			 setLikeCount(likeCount - 1);
			 setLikeButtonClicked(false);
		  }
		} else if (buttonType === "comment") {
		  if (!commentButtonClicked) {
			 setCommentCount(commentCount + 1);
			 setCommentButtonClicked(true);
		  } else {
			 setCommentCount(commentCount - 1);
			 setCommentButtonClicked(false);
		  }
		} else if (buttonType === "share") {
		  if (!shareButtonClicked) {
			 setShareCount(shareCount + 1);
			 setShareButtonClicked(true);
		  } else {
			 setShareCount(shareCount - 1);
			 setShareButtonClicked(false);
		  }
		}
	 };
	const handlePostCount = (index, buttonType) => {
		const updatePosts = [...posts];
		const post = updatePosts[index];
	 
		if (buttonType === "like") {
		  if (likeButtonStates[index]) {
			 post.likes -= 1;
		  } else {
			 post.likes += 1;
		  }
		  setLikeButtonStates(prevStates => {
			 const updatedStates = [...prevStates];
			 updatedStates[index] = !prevStates[index];
			 return updatedStates;
		  });
		} else if (buttonType === "comment") {
			if (commentButtonStates[index]) {
				post.comments -= 1;
			} else {
				post.comments += 1;
			}	
			setCommentButtonStates(prevStates => {
				const updatedStates = [...prevStates];
				updatedStates[index] = !prevStates[index];
				return updatedStates;
			 });
		} else if (buttonType === "share") {
			if (shareButtonStates[index]) {
				post.shares -= 1;
			} else {
				post.shares += 1;
			}
			setShareButtonStates(prevStates => {
				const updatedStates = [...prevStates];
				updatedStates[index] = !prevStates[index];
				return updatedStates;
			 });
		}
	 
		dispatch({ type: "UPDATE_POSTS", posts: updatePosts });
	 };
	 
	return (
		<div>
			<div className="posts-container">
				<div className="wrapper">
				<div className="author-info">
							<img className="author-img" src={me} alt="Author" />
							<h3>Taras</h3>
							<h4>@mast3rp1ece</h4>
							<h5 className="date">21 July</h5>
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, commodi quidem est ipsam corrupti numquam quod harum nobis voluptate distinctio ipsa rem sed error vitae nisi, alias sunt. Nostrum, alias.</p>
						<img className="post-img" src={mypost} alt="Post" />
						<div className="actions">
							<button onClick={() => handleCount("like")} className="like count-button">{likeCount}</button>
							<button onClick={() => handleCount("comment")} className="comment count-button">{commentCount}</button>
							<button onClick={() => handleCount("share")} className="share count-button">{shareCount}</button>
						</div>
				</div>
			</div>
			{posts.map((post, index) => (
				<div className="posts-container" key={index}>
					<div class="wrapper">
						<div className="author-info">
							<img className="author-img" src={posts.authorImage} alt="Author" />
							<h3>{posts.author}</h3>
							<h4>@{posts.authorNickname}</h4>
							<h5 className="date">{posts.date}</h5>
						</div>
						<p>{posts.text}</p>
						<img className="post-img" src={posts.image} alt="Post" />
						<div className="actions">
							<button onClick={() => handlePostCount(index, "like")} className="like count-button">{post.likes}</button>
							<button onClick={() => handlePostCount(index, "comment")} className="comment count-button">{post.comments}</button>
							<button onClick={() => handlePostCount(index, "share")} className="share count-button">{post.shares}</button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
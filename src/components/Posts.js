import React from "react";
import { useSelector } from "react-redux";
import me from "../images/me.jpg";
import mypost from "../images/mypost.jpg";

export const Posts = () => {
	const posts = useSelector(state => state.posts);
	
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
							<span className="like">43</span>
							<span className="comment">12</span>
							<span className="share">3</span>
						</div>
				</div>
			</div>
			{posts.map((posts, index) => (
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
							<span className="like">{posts.likes}</span>
							<span className="comment">{posts.comments}</span>
							<span className="share">{posts.shares}</span>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
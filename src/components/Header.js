import React from "react";
import { Link } from "react-router-dom";



export const Header = () => {
	return (
		<div className="header">
			<nav className="header-links">
				<Link to="/posts">Posts</Link>
				<Link className="add-link" to="/addpost">Add Post + </Link>
			</nav>
		</div>
	)
}
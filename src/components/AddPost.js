import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

export const AddPost = () => {
	const [text, setText] = useState('');
	const [imageLink, setImageLink] = useState('');
	const [author, setAuthor] = useState('React');
	const [authorNickname, setAuthorNickname] = useState('');
	const [authorImage, setAuthorImage] = useState('');

	const dispatch = useDispatch();

	const handleAddPost = () => {
		alert('Post added! Check the posts.')
		const newPost = {
			author,
			authorImage,
			authorNickname,
			date: format(new Date(), 'dd MMMM'),
			text,
			image: imageLink,
			likes: Math.floor(Math.random() * (100-50) + 50),
			comments: Math.floor(Math.random()*40),
			shares: Math.floor(Math.random()*7),
		};

		dispatch({ type: 'ADD_POST', payload: newPost });

		setText('');
		setImageLink('');
		setAuthor('Redux');
	};

	return (
		<div className="add-post">
			<h2 className="add-title">Add Your Post</h2>
			<div>
				<label for='author-name'>Choose Author:</label>
				<select id="author-name" value={author} onChange={e => setAuthor(e.target.value)}>
					<option value="React">React</option>
					<option value="Redux">Redux</option>
					<option value="JavaScript">JavaScript</option>
					<option value="HTML">HTML</option>
				</select>
			</div>
			<input type="text" placeholder="Author Photo URL" value={authorImage} onChange={e => setAuthorImage(e.target.value)} />
			<input type="text" placeholder="Nickname" value={authorNickname} onChange={e => setAuthorNickname(e.target.value)} />
			<input type="text" placeholder="Image URL" value={imageLink} onChange={e => setImageLink(e.target.value)} />
			<textarea placeholder="Post Text" value={text} onChange={e => setText(e.target.value)} />
			<button className="add-button" onClick={handleAddPost}>Add Post</button>
		</div>
	)
}
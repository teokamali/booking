import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { getBlog, getComments } from "../../services/api";
export const BlogContext = createContext();

function BlogContextProvider({ children }) {
	const [blog, setBlog] = useState([]);
	const [comments, setComments] = useState([]);
	const categories = [
		{ label: "test1", value: "test" },
		{ label: "test2", value: "test" },
	];
	const tags = [
		{ label: "test1", value: "test" },
		{ label: "test2", value: "test2" },
	];
	useEffect(() => {
		try {
			(async function productFetch() {
				const { data } = await axios.get(`${getBlog}`);
				const { blogs } = data;
				setBlog(blogs);
			})();
			(async function productFetch() {
				const { data } = await axios.get(`${getComments}`);
				const { comments } = data;
				setComments(comments);
			})();
		} catch (e) {
			// console.log(e);
		}
	}, []);

	return (
		<BlogContext.Provider value={{ blog, setBlog, categories, tags, comments }}>
			{children}
		</BlogContext.Provider>
	);
}

export default BlogContextProvider;

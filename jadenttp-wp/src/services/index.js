import axios from "services/_axios";

export const getPosts = async () => {
	const res = await axios.get(`posts`);
	return res;
};
export const getPostFeaturedImage = async () => {
	const res = await axios.get(`media`);
	return res;
};

// export const getSearchKeyword = async ({ search_keyword }) => {
// 	const res = await axios.get(
// 		`campaign-testdrive/dealer/generalSearch?search_keyword=${search_keyword}`
// 	);
// 	return res?.data;
// };

// export const postUserInformation = async (object) => {
// 	const res = await axios.postForm(`campaign-testdrive/set-register`, object);

// 	return res?.data;
// };

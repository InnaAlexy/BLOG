import { request } from '../utils';
import { setPostData } from './set-post-data';

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? request(`/posts/${id}`, 'PATCH', newPostData)
		: request('/posts', 'POST', newPostData);

	return saveRequest.then((updetedPost) => {
		dispatch(setPostData(updetedPost.data));

		return updetedPost.data;
	});
};

import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Pagination, PostCard, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { debounce } from './utils';
import { request } from '../../utils';

const MainConteiner = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	useEffect(() => {
		request(
			`/posts?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`,
		).then(({ data: { posts, lastPage } }) => {
			setPosts(posts);
			setLastPage(lastPage);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, shouldSearch]);

	const startDelayedsearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedsearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="posts-and-search">
				<Search onChange={onSearch} searchPhrase={searchPhrase} />
				{posts.length > 0 ? (
					<div className="post-list">
						{posts.map(({ id, imageUrl, title, publishedAt, comments }) => (
							<PostCard
								key={id}
								id={id}
								imageUrl={imageUrl}
								title={title}
								publishedAt={publishedAt}
								commentsCount={comments.length}
							/>
						))}
					</div>
				) : (
					<div className="no-posts-found">Статьи не найдены</div>
				)}
			</div>

			{lastPage > 1 && posts.length > 0 && (
				<Pagination setPage={setPage} page={page} lastPage={lastPage} />
			)}
		</div>
	);
};

export const Main = styled(MainConteiner)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}

	& .no-posts-found {
		font-size: 18px;
		margin-top: 40px;
		text-align: center;
	}
`;

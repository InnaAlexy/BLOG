import PropTypes from 'prop-types';
import { Icon } from '../../../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, openModal, removeCommentAsync } from '../../../../../../actions';
import { checkAccess } from '../../../../../../utils';
import { ROLE } from '../../../../../../constants';
import { selectUserRole } from '../../../../../../selectors';
import styled from 'styled-components';

const CommentConteiner = ({ className, postId, id, author, content, publishedAt }) => {
	const userRole = useSelector(selectUserRole);

	const dispatch = useDispatch();

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комметарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], userRole);

	return (
		<div className={className}>
			<div className="comment">
				<div className="info-panel">
					<div className="author">
						<Icon
							inactive={true}
							id="fa-user-circle-o"
							margin="0 10px 0 0"
							size="18px"
						/>
						{author}
					</div>
					<div className="publishedAt">
						<Icon
							inactive={true}
							id="fa-calendar-o"
							margin="0 10px 0 0"
							size="18px"
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment=text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					id="fa-trash-o"
					margin="0 0 0 10px"
					size="21px"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentConteiner)`
	display: flex;
	margin-top: 10px;

	& .comment {
		border: 1px solid #000;
		padding: 5px 10px;
		width: 550px;
	}

	& .info-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .publishedAt {
		display: flex;
	}
`;

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};

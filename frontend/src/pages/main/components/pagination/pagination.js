import PropTypes from 'prop-types';
import { Button } from '../../../../components';
import styled from 'styled-components';

const PaginationConteiner = ({ className, lastPage, page, setPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationConteiner)`
	display: flex;
	justify-content: center;
	margin: 0 0 20px;
	padding: 0 35px;
	position: absolute;
	bottom: 140px;
	width: 100%;

	& button {
		margin: 0 5px;
	}

	& .current-page {
		width: 100%;
		height: 32px;
		margin: 0 5px;
		font-size: 18px;
		font-weight: 500;
		line-height: 26px;
		text-align: center;
		border: 1px solid #000;
	}
`;

Pagination.propTypes = {
	lastPage: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};

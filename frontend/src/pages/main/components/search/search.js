import PropTypes from 'prop-types';
import { Icon, Input } from '../../../../components';
import styled from 'styled-components';

const SearchConteiner = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				onChange={onChange}
				placeholder="Поиск по заголовкам..."
			/>
			<Icon inactive={true} id="fa-search" size="21px" />
		</div>
	);
};

export const Search = styled(SearchConteiner)`
	display: flex;
	position: relative;
	margin: 40px auto 0;
	width: 340px;
	height: 40px;

	& > input {
		padding: 10px 32px 10px 10px;
	}

	& > div {
		position: absolute;
		right: 9px;
		top: 3px;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

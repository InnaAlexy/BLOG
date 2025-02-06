import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRowConteiner = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowConteiner)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? '1px solid #000' : 'none')};

	& > div {
		padding: 0 10px;
		display: flex;
	}

	& .login-column {
		width: 172px;
	}

	& .registeredAt-column {
		width: 213px;
	}

	& .role-column {
		width: auto;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};

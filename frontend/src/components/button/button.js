import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonConteiner = ({ className, width, children, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonConteiner)`
	width: ${({ width = '100%' }) => width};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	height: 32px;
	border: 1px solid #000;
	background-color: #eee;

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};

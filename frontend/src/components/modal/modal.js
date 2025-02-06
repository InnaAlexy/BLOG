import styled from 'styled-components';
import { Button } from '../button/button';
import { useSelector } from 'react-redux';
import {
	selectModalText,
	selectModalIsOpen,
	selectModalonCancel,
	selectModalOnConfirm,
} from '../../selectors';

const ModalConteiner = ({ className }) => {
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalonCancel);
	const isOpen = useSelector(selectModalIsOpen);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay">
				<div className="box">
					<h3>{text}</h3>
					<div className="buttons">
						<Button width="120px" onClick={onConfirm}>
							Да
						</Button>
						<Button width="120px" onClick={onCancel}>
							Отмена
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalConteiner)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 20;

	& .overlay {
		background-color: rgb(0 0 0 / 70%);
		width: 100%;
		height: 100%;
		position: absolute;
	}

	& .box {
		position: relative;
		width: 400px;
		margin: 0 auto;
		padding: 0 20px 20px;
		z-index: 30;
		top: 50%;
		transform: translate(0, -50%);
		background-color: #fff;
		text-align: center;
		border: 3px solid #000;
	}

	& .buttons {
		display: flex;
		justify-content: center;
	}

	& .buttons button {
		margin: 0 5px;
	}
`;

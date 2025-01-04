import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Lang } from '../context/Lang.context';

const Footer = () => {
	const { lang } = useContext(Lang);

	return (
		<Wrapper>
			<Link to={'/terms'}>
				<span>
					{lang === 'es' ? 'Términos y condiciones' : 'Termes i condicions'}
				</span>
			</Link>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 0.8rem;
	position: relative;
	bottom: 0;
	width: 100%;
	padding: 1rem 0;
	margin-top: auto;
`;

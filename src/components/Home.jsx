import { Link, Navigate, useNavigation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useContext } from 'react';
import { Lang } from '../context/Lang.context';
import Loading from 'react-loading';

const Home = () => {
	const { lang } = useContext(Lang);
	const navigation = useNavigation();
	return (
		<Wrapper
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 0.8 }}
		>
			{navigation.state === 'loading' ? (
				<Loading type='bubbles' color='#cccccc' width={'40%'} />
			) : (
				<>
					<Title>
						<span>{lang === 'es' ? 'Restaurante' : 'Restaurant'}</span>
						<span>La Fontana</span>
					</Title>
					<Links>
						<CustomLink to='/carta'>Carta</CustomLink>
						<CustomLink to='/domicilio'>
							{lang === 'es' ? 'Domicilio' : 'Domicili'}
						</CustomLink>
					</Links>
				</>
			)}
		</Wrapper>
	);
};

export default Home;

export const AdminHome = () => {
	return <Navigate to='/login' />;
};

const Wrapper = styled(motion.main)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const Title = styled.h1`
	display: flex;
	flex-direction: column;
	row-gap: 15px;
	margin: 200px 0 80px;
	color: white;
	font-size: 4rem;
	font-family: DeliciousHandrawn, serif;
	text-align: center;
	font-weight: normal;

	@media (min-width: 800px) {
		flex-direction: unset;
		column-gap: 1.3rem;
	}
	@media (min-width: 600px) {
		font-size: 5rem;
	}
`;
const Links = styled.div`
	display: flex;
	column-gap: 25px;
`;
const CustomLink = styled(Link)`
	color: white;
	font-size: 2em;

	:before {
		content: '🍕';
		display: inline-block;
	}
`;

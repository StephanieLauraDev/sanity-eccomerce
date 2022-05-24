import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<MainContainer>{children}</MainContainer>
			<Footer />
		</>
	);
};

export default Layout;

const MainContainer = styled.main`
	padding: 1rem;
	min-height: 85vh;
`;

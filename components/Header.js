import Link from "next/link";
import styled from "styled-components";

const Header = () => {
	return (
		<HeaderContainer>
			<h1>Eccomerce Store</h1>

			<nav>
				<ul>
					<li>
						<Link href="/">About</Link>
					</li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	background: #990d35;
	color: white;

	h1 {
		color: #fcd581;
	}
`;

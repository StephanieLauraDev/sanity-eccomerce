import Link from "next/link";
import styled from "styled-components";

const Header = () => {
	return (
		<HeaderContainer>
			<h1>Eccomerce Store</h1>

			<nav>
				<ul>
					<li>
						<Link href="/">Account</Link>
					</li>
					<li>
						<Link href="/">Checkout</Link>
					</li>
					<li>
						<Link href="/">Basket</Link>
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
	color: #fff;

	h1 {
		color: #fcd581;

		&:hover {
			text-decoration: underline;
		}
	}

	nav ul {
		display: flex;
		gap: 1.5rem;
	}
`;

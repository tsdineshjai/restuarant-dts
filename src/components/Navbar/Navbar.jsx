import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
	const [toggleState, setToggleState] = React.useState(false);
	return (
		<div className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.gericht} alt="restuarant logo" />
			</div>
			<ul className="app__navbar-links">
				<li className="p__opensans">
					<a href="#home">Home</a>
				</li>
				<li className="p__opensans">
					<a href="#about">About</a>
				</li>
				<li className="p__opensans">
					<a href="#menu">Menu</a>
				</li>
				<li className="p__opensans">
					<a href="#awards">Awards</a>
				</li>
				<li className="p__opensans">
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="app__navbar-login">
				<a href="#login" className="p__opensans">
					Log In / Register
				</a>
				<div className="app__navbar-bar"></div>
				<a href="/" className="p__opensans">
					Book Table
				</a>
			</div>

			<div className="app__navbar-smallscreen">
				<GiHamburgerMenu
					color="#fff"
					fontSize={27}
					onClick={() => setToggleState((prevState) => !prevState)}
				/>

				{toggleState && (
					<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
						<MdOutlineRestaurantMenu
							fontSize={27}
							onClick={() => setToggleState((prevState) => !prevState)}
							className="overlay__close"
						/>
						<ul className="app__navbar-links_smallscreen">
							<li className="p__opensans">
								<a href="#home">Home</a>
							</li>
							<li className="p__opensans">
								<a href="#about">About</a>
							</li>
							<li className="p__opensans">
								<a href="#menu">Menu</a>
							</li>
							<li className="p__opensans">
								<a href="#awards">Awards</a>
							</li>
							<li className="p__opensans">
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

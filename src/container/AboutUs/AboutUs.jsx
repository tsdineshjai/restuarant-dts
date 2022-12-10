import React from "react";

import "./AboutUs.css";

import { images } from "../../constants";

const AboutUs = () => (
	<div className="app__aboutUs">
		<div className="app__aboutUs_G">
			<img src={images.G} alt="G" />
		</div>
		<div className="app__aboutUs__content">
			<div className="app__aboutUs__content_About">
				<h1>About Us</h1>
				<img src={images.spoon} alt="spoon" />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
					adipiscing ultrices vulputate posuere tristique. In sed odio nec
					aliquet eu proin mauris et.
				</p>
				<button className="custom__button">Know More</button>
			</div>
			<div className="app__aboutUs_knifeImage">
				<img src={images.knife} alt="knife" />
			</div>

			<div className="app__aboutUs__content_History">
				<h1>Our History</h1>
				<img src={images.spoon} alt="spoon" />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
					adipiscing ultrices vulputate posuere tristique. In sed odio nec
					aliquet eu proin mauris et.
				</p>
				<button className="custom__button">Know More</button>
			</div>
		</div>
	</div>
);

export default AboutUs;

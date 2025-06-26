import React from "react";

import { useState } from "react";


const Home = () => {

	const [lightColor, setLightColor] = useState("amarillo");

	const colors = ["red", "yellow", "green"]; 

	const toggleLight = () => {
		const currentIndex = colors.indexOf(lightColor);
		const nextIndex = (currentIndex + 1) % colors.length;
		setLightColor(colors[nextIndex]);
	};

	return (
		<div className="text-center">
			<div className="cable"></div>
			<div className="trafficLight">
				<div className={"light red " + (lightColor == "red" ? "on" : "")} onClick={() => setLightColor("red")}></div>
				<div className={"light yellow " + (lightColor == "yellow" ? "on" : "")} onClick={() => setLightColor("yellow")}></div>
				<div className={"light green " + (lightColor == "green" ? "on" : "")} onClick={() => setLightColor("green")}></div>
			</div>
			
			<button
				className="btn btn-dark mt-5" onClick={toggleLight}> Chance trafficLight</button>

		</div>
	);
};

export default Home;
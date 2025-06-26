import React from "react";

import { useState } from "react";


const Home = () => {

	const [lightColor, setLightColor] = useState("amarillo");

	return (
		<div className="text-center">
			<div className="cable"></div>
			<div className="trafficLight">
				<div className={"ligth red " + (lightColor=="red"? "on": "" )} onClick={()=>setLightColor("red")}></div>
				<div className={"ligth yellow " + (lightColor=="yellow"? "on": "" )} onClick={()=>setLightColor("yellow")}></div>
				<div className={"ligth green " + (lightColor=="green"? "on": "" )} onClick={()=>setLightColor("green")}></div>
			</div>
			
        
		</div>
	);
};

export default Home;
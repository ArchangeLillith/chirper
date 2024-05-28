//npm run dev to start the project
//server is 3000, frontend is 8000
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Chirps from "./views/Chirps";
import NewChirp from "./views/NewChirp";
import NotFound from "./views/NotFound";
import Details from "./views/Details";
import UpdateChirps from "./views/UpdateChirp";
interface AppProps {}

const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<div className="px-5 py-2">
				<Link className="px-5 py-2" to="/">
					Home
				</Link>
				<Link className="px-5 py-2" to="/chirps">
					Chirps
				</Link>
				<Link className="px-5 py-2" to="/chirps/new">
					New Chirp
				</Link>
				<Link className="px-5 py-2" to="/chirps/modify">
					Admin Panel
				</Link>
			</div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/chirps" element={<Chirps />}></Route>
				<Route path="/chirps/:id" element={<Details />}></Route>
				<Route path="/chirps/new" element={<NewChirp />}></Route>
				<Route path="/chirps/modify" element={<UpdateChirps />}></Route>
				<Route path="/*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;

// import React, { useState, useEffect } from "react";
// import Home from "./views/home";

// interface AppProps {}

// const App = (props: AppProps) => {
// 	const [data, setData] = useState("");

// 	useEffect(() => {
// 		fetch("http://localhost:3000/api/hello")
// 			.then((res) => res.json())
// 			.then((data) => setData(data.message))
// 			.catch((e) => console.log("[fetch erorr]", e));
// 	}, []);

// 	return (
// 		<div className="mx-auto mt-5 w-25">
// 			<Home />
// 		</div>
// 	);
// };

// export default App;

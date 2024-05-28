import React, { useEffect } from "react";
import type { IChirp } from "../types";
import { fetchData } from "../services/fetchData";
import { Link } from "react-router-dom";
const Chirps = () => {
	const [chirps, setChirps] = React.useState<IChirp[]>([]);

	useEffect(() => {
		fetchData("/api/chirps").then((data) => setChirps(data));
	}, []);

	return (
		<div className="flex container justify-content-center align-items-left">
			<h1 className="title">Chirps</h1>
			<ul className="list-group">
				{chirps.map((chirp) => (
					<li className="list-item d-flex" key={`chirp-${chirp.id}`}>
						<span>{chirp.body}</span>
						<Link to={`/chirps/${chirp.id}`} className="btn btn-primary">
							Details
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Chirps;

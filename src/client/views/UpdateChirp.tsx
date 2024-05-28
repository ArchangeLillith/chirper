import React, { useEffect } from "react";
import type { IChirp } from "../types";
import { fetchData } from "../services/fetchData";
import { useNavigate } from "react-router-dom";

const UpdateChirps = () => {
	const navigate = useNavigate();
	const [chirps, setChirps] = React.useState<IChirp[]>([]);

	useEffect(() => {
		fetchData("/api/chirps").then((data) => setChirps(data));
	}, [chirps]);

	const handleDelete = (index: number, id: number) => {
		const indexString = index.toString();
		fetchData(`/api/chirps/${id}`, "DELETE");
	};

	const handleEdit = (index: number, id: number) => {
		//Nav to details mode
		navigate(`/chirps/${chirps[index].id}`);
	};

	return (
		<main className="container mt-5">
			<section className="row justify-content-center">
				<h2 className="card-title">Admin Panel:</h2>
				{chirps.map((chirp, index) => (
					<div className="col-12 col-md-6" key={`${chirp.id}-col`}>
						<div className="card shadow" key={`${chirp.id}-shadow`}>
							<div className="card-body" key={`${chirp.id}-body`}>
								<div
									className="justify-content-center align-items-center"
									key={`chirp-${chirp.id}`}
								>
									<span>Made by: {chirp.user_id}</span>
									<br />
									<span>Chirp: {chirp.body}</span> <br />
									<br />
									<button
										className="btn px-3 btn-success py-2 mx-2"
										value={chirp.id}
										onClick={() => handleEdit(index, chirp.id)}
									>
										O
									</button>
									<button
										className="btn btn-warning mx-2 px-3 py-2"
										value={chirp.id}
										onClick={() => handleDelete(index, chirp.id)}
									>
										X
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
		</main>
	);
};
export default UpdateChirps;

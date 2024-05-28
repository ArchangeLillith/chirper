import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../services/fetchData";
import { IChirp } from "../types";

interface DetailsProps {}
const Details = (props: DetailsProps) => {
	const { id } = useParams();
	const [data, setData] = useState<IChirp | null>(null);

	useEffect(() => {
		fetchData(`/api/chirps/${id}`).then((data) => setData(data));
	}, []);
	return (
		<main className="container mt-5">
			<section className="row justify-content-center">
				<div className="col-12 col-md-6">
					<div className="card shadow">
						<div className="card-body">
							<h2 className="card-title">Chirp #{id}</h2>
							<p className="card-text">Chirp text: {data?.body}</p>
							<p className="card-text">Location Chirped: {data?.location}</p>
							<p className="card-text">User: {data?.user_id}</p>
							<p className="card-text">Created at: {data?.created_at}</p>
							<Link to="/chirps" className="btn btn-secondary">
								Go Back
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Details;

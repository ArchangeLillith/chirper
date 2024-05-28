import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../services/fetchData";
import { IUser } from "../types";

interface NewChirpProps {}

const NewChirp = (props: NewChirpProps) => {
	const navigate = useNavigate();
	const [value, setValue] = React.useState<string>("");
	const [id, setId] = React.useState<string>("");
	const [users, setUsers] = React.useState<IUser[]>([]);
	const [mention, setMention] = React.useState<string>("");

	useEffect(() => {
		fetchData(`/api/users`)
			.then((users: IUser[]) => setUsers(users))
			.catch((e) => alert(e.message));
	}, []);

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!value) {
			alert("please write something");
			return;
		}

		fetchData("/api/chirps", "POST", {
			id,
			user_id: "1",
			body: value,
			location: "Pacific Ocean",
		});
		if (mention !== "") {
			fetchData("/api/mentions", "POST", { user_id: "1", chirp_id: id });
		}
		navigate(`/chirps/${id}`);
	};

	return (
		<main className="container mt-5">
			<section className="row justify-content-center">
				<div className="col-12 col-md-6">
					<form className="p-4 shadow border">
						<label htmlFor="description">Chirp</label>
						<input
							value={value}
							onChange={(e) => setValue(e.target.value)}
							type="text"
							className="form-control"
							placeholder="What would you like to say"
						/>
						<label htmlFor="id">ID</label>
						<input
							value={id}
							onChange={(e) => setId(e.target.value)}
							type="text"
							className="form-control"
							placeholder="ID of new Chirp"
						/>
						<label htmlFor="mention">Mention anyone?</label>
						<select
							name="users"
							id="users"
							className="form-select"
							onChange={(option) => setMention(option.target.value)}
						>
							{users.map((user) => (
								<option key={`option-${user.handle}`} value={user.handle}>
									{user.handle}
								</option>
							))}
							<option value="null">No one</option>
						</select>
						<button onClick={handleSubmit} className="btn btn-primary mt-3">
							Chirp it~
						</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default NewChirp;

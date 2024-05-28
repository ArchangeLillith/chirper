//Single source of truth for interacting with the table of the name of the file
import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface Chirp extends RowDataPacket {
	id: number;
	user_id: number;
	body: string;
	location: string;
	created_at: string;
}

export function getAll() {
	return SelectQuery<Chirp>("SELECT * FROM chirps;");
}

export function getOne(id: string) {
	return SelectQuery<Chirp>("SELECT * FROM chirps WHERE id = ?;", [id]);
}

export function deleteOne(id: string) {
	return ModifyQuery("DELETE FROM chirps WHERE id = ?;", [id]);
}

export function insert(
	id: string,
	user_id: string,
	body: string,
	location: string
) {
	return ModifyQuery(
		"INSERT INTO chirps (id, user_id, body, location) VALUE (?,?,?,?);",
		[id, user_id, body, location]
	);
}

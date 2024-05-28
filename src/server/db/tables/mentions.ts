//Single source of truth for interacting with the table of the name of the file
import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IMentions extends RowDataPacket {
	user_id: string;
	chirp_id: string;
}

export function getAll() {
	return SelectQuery<IMentions>("SELECT * FROM mentions;");
}

export function getOne(user_id: string) {
	return SelectQuery<IMentions>(
		`SELECT chirps.* FROM chirps
  JOIN mentions ON chirps.id = mentions.chirp_id
  WHERE mentions.user_id = ?;`,
		[user_id]
	);
}

export function deleteMention(user_id: string, chirp_id: string) {
	return ModifyQuery(
		"DELETE FROM mentions WHERE user_id = ? AND chirp_id = ?;",
		[user_id, chirp_id]
	);
}

export function insert(user_id: string, chirp_id: string) {
	return ModifyQuery("INSERT INTO mentions (user_id, chirp_id) VALUE (?,?);", [
		user_id,
		chirp_id,
	]);
}

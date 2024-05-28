//Single source of truth for interacting with the table of the name of the file
import { SelectQuery} from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IUser extends RowDataPacket {
	id: string;
	handle: string;
	email: string;
	created_at: string;
}

export function getAll() {
	return SelectQuery<IUser>("SELECT * FROM users;");
}

export interface IChirp {
	id: number;
	user_id: number;
	body: string;
	location: string;
	created_at: string;
}

export type IUser = {
	id: string;
	handle: string;
	email: string;
	created_at: string;
};

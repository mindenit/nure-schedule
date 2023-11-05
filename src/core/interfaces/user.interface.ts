import { IAuthTokens } from "./auth.interface";

export interface IUser extends IAuthTokens {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
}

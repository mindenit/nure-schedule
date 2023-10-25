export interface IError extends Error {
    statusCode: number;
    error: string;
    message: string;
}

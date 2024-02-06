export interface UserData {
    name: string;
    contactNo?: string;
    email: string;
    password: string;
    isactive?: boolean;
    isdelete?: boolean;
    recoverCode?: number;
    assignTask?: string;
    createdTask?: string;
}

// Generated by https://quicktype.io


export interface LoginData {
    email:string,
    password:string,
}
export interface RegisterData {
    email:string,
    password:string,
    nombre:string,
    imageUrl?:string
}

export interface AuthInteface {
    ok:    boolean;
    user:  User;
    token: string;
}


export interface User {
    nombre:   string;
    email:    string;
    imageUrl: string;
    online:   boolean;
    uid:      number;
}

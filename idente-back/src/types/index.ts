type LoginParam = {
    email: string,
    password: string,
}

type UserParam = {
    id: number,
    name: string,
    password: string,
    email: string
}

type SessionParam = {
    id?: number,
    user_id: number,
    token: string,
}

type SignInResult = {
    user: Pick<UserParam, 'id' | 'email'>;
    token: string;
  };

export {
    LoginParam,
    UserParam,
    SessionParam,
    SignInResult
}
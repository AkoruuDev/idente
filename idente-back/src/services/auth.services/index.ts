import userRepository from "@/repositories/userRepositories";
import { LoginParam, SignInResult, UserParam } from "@/types";
import { invalidCredentials } from "./errors";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import sessionRepository from "@/repositories/sessionRepositories";

async function signIn (params: LoginParam): Promise<SignInResult> {
    const { email, password } = params;

    const user = await getUserOrFail(email);
  
    await validatePasswordOrFail(password, user.password);
  
    const token = await createSession(user.id);
  
    return {
      user,
      token,
    };
};

async function getUserOrFail (email: string): Promise<UserParam> {
    const user = await userRepository.getUserByEmail(email);

    if (!user) throw invalidCredentials()

    return user;
}

async function validatePasswordOrFail(password: string, hash: string) {
    const compare = await bcrypt.compareSync(password, hash)
    if (!compare) throw invalidCredentials()
}

async function createSession (id: number): Promise<string> {
    const token = jwt.sign({ id }, process.env.JWT_SECRET);

    await sessionRepository.create({
        token,
        user_id: id,
    });

    return token;
}

const authenticationService = {
    signIn,
};

export default authenticationService;
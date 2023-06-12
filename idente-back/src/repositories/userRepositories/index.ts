import { prisma } from "@/config";

async function getUserByEmail (email: string) {
    const user = await prisma.users.findUnique({
        where: {
            email,
        },
    });

    return user;
}

const userRepository = {
    getUserByEmail,
};
export default userRepository;
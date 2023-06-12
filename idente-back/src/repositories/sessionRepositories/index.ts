import { prisma } from "@/config";
import { SessionParam } from "@/types";

async function create(data: SessionParam) {
    const session = await prisma.session.create({
        data,
    });

    return session;
}

async function findByToken() {

}

const sessionRepository = {
    create,
    findByToken,
}

export default sessionRepository;
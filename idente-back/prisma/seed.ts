import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.users.findFirst();
    if (!users) {
        await prisma.users.createMany({
            data: [
                {
                    name: 'Alfredo Alves',
                    email: 'a@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Bernardo Butinni',
                    email: 'b@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Carlos Camargo',
                    email: 'c@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Diana deLucca',
                    email: 'd@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Emilly Elvira',
                    email: 'e@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Fernando Fattucci',
                    email: 'f@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Geovanna Gusta',
                    email: 'g@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Henrique Hemmet',
                    email: 'h@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Iris Ilhabella',
                    email: 'i@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'João Jesus',
                    email: 'j@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Kainã Kosta',
                    email: 'k@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Luanna laMour',
                    email: 'l@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Marta Miori',
                    email: 'm@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Natacha Nittri',
                    email: 'n@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Oscar Onório',
                    email: 'o@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Paula Pierri',
                    email: 'p@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Queila Queiróz',
                    email: 'q@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Rafaela Root',
                    email: 'r@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Salomão Servo',
                    email: 's@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Tatiana Topaz',
                    email: 't@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Ulisses Ungaro',
                    email: 'u@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Victor Vierre',
                    email: 'v@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Willian Washington',
                    email: 'w@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Xico Xavier',
                    email: 'x@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Yuri Yndiz',
                    email: 'y@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                },
                {
                    name: 'Zafira Zemberg',
                    email: 'z@gut.com',
                    password: await bcrypt.hash('123456789', 10)
                }
            ]
        })
    }

    const adress = await prisma.adress.findFirst();
    if (!adress) {
        await prisma.adress.createMany({
            data: [
                {
                    cep: '49025320',
                    street: 'Travessa João Bispo de Lima',
                    number: '52a',
                    neighborhood: 'Grageru',
                    city: 'Aracaju',
                    country: 'SE',
                    complement: ''
                },
                {
                    cep: '66640770',
                    street: 'Passagem Jerusalém',
                    number: '12',
                    neighborhood: 'Mangueirão',
                    city: 'Belém',
                    country: 'PA',
                    complement: 'Ao lado do Santander'
                },
                {
                    cep: '13024001',
                    street: 'Avenida Coronel Silva Teles',
                    number: '1001',
                    neighborhood: 'Cambuí',
                    city: 'Campinas',
                    country: 'SP',
                    complement: ''
                },
            ]
        })
        await prisma.units.createMany({
            data: [
                {
                    name: 'Heroi Sorriso - Sede',
                    access: await bcrypt.hash('123456', 10),
                    adress: 3
                },
                {
                    name: 'Heroi Sorriso - Campanha 2',
                    access: await bcrypt.hash('234567', 10),
                    adress: 2
                },
                {
                    name: 'Heroi Sorriso - Campanha 3',
                    access: await bcrypt.hash('345678', 10),
                    adress: 1
                },

            ]
        })
    }
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
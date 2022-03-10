import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const items: Prisma.ItemCreateInput[] = [
    {
        image: 'tablet.jpg',
        title: 'Ipad',
        price: 499.99
    },
    {
        image: 'iphone.jpg',
        title: 'Iphone',
        price: 599.99
    },
    {
        image: 'mac.jpg',
        title: 'Mac',
        price: 699.99
    },
    {
        image: 'ipod.jpg',
        title: 'Ipod',
        price: 199.99
    },
    {
        image: 'earbuds.jpg',
        title: 'Earbuds',
        price: 99.99
    },
    {
        image: 'icar.jpg',
        title: 'Car',
        price: 69999.99
    },
    {
        image: 'iwash.jpg',
        title: 'WashingMachine',
        price: 399.99
    },
    {
        image: 'ifridge.jpg',
        title: 'Fridge',
        price: 499.99
    },
    {
        image: 'itable.jpg',
        title: 'Table',
        price: 99.99
    },
    {
        image: 'ibox.jpg',
        title: 'Box',
        price: 99.99
    }

]

const users: Prisma.UserCreateInput[] = [
    {
        email: 'nicolo@email.com',
        name: 'Barella',
        orders: {
            create: [
                { item: { connect: { title: 'Fridge' } }, quantity: 1 },
                { item: { connect: { title: 'Car' } }, quantity: 1 }
            ]
        }
    },
    {
        email: 'lautaro@email.com',
        name: 'Martinez',
        orders: {
            create: [
                {
                    item: {
                        connectOrCreate: {
                            where: { title: 'Iball' },
                            create: { image: 'iball.jpg', title: 'Iball', price: 29.99 }
                        }
                    },
                    quantity: 3
                }
            ]
        }
    },
    {
        email: 'milan@email.com',
        name: 'Skrinar'
    },
    {
        email: 'sebastian@email.com',
        name: 'DeVrijl'
    },
    {
        email: 'andrea@email.com',
        name: 'Bastoni'
    },
    {
        email: 'alexis@email.com',
        name: 'Sanches'
    },
    {
        email: 'marcelo@email.com',
        name: 'Brozovic'
    },
    {
        email: 'samir@email.com',
        name: 'Handanovic'
    },
    {
        email: 'robin@email.com',
        name: 'Gosens'
    }
]

async function createStuff() {
    for (const item of items) {
        await prisma.item.create({ data: item })
    }

    for (const user of users) {
        await prisma.user.create({ data: user })
    }
}

createStuff()
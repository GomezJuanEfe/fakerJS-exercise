import { hashPasswordSync } from "../../auth/utils/bcrypt"
import { User as UserModel } from "./user.types"
import { faker } from '@faker-js/faker'

type User = Omit<UserModel, 'createdAt' | 'updatedAt'>

export const userSeeder: User[] = Array.from({ length: 10}).map(() => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return ({
    id: faker.string.uuid(),
    firstName: firstName,
    lastName: lastName,
    email: faker.internet.email({firstName: firstName, lastName: lastName}),
    password: hashPasswordSync('1234'),
    isActive: true,
    avatar: 'https://picsum.photos/200',
  })
})

// [
//   {
//     id: faker.string.uuid(),
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     email: faker.internet.email(),
//     password: hashPasswordSync('1234'),
//     isActive: true,
//     avatar: 'https://picsum.photos/200',
//   }
// ]
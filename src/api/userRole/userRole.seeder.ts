import { roleSeeder } from "../roles/role.seeder";
import { userSeeder } from "../user/user.seeder";

export const userRoleSeeder = userSeeder.map( item => ({
  roleId: roleSeeder[0].id,
  userId: item.id,
}))

// [
//   {
//     roleId: roleSeeder[0].id,
//     userId: userSeeder[0].id,
//   },
// ]
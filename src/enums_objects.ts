// ENUMS
//Nos permiten definir un conjunto de constantes con nombres
// enum Roles {
//     User,            //0
//     Admin,          //1
//     SuperAdmin      //2
// }
// console.log(Roles.Admin);

enum Roles {
    User = 1,            //1
    Admin,          //2
    SuperAdmin      //3
}
console.log(Roles.Admin); //2 TAMBIEN SIRVE PARA STRINGS

//OJECTS
const roles ={
    User : 0,
    Admin: 1,
    SuperAdmin: 2
}
console.log(roles.User)
"use strict";
// ENUMS
//Nos permiten definir un conjunto de constantes con nombres
// enum Roles {
//     User,            //0
//     Admin,          //1
//     SuperAdmin      //2
// }
// console.log(Roles.Admin);
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Admin"] = 2] = "Admin";
    Roles[Roles["SuperAdmin"] = 3] = "SuperAdmin"; //3
})(Roles || (Roles = {}));
console.log(Roles.Admin); //2 TAMBIEN SIRVE PARA STRINGS
//OJECTS
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.User);

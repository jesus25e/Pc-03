"use strict";

/*7.- EJERCICIO LIBRE:
HAZ UN SOFTWARE TOTALMENTE LIBRE QUE RESUELVA UN PROBLEMA EN ESPECÍFICO
*/


/* Implementacion de  un sistema básico de gestión de usuarios*/


function User(usern, password, email) {
    this.usern = usern;
    this.password = password;
    this.email = email;

    this.login = function(username, password) {
        if (username === this.usern && password === this.password) {
            alert("¡BIENVENIDO!");
        } else {
            alert("USUARIO O CONTRASEÑA INCORRECTA");
        }
    };

    this.resetPassword = function(newPassword) {
        this.password = newPassword;
    };

    this.updateInfo = function(newEmail) {
        this.email = newEmail;
    };

    this.showInfo = function() {
        alert(`Username: ${this.usern} Password: ${this.password} Email: ${this.email}`);
    };
}

let user = new User("narea", "6969", "narea@gmail.com");
user.login("narea", "6969");
user.resetPassword("0609");
user.updateInfo("lanarea@gmail.com");
user.login("narea", "0609");
user.showInfo();



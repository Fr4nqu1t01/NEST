import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

getUsers(): string {
    return "lista de usuarios"
}
createUser(): string {
    return "te registraste satisfactoriamente"
}
deleteUser(): string {
    return "Usuario removido con exito"
}
updateUser(): string {
    return "cambiaste la contraseña"
}
}


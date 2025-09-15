import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get('usuarios')
    getUsers() : string {
        return this.userService.getUsers();
    }
    @Post('crear')
    createUser() : string {
        return this.userService.createUser();
    } 
    @Delete('borrar')
    deleteUser() : string {
        return this.userService.deleteUser();
    } 
    @Put('modificar')
    updateUser() : string {
        return this.userService.updateUser();
    } 
}

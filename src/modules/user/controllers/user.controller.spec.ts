import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../services/user.service';

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService], // You might need to add your actual UserService here
        }).compile();

        userController = module.get<UserController>(UserController);
        userService = module.get<UserService>(UserService);
    });

    describe('getAllUsers', () => {
        it('should return a user name', async () => {
            const expectedUserName = 'Mohian Mustafa';

            const result = await userController.getAllUsers();

            expect(result).toBe(expectedUserName);
        });
    });
});
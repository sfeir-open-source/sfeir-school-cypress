import { User } from '@nest-server/app/shared/models/user.model';
import user from '@nest-server/assets/mocks/user.json';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  authenticate(userCredentials: UserDTO): Omit<User, 'password'> | UnauthorizedException {
    const { login: loginCredentials, password: passwordCredentials } = userCredentials;
    const { login: loginDb, password: passwordDb } = user;

    if (loginCredentials !== loginDb || passwordCredentials !== passwordDb) {
      throw new UnauthorizedException();
    }

    const { password, ...restInformation } = user;

    return restInformation;
  }
}

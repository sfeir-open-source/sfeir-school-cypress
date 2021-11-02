import { BAD_REQUEST_SCHEMA, UNAUTHORIZED_SCHEMA } from '@nest-server/app/shared/models/error.model';
import { User, USER_SCHEMA } from '@nest-server/app/shared/models/user.model';
import { Body, Controller, HttpCode, Post, UnauthorizedException } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-in')
  @HttpCode(200)
  @ApiOkResponse({ status: 200, description: 'User authenticate', schema: USER_SCHEMA })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad request',
    schema: BAD_REQUEST_SCHEMA,
  })
  @ApiUnauthorizedResponse({
    status: 401,
    description: 'Unauthorized',
    schema: UNAUTHORIZED_SCHEMA,
  })
  authenticate(@Body() user: UserDTO): Omit<User, 'password'> | UnauthorizedException {
    return this.userService.authenticate(user);
  }
}

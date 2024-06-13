import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreatUserDto } from './dto/creatUser.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async login(@Body() info: CreatUserDto) {
    return this.loginService.login(info);
  }
}

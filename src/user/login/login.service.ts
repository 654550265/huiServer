import { Injectable, BadRequestException } from '@nestjs/common';
import { CreatUserDto } from './dto/creatUser.dto';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import utils from '../../utils/utils';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async login(info: CreatUserDto) {
    const user: User = await this.userRepository.findOneBy({
      phone: info.phone,
    });
    if (utils.isEmpty(user)) {
      const newUser: User = new User();
      for (const key in info) {
        newUser[key] = info[key];
      }
      return await this.userRepository.save(newUser);
    }

    return user;
  }
}

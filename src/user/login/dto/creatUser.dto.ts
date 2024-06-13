import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatUserDto {
  @IsString()
  @Length(11, 11, { message: '手机号长度必须11个字符' })
  @IsNotEmpty({ message: '手机号不能为空' })
  phone: string;
}

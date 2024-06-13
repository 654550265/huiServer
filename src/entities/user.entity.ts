import { Column, Entity } from 'typeorm';
import { PublicColumn } from './publicColumn';

@Entity()
export class User extends PublicColumn {
  @Column({ comment: '用户注册手机号' })
  phone: string;

  @Column({ comment: '用户昵称' })
  nickName: string;

  @Column({ comment: '用户名称' })
  userName: string;

  @Column({ comment: '用户头像' })
  avatar: string;

  @Column({
    type: 'tinyint',
    default: 0,
    comment: '是否会员（0：不是，1：是）',
  })
  isVip: number;
}

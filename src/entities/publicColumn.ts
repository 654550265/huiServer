import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class PublicColumn {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ comment: '创建时间' })
  createDate: string;

  @UpdateDateColumn({ comment: '更新时间' })
  updateDate: string;

  @DeleteDateColumn({ select: false, comment: '添加软删除列' })
  deletedAt: string;
}

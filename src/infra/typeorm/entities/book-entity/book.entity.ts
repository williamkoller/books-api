import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@/infra/typeorm/entities/base-entity/base-entity';

@Entity('Books')
export class BookEntity extends BaseEntity {
  @Column({ type: 'varchar2', nullable: false })
  title: string;

  @Column({ type: 'varchar2', nullable: false })
  author: string;

  @Column({ type: 'varchar2', nullable: false })
  state: string;

  @Column({ type: 'int4', nullable: false })
  price: number;

  @Column({ type: 'int4', nullable: false })
  pages: number;

  @Column({ type: 'varchar2', nullable: false })
  release_year: string;

  @Column({ type: 'varchar2', nullable: false })
  publishing_company: string;

  constructor(partial: Partial<BookEntity>) {
    super();
    Object.assign(this, partial);
  }
}

import {
  Column,
  Entity,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '@/infra/typeorm/entities/base-entity/base-entity';
import { CategoryEntity } from '../category-entity/category.entity';

@Entity('books')
export class BookEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  author: string;

  @Column({ type: 'varchar', nullable: false })
  state: string;

  @Column({ type: 'int4', nullable: false })
  price: number;

  @Column({ type: 'int4', nullable: false })
  pages: number;

  @Column({ type: 'int4', nullable: false })
  release_year: number;

  @Column({ type: 'varchar', nullable: false })
  publishing_company: string;

  @OneToOne(() => CategoryEntity, (categoryEntity) => categoryEntity.id)
  @JoinTable()
  category: CategoryEntity;

  constructor(partial: Partial<BookEntity>) {
    super();
    Object.assign(this, partial);
  }
}

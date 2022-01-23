import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../base-entity/base-entity';
import { BookEntity } from '../book-entity/book.entity';

@Entity('categories')
export class CategoryEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @OneToMany(() => BookEntity, (bookEntity) => bookEntity.category, {
    eager: true,
  })
  books: BookEntity[];

  constructor(partial: Partial<CategoryEntity>) {
    super();
    Object.assign(this, partial);
  }
}

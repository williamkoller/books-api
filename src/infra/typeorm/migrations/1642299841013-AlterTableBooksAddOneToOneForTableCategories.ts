import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableBooksAddOneToOneForTableCategories1642299841013
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "books" 
      ADD COLUMN "category_id" uuid,
      ADD CONSTRAINT "fk_categories_book"
      FOREIGN KEY ("category_id") 
      REFERENCES "categories" ("id")
      ON DELETE CASCADE ON UPDATE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "category_id";`);
  }
}

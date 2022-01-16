import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCategories1642254598765 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "categories" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying NOT NULL,
        "description" character varying NOT NULL,
        "book_id" uuid,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "categories_pk_id" PRIMARY KEY ("id"),
        CONSTRAINT "fk_book_id_key" FOREIGN KEY ("book_id")
        REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE
        );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "categories";`);
  }
}

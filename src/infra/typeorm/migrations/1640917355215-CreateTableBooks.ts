import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableBooks1640917355215 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "books" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "title" character varying NOT NULL,
        "author" character varying NOT NULL,
        "state" character varying NOT NULL,
        "price" int NOT NULL,
        "pages" int NOT NULL,
        "release_year" int NOT NULL,
        "publishing_company" character varying NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "books_pk" PRIMARY KEY ("id"));`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "books";`);
  }
}

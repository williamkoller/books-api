import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  pages: number;

  @IsString()
  @IsNotEmpty()
  release_year: string;

  @IsString()
  @IsNotEmpty()
  publishing_company: string;
}

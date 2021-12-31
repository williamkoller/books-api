import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envFolderPath, { environments } from '@/config/environments';
import { BooksModule } from '../books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '@/infra/typeorm/config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFolderPath.folderPath,
      load: [environments],
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    forwardRef(() => BooksModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

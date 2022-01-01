import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envFolderPath, { environments } from '@/config/environments';
import { BooksModule } from '@/modules/books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '@/infra/typeorm/config/config.service';
import { AuthModule } from '@/modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFolderPath.folderPath,
      load: [environments],
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    forwardRef(() => BooksModule),
    forwardRef(() => AuthModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

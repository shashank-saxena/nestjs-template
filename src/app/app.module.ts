import { Module } from '@nestjs/common';
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs';

import { AppConfigModule } from '../configs/app.config.module';
import { MysqlModule } from '../db/mysql/mysql.module';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
// import { AppConfigService } from './configs/app.config.service';

@Module({
  imports: [MikroOrmModule.forRoot(), AppConfigModule, MysqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

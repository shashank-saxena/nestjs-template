/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : <Write about the file here>

   Created on : Fri May 19 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  appConfig,
  cacheConfig,
  mailConfig,
  mongoConfig,
  mysqlConfig,
} from './app.config';
import { AppConfigService } from './app.config.service';
import { validateConfig } from './config.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [appConfig, mysqlConfig, mongoConfig, cacheConfig, mailConfig],
      validationOptions: {
        allowUnknown: false,
      },
      validate: validateConfig,
    }),
  ],
  providers: [AppConfigService, ConfigService],
  exports: [AppConfigService, ConfigService],
})
export class AppConfigModule {}

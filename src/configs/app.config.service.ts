/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : It will be used to provide app level configs

   Created on : Fri May 19 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  public get name(): string {
    return this.configService.get<string>('APP.NAME');
  }
  public get env(): string {
    return this.configService.get<string>('APP.ENV');
  }
  public get url(): string {
    return this.configService.get<string>('APP.URL');
  }
  public get port(): number {
    return this.configService.get<number>('APP.PORT');
  }

  public get dbHost(): string {
    return this.configService.get<string>('DB.MYSQL.HOST');
  }
  public get dbUserName(): string {
    return this.configService.get<string>('DB.MYSQL.USERNAME');
  }
  public get dbPassword(): string {
    return this.configService.get<string>('DB.MYSQL.PASSWORD');
  }
  public get dbName(): string {
    return this.configService.get<string>('DB.MYSQL.DB_NAME');
  }
  public get dbPort(): number {
    return this.configService.get<number>('DB.MYSQL.PORT');
  }
}

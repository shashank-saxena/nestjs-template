/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : Application configs

   Created on : Fri May 19 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { registerAs } from '@nestjs/config';

// Info: need to avoid prettier linting for object literal formatting

// prettier-ignore
const appConfig = registerAs('APP', () => ({
  NODE_ENV : process.env.APP_ENV,
  ENV      : process.env.APP_ENV,
  NAME     : process.env.APP_NAME,
  URL      : process.env.APP_URL,
  PORT     : process.env.APP_PORT,
}));

// prettier-ignore
const mysqlConfig = registerAs('DB.MYSQL', () => ({
  HOST     : process.env.DB_HOST,
  USERNAME : process.env.DB_USRENAME,
  PASSWORD : process.env.DB_PASSWORD,
  DB_NAME  : process.env.DB_NAME,
  PORT     : process.env.DB_PORT,
}));

// prettier-ignore
const mongoConfig = registerAs('db.mongo', () => ({
  HOST     : process.env.DB_HOST,
  USERNAME : process.env.DB_USRENAME,
  PASSWORD : process.env.DB_PASSWORD,
  DB_NAME  : process.env.DB_NAME,
}));

// prettier-ignore
const cacheConfig = registerAs('cache', () => ({
  HOST     : process.env.DB_HOST,
  USERNAME : process.env.DB_USRENAME,
  PASSWORD : process.env.DB_PASSWORD,
  DB_NAME  : process.env.DB_NAME,
}));

// prettier-ignore
const mailConfig = registerAs('mail', () => ({
  HOST     : process.env.DB_HOST,
  USERNAME : process.env.DB_USRENAME,
  PASSWORD : process.env.DB_PASSWORD,
  DB_NAME  : process.env.DB_NAME,
}));

export { appConfig, mysqlConfig, mongoConfig, cacheConfig, mailConfig };

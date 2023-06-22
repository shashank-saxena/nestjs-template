/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : copied

   Created on : Wed May 24 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { LoadStrategy } from '@mikro-orm/core';
import { defineConfig } from '@mikro-orm/mysql';
// import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
// import { Migrator } from '@mikro-orm/migrations';
// import { EntityGenerator } from '@mikro-orm/entity-generator';
// import { SeedManager } from '@mikro-orm/seeder';

import type { AppConfigService } from 'src/configs/app.config.service';

// TODO(Shashank): need to get db details from config module

export const mysqlConfig = (appConfigService: AppConfigService) => {
  // host: 'localhost',
  //   port: 3306,
  //   user: 'root',
  //   password: '',
  //   dbName: 'nestjs-auth-db',

  return defineConfig({
    host: appConfigService.dbHost,
    port: appConfigService.dbPort,
    user: appConfigService.dbUserName,
    password: appConfigService.dbPassword,
    dbName: appConfigService.dbName,

    entities: ['dist/db/mysql/**/models/*.entity.js'],
    entitiesTs: ['src/db/mysql/**/models/*.entity.ts'],
    debug: true,
    loadStrategy: LoadStrategy.JOINED,
    // highlighter: new SqlHighlighter(),
    metadataProvider: TsMorphMetadataProvider, //https://github.com/mikro-orm/mikro-orm/issues/235
    // @ts-expect-error nestjs adapter option
    registerRequestContext: true,
    // extensions: [Migrator, EntityGenerator, SeedManager], https://mikro-orm.io/docs/seeding#use-in-tests
    seeder: {
      path: './src/db/seeders/mysql', // path to the folder with seeders
      pathTs: './src/db/seeders/mysql', // path to the folder with TS seeders (if used, we should put path to compiled files in `path`)
      defaultSeeder: 'TestDbSeeder', // default seeder class name
      glob: '!(*.d).{js,ts}', // how to match seeder files (all .js and .ts files, but not .d.ts)
      emit: 'ts', // seeder generation mode
      fileName: (className: string) => className, // seeder file naming convention
    },

    // https://mikro-orm.io/docs/schema-generators
    schemaGenerator: {
      disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
      createForeignKeyConstraints: true, // whether to generate FK constraints
      ignoreSchema: [], // allows ignoring some schemas when diffing
    },
  });
};

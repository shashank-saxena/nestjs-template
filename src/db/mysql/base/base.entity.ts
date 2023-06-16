/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : manually created

   Created on : Tue May 30 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { Property, OptionalProps, Unique, PrimaryKey } from '@mikro-orm/core';

export abstract class BaseEntity {
  [OptionalProps]?: 'createdAt';

  @Unique({ name: 'id_UNIQUE' })
  @PrimaryKey()
  id?: number;

  @Property()
  createdBy!: number;

  @Property({ nullable: true })
  updatedBy?: number;

  @Property({ defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ nullable: true })
  updatedAt?: Date;

  @Property({ columnType: 'tinyint unsigned' })
  isActive!: number;

  @Property({ columnType: 'tinyint unsigned' })
  isDeleted!: number;
}

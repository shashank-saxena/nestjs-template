/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : npx mikro-orm generate-entities --save --path=./entities/

   Created on : Tue May 30 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import {
  Entity,
  Property,
  Unique,
  EntityRepositoryType,
} from '@mikro-orm/core';
import { BaseEntity } from '../../base/base.entity';
import { UserRepository } from './user.repository';

@Entity({
  tableName: 'users',
  customRepository: () => UserRepository,
})
export class UserEntity extends BaseEntity {
  [EntityRepositoryType]?: UserRepository;

  @Unique({ name: 'username' })
  @Property({ length: 255 })
  username!: string;

  @Property({ length: 255 })
  password!: string;

  @Property({ length: 255 })
  firstName!: string;

  @Property({ length: 255 })
  lastName!: string;

  @Property({ length: 255 })
  dob!: string;

  @Property({ length: 255 })
  gender!: string;
}

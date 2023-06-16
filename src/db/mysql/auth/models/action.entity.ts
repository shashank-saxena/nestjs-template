/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : npx mikro-orm generate-entities --save --path=<dest folder>

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
import { ActionRepository } from './action.repository';

@Entity({
  tableName: 'actions',
  customRepository: () => ActionRepository,
})
export class ActionEntity extends BaseEntity {
  [EntityRepositoryType]?: ActionRepository;

  @Unique({ name: 'name_UNIQUE' })
  @Property({ length: 255 })
  name!: string;
}

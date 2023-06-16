/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : npx mikro-orm generate-entities --save --path=./entities/

   Created on : Tue May 30 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { Entity, Property, EntityRepositoryType } from '@mikro-orm/core';
import { BaseEntity } from '../../base/base.entity';
import { UserRoleMapRepository } from './user-role-map.repository';

@Entity({
  tableName: 'user_role_mapping',
  customRepository: () => UserRoleMapRepository,
})
export class UserRoleMapEntity extends BaseEntity {
  [EntityRepositoryType]?: UserRoleMapRepository;

  @Property()
  userId!: number;

  @Property()
  rolesId!: number;
}

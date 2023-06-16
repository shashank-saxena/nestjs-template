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
import { RolesPermsMapRepository } from './roles-perms-map.repository';

@Entity({
  tableName: 'roles_perms_mapping',
  customRepository: () => RolesPermsMapRepository,
})
export class RolesPermsMapEntity extends BaseEntity {
  [EntityRepositoryType]?: RolesPermsMapRepository;

  @Property()
  rolesId!: number;

  @Property()
  permsId!: number;
}

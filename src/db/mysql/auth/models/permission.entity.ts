/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : npx mikro-orm generate-entities --save --path=<>

   Created on : Tue May 30 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { Entity, Index, Property, EntityRepositoryType } from '@mikro-orm/core';
import { BaseEntity } from '../../base/base.entity';
import { PermissionRepository } from './permission.repository';

@Entity({
  tableName: 'permissions',
  customRepository: () => PermissionRepository,
})
export class PermissionEntity extends BaseEntity {
  [EntityRepositoryType]?: PermissionRepository;

  @Index({ name: 'FK' })
  @Property()
  groupId!: number;

  @Property({ length: 255 })
  resourceName!: string;

  @Property()
  resourceActionId!: number;
}

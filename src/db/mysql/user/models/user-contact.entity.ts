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
import { UserContactRepository } from './user-contact.repository';

@Entity({
  tableName: 'user_contacts',
  customRepository: () => UserContactRepository,
})
export class UserContactEntity extends BaseEntity {
  [EntityRepositoryType]?: UserContactRepository;

  @Property()
  userId!: number;

  @Property({ columnType: 'tinyint unsigned' })
  primary!: number;

  @Property({ length: 255 })
  phoneNo!: string;

  @Property({ length: 255 })
  email!: string;

  @Property({ fieldName: 'address_1', length: 255, nullable: true })
  address1?: string;

  @Property({ fieldName: 'address_2', length: 255, nullable: true })
  address2?: string;

  @Property({ columnType: 'tinyint unsigned' })
  cityId!: number;

  @Property({ columnType: 'tinyint unsigned' })
  stateId!: number;

  @Property({ columnType: 'tinyint unsigned' })
  countryId!: number;
}

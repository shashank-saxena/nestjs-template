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
import { CityRepository } from './city.repository';

@Entity({
  tableName: 'cities',
  customRepository: () => CityRepository,
})
export class CityEntity extends BaseEntity {
  [EntityRepositoryType]?: CityRepository;

  @Property()
  countryId!: number;

  @Property()
  stateId!: number;

  @Property({ length: 255 })
  cityCode!: string;

  @Property({ length: 255 })
  name!: string;

  @Property({ length: 255 })
  shortCode!: string;
}

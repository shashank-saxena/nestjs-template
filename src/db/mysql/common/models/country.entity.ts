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
import { CountryRepository } from './country.repository';

@Entity({
  tableName: 'countries',
  customRepository: () => CountryRepository,
})
export class CountryEntity extends BaseEntity {
  [EntityRepositoryType]?: CountryRepository;

  @Unique({ name: 'country_code_UNIQUE' })
  @Property({ length: 255 })
  countryCode!: string;

  @Unique({ name: 'name_UNIQUE' })
  @Property({ length: 255 })
  name!: string;

  @Unique({ name: 'short_code_UNIQUE' })
  @Property({ length: 255 })
  shortCode!: string;
}

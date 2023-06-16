/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : nest g cl countryFactory db/seeders/mysql/factories --flat

   Created on : Wed May 31 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { EntityData } from '@mikro-orm/core';
import { Factory, Faker } from '@mikro-orm/seeder';
import { CountryEntity } from '../../../mysql/common/models/country.entity';

export class CountryFactory extends Factory<CountryEntity> {
  model = CountryEntity;

  protected definition(faker: Faker): EntityData<CountryEntity> {
    const fakeObj: CountryEntity = {
      name: faker.address.country(),
      countryCode: faker.address.countryCode(),
      shortCode: faker.address.countryCode(),
      createdBy: parseInt(faker.random.numeric(2)),
      updatedBy: parseInt(faker.random.numeric(2)),
      createdAt: faker.date.future(),
      isActive: 1,
      isDeleted: 0,
    };
    return fakeObj;
  }
}

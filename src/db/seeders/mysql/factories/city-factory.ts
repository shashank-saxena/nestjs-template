/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : nest g cl cityFactory db/seeders/mysql/factories --flat --no-spec

   Created on : Wed May 31 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { EntityData } from '@mikro-orm/core';
import { Factory, Faker } from '@mikro-orm/seeder';
import { CityEntity } from '../../../mysql/common/models/city.entity';

export class CityFactory extends Factory<CityEntity> {
  model = CityEntity;

  protected definition(faker: Faker): EntityData<CityEntity> {
    const fakeObj: CityEntity = {
      countryId: 0,
      stateId: 0,
      cityCode: faker.address.city(),
      name: faker.address.cityName(),
      shortCode: faker.address.city(),
      createdBy: parseInt(faker.random.numeric(2)),
      createdAt: faker.date.future(),
      isActive: 1,
      isDeleted: 0,
    };

    return fakeObj;
  }
}

/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : nest g cl stateFactory db/seeders/mysql/factories --flat

   Created on : Wed May 31 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { EntityData } from '@mikro-orm/core';
import { Factory, Faker } from '@mikro-orm/seeder';
import { StateEntity } from '../../../mysql/common/models/state.entity';

export class StateFactory extends Factory<StateEntity> {
  model = StateEntity;

  protected definition(faker: Faker): EntityData<StateEntity> {
    const fakeObj: StateEntity = {
      name: faker.address.state(),
      stateCode: faker.address.stateAbbr(),
      shortCode: faker.address.stateAbbr(),
      // id: parseInt(faker.random.numeric(2)),
      createdBy: parseInt(faker.random.numeric(2)),
      updatedBy: parseInt(faker.random.numeric(2)),
      createdAt: faker.date.future(),
      countryId: 0,
      isActive: 1,
      isDeleted: 0,
    };

    return fakeObj;
  }
}

/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : npx mikro-orm seeder:create TestDb

   Created on : Wed May 31 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import { CityFactory } from './factories/city-factory';
import { StateFactory } from './factories/state-factory';
import { CountryFactory } from './factories/country-factory';

export class TestDbSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const countries = await new CountryFactory(em).create(5);
    const states = await new StateFactory(em).create(5, {
      countryId: countries[Math.floor(Math.random() * 5)].id,
    });
    await new CityFactory(em).create(5, {
      countryId: countries[Math.floor(Math.random() * 5)].id,
      stateId: states[Math.floor(Math.random() * 5)].id,
    });
  }
}

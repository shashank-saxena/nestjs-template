/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : ref - https://mikro-orm.io/docs/repositories

   Created on : Tue May 30 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { EntityRepository } from '@mikro-orm/mysql';
import { RoleEntity } from './role.entity';

export class RoleRepository extends EntityRepository<RoleEntity> {}

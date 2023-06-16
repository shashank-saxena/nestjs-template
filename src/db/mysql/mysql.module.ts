/*------------------------------------------------------------------------------
   Project    : nest-api-server-boilerplate
   Version    : 0.0.1
   About      : nest g mo mysql services/mysql --flat

   Created on : Tue May 23 2023
   Author     : Shashank Saxena

   Copyright (c) 2023 Newput. All rights reserved.
------------------------------------------------------------------------------*/

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

// Info: entities
// TODO: Can be named exported from single index file
// import { ActionEntity } from './auth/models/action.entity';
// import { PermissionEntity } from './auth/models/permission.entity';
// import { RoleEntity } from './auth/models/role.entity';
// import { RolesPermsMapEntity } from './auth/models/roles-perms-map.entity';
// import { UserRoleMapEntity } from './auth/models/user-role-map.entity';
// import { UserEntity } from './user/models/user.entity';
// import { UserContactEntity } from './user/models/user-contact.entity';
// import { CityEntity } from './common/models/city.entity';
// import { StateEntity } from './common/models/state.entity';
// import { CountryEntity } from './common/models/country.entity';

// Info: Services
import { UserService } from './user/services/user.service';
import { AuthService } from './auth/services/auth.service';

import { mysqlConfig } from './db.config';
import { AppConfigModule } from '../../configs/app.config.module';
import { AppConfigService } from 'src/configs/app.config.service';

@Module({
  exports: [UserService, AuthService],
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        console.log(appConfigService);
        return mysqlConfig(appConfigService);
      },
    }),
    // MikroOrmModule.forFeature({
    //   entities: [
    //     ActionEntity,
    //     PermissionEntity,
    //     RoleEntity,
    //     RolesPermsMapEntity,
    //     UserRoleMapEntity,
    //     UserEntity,
    //     UserContactEntity,
    //     CityEntity,
    //     StateEntity,
    //     CountryEntity,
    //   ],
    // }),
  ],
  providers: [UserService, AuthService],
})
export class MysqlModule {}

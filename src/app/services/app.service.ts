import { Injectable } from '@nestjs/common';
import { AppConfigService } from '../../configs/app.config.service';
@Injectable()
export class AppService {
  constructor(private appConfigService: AppConfigService) {}

  getHello(): string {
    console.log(this.appConfigService.name);
    return 'Hello World!';
  }
}

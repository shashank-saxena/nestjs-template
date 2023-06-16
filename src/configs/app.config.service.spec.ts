import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';

import { AppConfigService } from './app.config.service';

describe('AppConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppConfigService],
    }).compile();

    service = module.get<ConfigService>(AppConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

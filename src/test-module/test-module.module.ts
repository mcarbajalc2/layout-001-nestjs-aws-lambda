import { Module } from '@nestjs/common';
import { TestController } from './adapters/api/test.controller';
import { TestService } from './domain/ports/test.service';

@Module({
  controllers: [TestController],
  providers: [TestService]
})
export class TestModuleModule {}

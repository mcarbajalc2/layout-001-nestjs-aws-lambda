import { Module } from '@nestjs/common';
import { TestModuleModule } from './test-module/test-module.module';

@Module({
  imports: [TestModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

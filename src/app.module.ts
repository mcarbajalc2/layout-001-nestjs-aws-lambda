import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TestModuleModule } from './test-module/test-module.module';

@Module({
  imports: [TestModuleModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true
      })
    },
  ],
})
export class AppModule {}

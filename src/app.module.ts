import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configModuleOptions } from './shared/configs/module-options';
import { UserModule } from './users/user.module';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

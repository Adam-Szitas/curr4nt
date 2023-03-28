import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './mongo/mongo.module';

import { env } from './environment/env.js';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${env.localhost.DB_USER}:${env.localhost.DB_PW}@localhost:27017`, {
      dbName: 'nestDB',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

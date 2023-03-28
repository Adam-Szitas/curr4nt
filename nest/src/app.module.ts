import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './mongo/mongo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://<mongo>:<mongo>@localhost:27017', {
      dbName: 'nestDB',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

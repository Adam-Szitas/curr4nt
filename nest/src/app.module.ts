import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './mongo/mongo.module';

// import { env } from './environment/env.js';

@Module({
    imports: [
        MongooseModule.forRoot(`mongodb://127.0.0.1:27017/nestDB`, {
            dbName: 'nestDB',
        }),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

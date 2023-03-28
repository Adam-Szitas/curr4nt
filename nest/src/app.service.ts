import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    return JSON.stringify({text: 'Hello World!'});
  }
}

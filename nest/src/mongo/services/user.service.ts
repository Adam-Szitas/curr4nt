import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { User } from '../interfaces/user/user.types';

@Injectable()
export class UserService {
  constructor(@InjectConnection() private connection: Connection) {}

  
  /**
   * private method
   * 
   * creates connection to MongoDB
   * [IMP] don't forget to close
   * @returns void
   */
  private connect(): void {
    // this.connection
  }

  public getAllUsers(): Partial<User>[] | null {
    return null;
    // this.connect();
    // return this.connection.get('users')
  }
}

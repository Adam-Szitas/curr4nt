import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from '../interfaces/user/user.types';

@Schema()
export class User {
  @Prop()
  public firstName: string;
  @Prop()
  public lastName: string;
  @Prop()
  public birthDate: Date;
  @Prop()
  public gender: Gender;
  @Prop()
  public nickName: string;
  @Prop()
  public password: string;
}



export const UserSchema = SchemaFactory.createForClass(User);

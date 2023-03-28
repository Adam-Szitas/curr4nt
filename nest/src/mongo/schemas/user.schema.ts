import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  public firstName: string;
  @Prop()
  public lastName: string;
  @Prop()
  public age: number;
  @Prop()
  public nickName: string;
  @Prop()
  public password: string;
  
}



export const UserSchema = SchemaFactory.createForClass(User);

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

const enviroment = process.env.NODE_ENV || 'development'

@Module({
  imports: [
    UserModule,
    AuthModule,

    ConfigModule.forRoot({
      envFilePath: '/.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://NestApp:qwerty375@cluster0.xifnu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

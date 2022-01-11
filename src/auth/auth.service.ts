import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private readonly configService: ConfigService) {
        const mongoConStr = this.configService.get<string>('MONGODB_WRITE_CONNECTHION_STRING')
        console.log(mongoConStr)
    }
}

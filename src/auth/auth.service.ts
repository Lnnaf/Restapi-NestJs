import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UserService,
      private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        const isMatch = await bcrypt.compare(pass, user.password);
        if (user && isMatch) {
          const payload = { username: user.username, sub: 'ADMIN'};
          return {
            access_token: this.jwtService.sign(payload)
          };
        }
        return null;
      }

}

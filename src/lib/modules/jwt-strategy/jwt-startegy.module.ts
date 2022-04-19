import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@lib/modules/jwt-strategy/jwt-strategy.service';

@Module({
  imports: [PassportModule],
  providers: [JwtStrategy],
})
export class JwtStrategyModule {}

import { Global, Module } from '@nestjs/common';
import { ResponseService } from '@lib/modules/response/response.service';

@Global()
@Module({
  providers: [ResponseService],
  exports: [ResponseService],
})
export class ResponseModule {}

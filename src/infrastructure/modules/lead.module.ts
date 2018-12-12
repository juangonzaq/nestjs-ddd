import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { LeadController } from '../../app/controllers/lead.controller';
import { LeadProvider } from '../../infrastructure/providers/lead.provider';
import { LeadService } from '../../domain/services/lead.service';

//import { UserIdMiddleware } from './middlewares/userbyId.middleware';
//  Middlewares
//import { bodyValidatorMiddleware } from '../auth/middlewares/body-validator.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [LeadController],
  providers: [
    LeadService, ...LeadProvider
  ],
  exports: [
    ...LeadProvider
  ]
})
export class LeadModule implements NestModule{
  public configure(consumer: MiddlewareConsumer) {
    /*
    consumer
      .apply(bodyValidatorMiddleware)
      .forRoutes('users/signup');

    consumer.apply(UserIdMiddleware)
      .forRoutes({ path: 'users/:id', method: RequestMethod.ALL });
      //  users id calling middleware for findById users before run another methods like "delete/update/read"
    */
  }
}

import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { LeadController } from '../../app/controllers/lead.controller';
import { LeadProvider } from '../../infrastructure/providers/lead.provider';
import { LeadService } from '../../domain/services/lead.service';
import { LoggerMiddleware } from '../../app/middlewares/logger.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [LeadController],
  providers: [
    LeadService, ...LeadProvider,
  ],
  exports: [
    ...LeadProvider,
  ],
})
export class LeadModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('lead');
  }
}

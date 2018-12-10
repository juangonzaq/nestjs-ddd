import { Lead } from '../../domain/entities/lead.entity';

export const leadProvider = [
  {
    provide: 'LeadRepository',
    useValue: Lead,
  },
];
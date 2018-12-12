import { Lead } from '../../domain/entities/lead.entity';

export const LeadProvider = [
  {
    provide: 'LeadRepository',
    useValue: Lead,
  },
];
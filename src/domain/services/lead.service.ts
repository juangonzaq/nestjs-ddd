import { Injectable, Inject } from '@nestjs/common';
import { CreateLeadDto } from '../dto/create-lead.dto';
import { Lead } from '../entities/lead.entity';

@Injectable()
export class LeadService {
  constructor(
    @Inject('LeadRepository') private readonly leadRepository: typeof Lead) {}
  async create(createLeadDto: CreateLeadDto): Promise<Lead> {
    const lead = new Lead();
    lead.latitud = createLeadDto.latitud;
    lead.longitud = createLeadDto.longitud;
    lead.code = createLeadDto.code;

    return await lead.save();
  }

  async findAll(): Promise<Lead[]> {
    return await this.leadRepository.findAll<Lead>();
  }
}
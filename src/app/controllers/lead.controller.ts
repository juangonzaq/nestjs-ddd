import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateLeadDto } from '../../domain/dto/create-lead.dto';
import { LeadService } from '../../domain/services/lead.service';
import { Lead } from '../../domain/entities/lead.entity';

@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  async create(@Body() createLeadDto: CreateLeadDto) {
    await this.leadService.create(createLeadDto);
  }
/*
  @Get()
  async findAll(): Promise<Lead[]> {
    return await this.leadService.findAll();
  }
  */
}
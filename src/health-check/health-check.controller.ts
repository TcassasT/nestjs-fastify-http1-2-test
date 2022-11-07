import { Controller, Get, Res } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';
import type { FastifyReply } from 'fastify';

@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  async status(@Res() reply: FastifyReply): Promise<void> {
    console.log('health-check.controller.status: request');
    reply
      .status(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ message: 'Status OK' });
  }
}

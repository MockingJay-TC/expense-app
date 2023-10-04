import { Controller, Get, Inject } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  @Inject(SummaryService)
  private readonly summaryService: SummaryService;

  @Get()
  getSummary() {
    return this.summaryService.calculateSummary();
  }
}

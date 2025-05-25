import { PaginationDto } from '../../dto/pagination.dto';

export class FindBookingScheduleDto extends PaginationDto {
  startDate?: string;
  endDate?: string;
}

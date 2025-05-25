import { PaginationDto } from '../../dto/pagination.dto';

export class FindRoomDto extends PaginationDto {
  isAvailable?: boolean;
}

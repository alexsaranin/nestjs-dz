import { PaginationDto } from '../../dto/pagination.dto';

export class GetAllUsersDto extends PaginationDto {
  email?: string;
}

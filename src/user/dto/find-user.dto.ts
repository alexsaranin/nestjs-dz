import { PaginationDto } from '../../dto/pagination.dto';

export class FindUserDto extends PaginationDto {
  email?: string;
}

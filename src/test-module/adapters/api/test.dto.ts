import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class TestDto {
  @IsString({ message: 'Otro diferente' })
  @IsNotEmpty({ message: 'Mensaje diferente de mas' })
  data1: string;

  @IsNumber()
  @Min(1)
  data2: number;
}

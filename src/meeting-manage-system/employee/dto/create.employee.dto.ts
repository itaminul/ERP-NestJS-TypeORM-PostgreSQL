import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateEmployeeDTO {
  @IsNumber()
  @IsOptional()
  salary: number;
  @IsString()
  @IsOptional()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  middleName: string;
  @IsString()
  @IsOptional()
  lastName: string;
  @IsString()
  @IsOptional()
  fullName: string;
  @IsString()
  @IsOptional()
  phone: string;
  @IsString()
  @IsOptional()
  mobileOne: string;
  @IsString()
  @IsOptional()
  mobileTwo: string;
  @IsNotEmpty()
  @IsString()
  emergencyMobile: string;
  @IsNotEmpty()
  @IsString()
  officeEmail: string;
  @IsString()
  @IsOptional()
  personalEmail: string;
  @IsString()
  @IsOptional()
  empImage: string;
  @IsString()
  @IsOptional()
  empSignature: string;
  @IsNumber()
  @IsOptional()
  nationalId: number;
  @IsNumber()
  @IsOptional()
  createdBy: number;
  @IsNumber()
  @IsOptional()
  departmentId: number;
}

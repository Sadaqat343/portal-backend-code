import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  studentId!: string;

  @IsNotEmpty()
  @IsString()
  fullName!: string;

  @IsNotEmpty()
  @IsString()
  fatherName!: string;

  @IsNotEmpty()
  @IsString()
  cnic!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber!: string;

  @IsNotEmpty()
  @IsString()
  gender!: string;

  @IsNotEmpty()
  @IsString()
  dateOfBirth!: string;

  @IsNotEmpty()
  @IsString()
  department!: string;

  @IsNotEmpty()
  @IsNumber()
  semester!: number;

  @IsNotEmpty()
  @IsString()
  currentAddress!: string;

  @IsNotEmpty()
  @IsString()
  permanentAddress!: string;

  @IsOptional()
  @IsString()
  profilePicture?: string;
}
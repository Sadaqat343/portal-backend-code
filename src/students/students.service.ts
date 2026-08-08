import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto);

    return this.studentRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOne(studentId: string): Promise<Student | null> {
  return this.studentRepository.findOne({
    where: { studentId },
  });
 }

  async update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student | null> {
    await this.studentRepository.update(id, updateStudentDto);

    return this.studentRepository.findOne({
  where: { id },
  });
}

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}

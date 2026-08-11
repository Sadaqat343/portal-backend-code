import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Teacher } from "./entities/teachers.entity";

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async createTeacher(
    teacherData: Partial<Teacher>,
  ): Promise<Teacher> {
    const teacher = this.teacherRepository.create(teacherData);

    return this.teacherRepository.save(teacher);
  }

  async getTeachers(): Promise<Teacher[]> {
    return this.teacherRepository.find();
  }

  async getTeachersBySubject(subject: string): Promise<Teacher[]> {
  const teachers = await this.teacherRepository.find();

  return teachers.filter((teacher) => {
    const teacherSubjects = teacher.subjects
      .split(",")
      .map((item) => item.trim().toLowerCase());

    return teacherSubjects.includes(subject.trim().toLowerCase());
  });
}

  async getTeacher(id: number): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOne({
      where: { id },
    });

    if (!teacher) {
      throw new NotFoundException("Teacher not found");
    }

    return teacher;
  }

  async updateTeacher(
    id: number,
    teacherData: Partial<Teacher>,
  ): Promise<Teacher> {
    const teacher = await this.getTeacher(id);

    Object.assign(teacher, teacherData);

    return this.teacherRepository.save(teacher);
  }

  async deleteTeacher(id: number): Promise<void> {
    const teacher = await this.getTeacher(id);

    await this.teacherRepository.remove(teacher);
  }
}

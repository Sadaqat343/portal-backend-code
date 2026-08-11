import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from "@nestjs/common";

import { TeachersService } from "./teachers.service";
import { Teacher } from "./entities/teachers.entity";

@Controller("teachers")
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  create(@Body() teacherData: Partial<Teacher>) {
    return this.teachersService.createTeacher(teacherData);
  }

  @Get()
  findAll() {
    return this.teachersService.getTeachers();
  }

  @Get("by-subject/:subject")
  findBySubject(@Param("subject") subject: string) {
  return this.teachersService.getTeachersBySubject(subject);
 }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.teachersService.getTeacher(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() teacherData: Partial<Teacher>,
  ) {
    return this.teachersService.updateTeacher(id, teacherData);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.teachersService.deleteTeacher(id);
  }
}
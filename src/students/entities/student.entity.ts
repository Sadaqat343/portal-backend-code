import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  studentId!: string;

  @Column()
  fullName!: string;

  @Column()
  fatherName!: string;

  @Column()
  cnic!: string;

  @Column()
  email!: string;

  @Column()
  phoneNumber!: string;

  @Column()
  gender!: string;

  @Column()
  dateOfBirth!: string;

  @Column()
  department!: string;

  @Column()
  semester!: number;

  @Column()
  currentAddress!: string;

  @Column()
  permanentAddress!: string;

  @Column({ default: false })
  sameAddress!: boolean;

  @Column({ nullable: true })
  profilePicture!: string;
}
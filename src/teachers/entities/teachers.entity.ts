import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  teacherId!: string;

  @Column()
  fullName!: string;

  @Column()
  fatherName!: string;

  @Column()
  email!: string;

  @Column()
  phoneNumber!: string;

  @Column()
  gender!: string;

  @Column({ type: "date" })
  dateOfBirth!: string;

  @Column()
  department!: string;

  @Column()
  qualification!: string;

  @Column()
  designation!: string;

  @Column({ default: "" })
  subjects!: string;

  @Column({ type: "date" })
  joiningDate!: string;

  @Column("text")
  currentAddress!: string;

  @Column("text")
  permanentAddress!: string;

  @Column({ default: false })
  sameAddress!: boolean;

  @Column("text", { nullable: true })
  profilePicture!: string;
}
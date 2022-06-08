import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from "typeorm"
import dotenv from "dotenv"
import { User } from "./User"



dotenv.config()

const datetime = process.env.PROD_DATABASE === "true"
  ? "timestamp"
  : "datetime"

@Entity()
@Unique(["user", "workingDate"])
export class Timesheet {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(type => User, user => user.timesheets, {
    onDelete: "CASCADE"
  })
  user!: User

  @Column()
  route!: string

  @Column({ type: datetime, nullable: true })
  startTime?: Date

  @Column({ type: datetime, nullable: true })
  endTime?: Date

  @Column({ type: datetime, nullable: true })
  breakStart?: Date

  @Column({ type: datetime })
  plannedStart!: Date

  @Column({ type: "date" })
  workingDate!: Date

  @Column({ nullable: true })
  ttmComments?: string

  @Column({ nullable: true })
  opsComments?: string

  @Column()
  opsMessage!: string

  @Column({ nullable: true })
  startTruck?: string

  @Column({ nullable: true })
  sick?: Boolean

  @Column({ nullable: true })
  late?: Boolean

  @Column({ nullable: true })
  edited?: Boolean
}
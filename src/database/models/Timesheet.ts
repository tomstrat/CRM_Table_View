import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import dotenv from "dotenv"
import { User } from "./User"



dotenv.config()

const datetime = process.env.PROD_DATABASE === "true"
  ? "timestamp"
  : "datetime"

@Entity()
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

  @Column()
  plannedStart!: string

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

  @Column()
  edited!: Boolean
}
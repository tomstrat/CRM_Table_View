import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User"

export enum RosterStatus {
  unselected = "unselected",
  notWorking = "notWorking",
  contactable = "contactable",
  working = "working"
}

@Entity()
export class Roster {

  @PrimaryGeneratedColumn()
  id?: number

  @OneToOne(type => User, user => user.roster)
  @JoinColumn()
  user?: User

  @Column({
    type: "simple-enum",
    enum: RosterStatus,
    default: RosterStatus.unselected
  })
  monday!: RosterStatus
  @Column({
    type: "simple-enum",
    enum: RosterStatus,
    default: RosterStatus.unselected
  })
  tuesday!: RosterStatus
  @Column({
    type: "simple-enum",
    enum: RosterStatus,
    default: RosterStatus.unselected
  })
  wednesday!: RosterStatus
  @Column({
    type: "simple-enum",
    enum: RosterStatus,
    default: RosterStatus.unselected
  })
  thursday!: RosterStatus
  @Column({
    type: "simple-enum",
    enum: RosterStatus,
    default: RosterStatus.unselected
  })
  friday!: RosterStatus
  @Column({
    type: "simple-enum",
    enum: RosterStatus,
    default: RosterStatus.unselected
  })
  saturday!: RosterStatus

}

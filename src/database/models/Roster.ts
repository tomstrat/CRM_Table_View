import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User"

export enum RosterStatus {
  unselected,
  notWorking,
  contactable,
  working
}

@Entity()
export class Roster {

  @PrimaryGeneratedColumn()
  id?: number

  @OneToOne(type => User, user => user.roster)
  @JoinColumn()
  user?: User

  @Column()
  monday!: RosterStatus
  @Column()
  tuesday!: RosterStatus
  @Column()
  wednesday!: RosterStatus
  @Column()
  thursday!: RosterStatus
  @Column()
  friday!: RosterStatus
  @Column()
  saturday!: RosterStatus

}

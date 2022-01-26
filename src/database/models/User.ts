import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { Roster } from "./Roster"

export enum Role {
	driver = 0,
	navigator = 0,
	trainer = 0,
	operations,
	admin
}

export enum Contract {
	fullTime,
	partTime,
	casual,
	temp
}

@Entity()
export class User {

	@PrimaryGeneratedColumn()
	id?: number

	@Column({ length: 20 })
	username!: string

	@Column({ length: 40 })
	password!: string

	@Column()
	role!: Role

	@Column()
	contract!: Contract

	@Column()
	certified!: Boolean

	@Column()
	injured!: Boolean

	@OneToOne(type => Roster, roster => roster.user, {
		cascade: true
	})
	roster!: Roster
}

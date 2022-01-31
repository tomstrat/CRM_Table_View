import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { Roster } from "./Roster"

export enum Role {
	user = "user",
	operations = "operations",
	admin = "admin"
}

export enum RolePermission {
	user,
	operations,
	admin
}

export enum EmployeeType {
	driver = "driver",
	trainer = "trainer",
	temp = "temp",
	navigator = "navigator",
	operations = "operations"
}

export enum Contract {
	fullTime = "fullTime",
	partTime = "partTime",
	casual = "casual",
	temp = "temp"
}

@Entity()
export class User {

	@PrimaryGeneratedColumn()
	id?: number

	@Column({ length: 20 })
	username!: string

	@Column({ length: 40 })
	password!: string

	@Column({ type: "simple-array" })
	employeeType?: EmployeeType[]

	@Column({
		type: "simple-enum",
		enum: Role,
		default: Role.user
	})
	role!: Role

	@Column({
		type: "simple-enum",
		enum: Contract,
		default: Contract.fullTime
	})
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

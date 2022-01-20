import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum Role {
	superUser = "SUPERUSER",
	admin = "ADMIN",
	user = "USER",
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

}

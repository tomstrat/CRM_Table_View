import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum Role {
	user,
	admin,
	superUser
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

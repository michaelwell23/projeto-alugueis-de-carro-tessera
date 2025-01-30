import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  drive_license: string;

  @Column()
  isAdmin: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

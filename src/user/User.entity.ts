import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm'

import Note from '../note/Note.entity'

@Entity()
class User {
  constructor(props?: Object) {
    Object.assign(this, props)
  }
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @OneToMany(type => Note, note => note.user, { cascade: true })
  notes: Note[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @VersionColumn()
  version: number
}

export default User

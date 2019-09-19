import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm'

@Entity()
class Note {
  constructor(props?: Object) {
    Object.assign(this, props)
  }
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  content: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @VersionColumn()
  version: number
}

export default Note

import { Connection } from 'typeorm'

import User from '../user/User.entity'
import Note from '../note/Note.entity'

const seed = async (connection: Connection) => {
  await connection.transaction(async transactionalEntityManager => {
    await transactionalEntityManager.delete(User, {})
    await transactionalEntityManager.delete(Note, {})

    const note = new Note({ content: 'Hello' })
    const user = new User({ email: 'hello@example.com', notes: [note] })
    await transactionalEntityManager.save(user)
  })
}

export default seed

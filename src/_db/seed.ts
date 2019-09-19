import { Connection } from 'typeorm'

import User from '../user/User.entity'
import Note from '../note/Note.entity'

const seed = async (connection: Connection) => {
  await connection.transaction(async transactionalEntityManager => {
    await transactionalEntityManager.clear(User)
    await transactionalEntityManager.clear(Note)

    const user = new User({
      id: '4dcccc3d-23c7-4bfc-b996-6f6fc2a71376',
      email: 'hello@example.com',
    })
    await transactionalEntityManager.save(user)

    const note = new Note({
      id: '9ab37061-7a2a-4d7f-9ead-3fa85ef0ef2f',
      content: 'Hello',
    })
    await transactionalEntityManager.save(note)
  })
}

export default seed

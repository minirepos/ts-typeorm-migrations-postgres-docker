import 'dotenv/config'

import { createConnection } from 'typeorm'

import User from './user/User.entity'

const main = async () => {
  const connection = await createConnection()

  const user = await connection.manager.findOne(
    User,
    { email: 'hello@example.com' },
    { relations: ['notes'] }
  )
  console.log(user)

  await connection.close()
}

main()

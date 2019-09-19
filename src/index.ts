import 'dotenv/config'

import { createConnection } from 'typeorm'

import User from './user/User.entity'

const main = async () => {
  const connection = await createConnection()

  const user = new User({ email: 'hello@example.com' })
  await connection.manager.save(user)

  connection.close()
}

main()

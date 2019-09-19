import { createConnection, Connection } from 'typeorm'

import Note from '../note/Note.entity'
import User from '../user/User.entity'
import seed from './seed'

let connection: Connection

const getTableNames = async () =>
  (await connection.manager.query('SELECT * FROM pg_catalog.pg_tables;')).map(
    (t: any) => t.tablename
  )

beforeAll(async () => {
  connection = await createConnection()
})

afterAll(() => connection.close())

test('migration and seeding', async () => {
  let tables = await getTableNames()
  expect(tables.includes('_migrations')).toBe(false)
  expect(tables.includes('user')).toBe(false)
  expect(tables.includes('note')).toBe(false)

  await connection.runMigrations()

  tables = await getTableNames()
  expect(tables.includes('_migrations')).toBe(true)
  expect(tables.includes('user')).toBe(true)
  expect(tables.includes('note')).toBe(true)

  expect((await connection.manager.find(User)).length).toBe(0)
  expect((await connection.manager.find(Note)).length).toBe(0)

  await seed(connection)

  expect((await connection.manager.find(User))[0].email).toBe('hello@example.com')
  expect((await connection.manager.find(Note))[0].content).toBe('Hello')
})

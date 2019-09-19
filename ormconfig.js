require('dotenv/config')

const { DATABASE_URL, TEST_DATABASE_URL, IS_LOCAL, NODE_ENV } = process.env

module.exports = {
  type: 'postgres',
  url: NODE_ENV === 'test' ? TEST_DATABASE_URL : DATABASE_URL,
  ssl: !IS_LOCAL,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/_db/migrations/*.ts'],
  migrationsTableName: '_migrations',
  cli: { migrationsDir: 'src/_db/migrations' },
}

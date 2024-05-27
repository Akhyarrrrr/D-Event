import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Events extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('registration_link').notNullable()
      table.dateTime('event_date').notNullable()
      table.text('description').notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

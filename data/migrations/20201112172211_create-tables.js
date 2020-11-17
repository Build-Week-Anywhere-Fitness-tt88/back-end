
exports.up = async function(knex) {
  await knex.schema.createTable('classes', (table) => {
      table.increments('id')
      table.text('name').notNull
      table.text('type')
      table.text('date')
      table.text('duration')
      table.text('intensity')
      table.text('location');
      table.text('numberOfRegisteredAttendees')
      table.integer('maxClassSize')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('classes')
};

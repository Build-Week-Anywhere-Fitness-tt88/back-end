
exports.up = async function(knex) {
    await knex.schema.createTable('sample', (table) => {
        table.increments('id')
        table.text('name').notNull
        table.text('imageUrl')
        table.text('description')
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('sample')
};

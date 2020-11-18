
exports.seed = async function(knex) {
  await knex('classes').truncate();
  await knex('sample').truncate();
  await knex('users').truncate();
};

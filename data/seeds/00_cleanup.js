
exports.seed = async function(knex) {
  await knex('classes').truncate();
};

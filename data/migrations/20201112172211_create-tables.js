exports.up = async function (knex) {
  await knex.schema.createTable("classes", (table) => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("type");
    table.text("date");
    table.text("duration");
    table.text("intensity");
    table.text("location");
    table.text("numberOfRegisteredAttendees");
    table.integer("maxClassSize");
  });

  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("username").notNullable();
    table.text("password").notNullable();
    table.text("role").notNullable();
  });

  // make username a unique column
  await knex.schema.alterTable("users", function (table) {
    table.unique("username");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("classes");
  await knex.schema.dropTableIfExists("users");
};

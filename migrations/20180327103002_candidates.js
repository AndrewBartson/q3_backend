
exports.up = function(knex, Promise) {
  return knex.schema.createTable('candidates', table => {
    table.increments()
    table.string('party')
      .notNullable()
      .defaultsTo('')
    table.string('presidential_candidate')
      .notNullable()
      .defaultsTo('')
    table.string('vice_president_candidate')
      .notNullable()
      .defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('candidates')
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('candidate_state', table => {
    table.increments()
    table.integer('american_state_id')
      .references('id')
      .inTable('american_state')
      .notNullable()
      .onDelete('Cascade')
    table.integer('candidate_id')
      .references('id')
      .inTable('candidates')
      .notNullable()
      .onDelete('Cascade')
    table.integer('popular_votes')
      .notNullable()
    table.float('margin_of_victory')
      .notNullable()
    table.float('percentage_pop_vote')
      .notNullable()
    table.integer('electoral_votes')
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('candidate_state')
};

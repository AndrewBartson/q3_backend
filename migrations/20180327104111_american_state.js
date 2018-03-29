exports.up = function(knex, Promise) {
  return knex.schema.createTable('american_state', table => {
    table.increments()
    table.string('state_name')
      .notNullable()
    table.string('state_code')
      .notNullable()
    table.integer('electoral_votes')
      .notNullable()
    table.integer('total_pop_vote')
      .notNullable()
    table.integer('color_group')
      .notNullable()
      .defaultsTo(-1)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('american_state')
};



//should i put the number of popular votes in the State table or the Combined table

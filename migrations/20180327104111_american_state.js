exports.up = function(knex, Promise) {
  return knex.schema.createTable('american_state', table => {
    table.increments()
    table.string('state_name')
      .notNullable()
      .defaultsTo('')
    table.string('state_code')
      .notNullable()
      .defaultsTo('')
    table.integer('electoral_votes')
      .notNullable()
      .defaultsTo(-1)

//TOTAL POPULAR VOTE

    // table.integer('Color Group')
    //   .notNullable()
    //   .defaultsTo(-1)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('american_state')
};



//should i put the number of popular votes in the State table or the Combined table

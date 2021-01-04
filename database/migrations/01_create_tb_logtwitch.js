exports.up = function(knex) {   
    return knex.schema.createTable('tb_logtwitch', function (table) {
        table.increments('pk_id').primary().notNullable();
        table.string('id').notNullable(); //id
        table.string('id_user').notNullable(); //user-id
        table.string('ds_displayname').notNullable(); //display-name
        table.string('nm_user').notNullable(); //username
        table.string('ds_message',10000).notNullable();
        table.boolean('tg_emote');
        table.boolean('tg_mod');
        table.boolean('tg_subscriber');
        table.datetime('dt_executed').notNullable();
    })
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('tb_logtwitch');
};
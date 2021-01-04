exports.up = function(knex) {   
    return knex.schema.createTable('tb_logmod', function (table) {
        table.increments('pk_id').primary().notNullable();
        table.string('ds_displayname').notNullable(); //display-name
        table.string('nm_mod').notNullable(); //moderator - username
        table.string('ds_action').notNullable();
        table.string('nm_user').notNullable();
        table.string('ds_lastmessage',10000);
        table.string('ds_razao');
        table.datetime('dt_executed').notNullable();
    })
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('tb_logmod');
};
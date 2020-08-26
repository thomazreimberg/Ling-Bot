exports.up = function(knex) {   
    return  knex.schema.createTable('tb_log', function (table) {
        table.increments('id').primary().increments();
        table.string('id_user').notNullable();
        table.string('nk_user').notNullable();
        table.string('nm_command').notNullable();
        table.string('dt_executed').notNullable();
    })
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable('tb_log');
};
//FS-related option specified for migration configuration. This resets migrationSource to default FsMigrations
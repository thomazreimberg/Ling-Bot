
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tb_log').del()
    .then(function () {
      // Inserts seed entries
      return knex('tb_log').insert([
        { id_user: '1264512764', nk_user: 'user1' , nm_command: '!help', dt_executed: 'data de hoje'},
        { id_user: '1315134432', nk_user: 'user2' , nm_command: '!spoiler', dt_executed: 'data de hoje'}
      ]);
    });
};

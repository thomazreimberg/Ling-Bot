const connection = require('../connection');

module.exports = {
    create(request, response){
        const { ds_displayname, nm_mod, ds_action, nm_user, ds_lastmessage, ds_razao, dt_executed } = request.body;
        
        connection('tb_logmod').insert({
            ds_displayname,
            nm_mod,
            ds_action,
            nm_user,
            ds_lastmessage,
            ds_razao,
            dt_executed
        });

        return response.json();
    },
}
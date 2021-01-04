const connection = require('../connection');

module.exports = {
    async create(request, message){
        let id = request.id;
        let id_user = request.id;
        let ds_displayname = request.username;
        let nm_user = request.username;
        let ds_message = message;
        let tg_emote = request.emotes;
        let tg_mod = request.mod;
        let tg_subscriber = request.subscriber;
        let dt_executed = new Date().toString();
        
        await connection('tb_logtwitch').insert({
            id,
            id_user,
            ds_displayname,
            nm_user,
            ds_message,
            tg_emote,
            tg_mod,
            tg_subscriber,
            dt_executed
        });
    },
}
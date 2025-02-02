'use strict';

exports.SSL_options = typeof window === 'undefined' ? {
    key: require("fs").readFileSync(__dirname+"/server/ssl_cert/privkey.pem"),
    cert: require("fs").readFileSync(__dirname+"/server/ssl_cert/fullchain.pem")    
} : {}

exports.clientDHkeys = {
    server_pub: '9c3bb3b99924a6207a1c5495e474da487226eb1d',
    G: "a;ljg@$BFB"
}

exports.SQLITE_PATH = __dirname+"/server/sqlite.db";


exports.dbTables = [
    {
       'name' : 'orders',
       'cols' : [
           ['uid', 'TEXT UNIQUE PRIMARY KEY'],
           ['time', 'INTEGER'],
           ['sell_amount', 'TEXT'],
           ['buy_amount', 'TEXT'],
           ['sell_coin', 'TEXT'],
           ['seller_pubkey', 'TEXT'],
           ['buy_coin', 'TEXT'],
           ['json', 'TEXT'],
           ['active', 'INTEGER']
         ]
    },
]; 


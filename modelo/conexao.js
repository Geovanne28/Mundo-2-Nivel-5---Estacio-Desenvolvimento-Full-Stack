const banco = require('mongoose');
const options = {
    useUnifiedTopology: true,
    useNewUrlParser   : true
};

banco.connect('mongodb://geovannea28:sEF3gN3hihRE9mJC@ac-jbkdhxr-shard-00-00.ykff7s4.mongodb.net:27017,ac-jbkdhxr-shard-00-01.ykff7s4.mongodb.net:27017,ac-jbkdhxr-shard-00-02.ykff7s4.mongodb.net:27017/?ssl=true&replicaSet=atlas-i8909m-shard-0&authSource=admin&retryWrites=true&w=majority', options);

module.exports = banco;

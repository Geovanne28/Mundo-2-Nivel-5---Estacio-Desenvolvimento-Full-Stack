const banco = require('mongoose');
const options = {
    useUnifiedTopology: true,
    useNewUrlParser   : true
};

module.exports = banco.connect('mongodb://geovannea28:sEF3gN3hihRE9mJC@cluster0.ykff7s4.mongodb.net', options);

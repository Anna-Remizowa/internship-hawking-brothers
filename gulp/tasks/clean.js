const del = require('del');

const clean = () => del('dist');

module.exports = clean;

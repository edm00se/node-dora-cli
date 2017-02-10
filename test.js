const test = require('ava');
const dora = require('./cli');
const execa = require('execa');

test('-h', t => {
  async t => {
    t.true(await execa.stdout('./cli.js -h'));
  }
});

#!/usr/bin/env node
'use strict';

const dora = require('node-dora');
const meow = require('meow');
// const ora = require('ora');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const chalk = require('chalk');
const pify = require('pify');
const Listr = require('listr');

updateNotifier({pkg}).notify();

const cli = meow(`
  Usage
    $ dora <odp>
  Example
    $ dora 'My ODP'
`, {
    alias: {
        h: 'help',
        v: 'version'
    }
});

const tasks = new Listr([
  {
    title: '',
    task: () => pify(dora.performFilter)(odpPath).then(data => {})
  }
]);

const odpPath = cli.input[0];
if( '' !== odpPath.trim() ){
  tasks.run().catch(err => {
    console.error(err);
    chalk.red.bold('⛈ 😢!');
  });
} else {
  chalk.red.bold('A valid ODP path must be specified!');
}

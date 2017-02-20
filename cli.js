#!/usr/bin/env node
'use strict';

const dora = require('node-dora');
const meow = require('meow');
const ora = require('ora');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const chalk = require('chalk');

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

function bringTheMagic(odpPath) {
  const spinner = ora('⚡️ Processing with DORA XSLT').start();
  dora.performFilter(odpPath, function(err){
    if(err){
      spinner.fail('🦄 😢!');
    }
    spinner.succeed('🦄 😊');
  });
}

const odpPath = cli.input[0];
if( "" !== odpPath.trim() ){
  bringTheMagic(odpPath);
} else {
  chalk.red.bold('A valid ODP path must be specified!');
}

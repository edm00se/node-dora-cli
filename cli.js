#!/usr/bin/env node
'use strict';

const dora = require('node-dora');
const meow = require('meow');
const ora = require('ora');

const cli = meow(`
  Usage
    $ dora <odp>
  Example
    $ dora 'My ODP'
`, {
    alias: {
        h: 'help'
    }
});

ora.promise(dora.performFilter(cli.input[0]), '⚡️️ Processing with DORA XSLT');

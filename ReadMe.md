# node-dora-cli

[![NPM version][npm-image]][npm-url]

A CLI tool for the [node-dora](https://github.com/edm00se/node-dora) package.

## Update

This repo has been archived. If you believe this shouldn't be the case, please [contact the project author](https://edm00.se/contact).

## Installation

- `npm install --save-dev dora-cli`

You can also save it as a direct dependency with `--save` or for system wide access, with `--global`.

## Usage

Assuming you have an On Disk Project at a relative path of "My Amazing ODP", you can set up an [npm script](https://docs.npmjs.com/misc/scripts) in your `package.json` to pont to it, like such:

```json
"scripts": {
  "clean": "dora 'My Amazing ODP'"
}
```

Now any time it available to other npm scripts or via `npm run clean`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Related

- [node-dora](https://github.com/edm00se/node-dora) - API for this module

## License

MIT

[npm-image]: https://badge.fury.io/js/dora-cli.svg
[npm-url]: https://npmjs.org/package/dora-cli

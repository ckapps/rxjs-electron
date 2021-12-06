# @ckapp/rxjs-electron

![CI][ci-badge]
[![npm version][npm-badge]][npm-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
[![Conventional Commits][conventional-commits-badge]][conventional-commits-url]

A collection of extensions to work with [electron][docs-electron] leveraging the powers of [RxJS][docs-rxjs].

## Branches / Versions

- [master](https://github.com/ckapps/rxjs-electron/commits/master) - Contains the most recent and unreleased changes
- [stable](https://github.com/ckapps/rxjs-electron/tree/release/stable/1.x) - Contains the latest version you'd get if you do `npm install @ckapp/rxjs-electron`

Most PRs should be made to **master**.

Check our [branching and release strategy][gh-ckapps-docs-branching-url].

## Installation and Usage

### Prerequisits

If you want to use `rxjs-electron` in our application, make sure that you also install `rxjs` and electron using

```sh
npm i rxjs electron
```

### ES6 via npm

```sh
npm i @ckapp/rxjs-electron
```

## Building/Testing

- `npm test` run tests

[ci-badge]: https://github.com/ckapps/rxjs-electron/workflows/CI/badge.svg
[conventional-commits-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org/
[coveralls-badge]: https://coveralls.io/repos/github/ckapps/rxjs-electron/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/ckapps/rxjs-electron?branch=master
[docs-rxjs]: https://rxjs.dev/
[docs-electron]: https://www.electronjs.org/
[gh-ckapps-docs-branching-url]: https://github.com/ckapps/.github/blob/master/docs/branching.md
[npm-badge]: https://badge.fury.io/js/%40ckapp%2Frxjs-electron.svg
[npm-url]: https://www.npmjs.com/@ckapp/rxjs-electron
[npm-dep-rxjs-url]: https://www.npmjs.com/@ckapp/rxjs-electron

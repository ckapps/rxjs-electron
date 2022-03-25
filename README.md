<div style="text-align: center;">

![CI][ci-main-badge]
[![Coverage Status][cov-badge]][cov-url]
[![Conventional Commits][conventional-commits-badge]][conventional-commits-url]

</div>
<div style="text-align: center;">

[![npm version][npm-latest-badge]][npm-latest-url]

<!-- [![npm version][npm-next-badge]][npm-next-url] -->

</div>

# @ckapp/rxjs-electron

A collection of extensions to work with [electron][dep-electron-doc] leveraging the powers of [RxJS][dep-rxjs-doc].

## Branches / Versions

- [main][repo-branch-main] - Contains the most recent version

```sh
npm install @ckapp/rxjs-electron
```

- [next][repo-branch-next] - Contains the next version

```sh
npm install @ckapp/rxjs-electron@next
```

Most PRs should be made to `main`.

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

[ci-main-badge]: https://github.com/ckapps/rxjs-electron/workflows/CI/badge.svg
[conventional-commits-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org/
[cov-badge]: https://coveralls.io/repos/github/ckapps/rxjs-electron/badge.svg?branch=main
[cov-url]: https://coveralls.io/github/ckapps/rxjs-electron?branch=main
[dep-rxjs-doc]: https://rxjs.dev/
[dep-electron-doc]: https://www.electronjs.org/
[gh-ckapps-docs-branching-url]: https://github.com/ckapps/.github/blob/main/docs/branching.md
[npm-latest-badge]: https://img.shields.io/npm/v/@ckapp/rxjs-electron/latest.svg
[npm-latest-url]: https://www.npmjs.com/@ckapp/rxjs-electron
[repo-branch-main]: https://github.com/ckapps/rxjs-electron/commits/main
[repo-branch-next]: https://github.com/ckapps/rxjs-electron/tree/next

FND's ESLint configuration


Getting Started
---------------

* install this repository:

        $ npm install --save-dev eslint-config-fnd

* create a file `.eslintrc` with the following contents:

        extends: fnd

* run ESLint on your source files and directories:

        $ eslint --cache *.js src

    (cf. script command in `samples/package.json`)

* optionally adopt this repository's [`.editorconfig`](http://editorconfig.org)

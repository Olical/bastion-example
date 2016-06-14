# bastion-example

Say hello to [bastion][]! It builds JavaScript related things for you with zero configuration. Don't worry, there's a powerful configuration file, but the defaults are pretty great!

## What's this?

In this repository you'll find Elm and React code side by side with hot module reloading. That means you can change the code and it'll update live in your browser without losing the state.

The only configuration is a couple of simple lines in `bastion.conf.js`, you don't even need that if you just want a simple JavaScript application. You could still use React without this configuration file, the live reloading just wouldn't maintain state.

That configuration calls the pre-built mixins for React HMR and seamless Elm support, again with HMR. I hope to add more of these for things like CSS and image importing.

## Usage

You can compile the code into `./dist/bundle.js` with `make build`. If you have bastion installed globally you can just run `bastion`, that's all the makefile is doing.

There's also `make dev` which just maps to `bastion --dev`. This starts the dev server (at port `8080` by default) and will automatically hot reload modules as you change them.

## Want to know more?

Check out the [bastion][] repository as well as the files within this one. Especially `bastion.conf.js`, `Makefile` and `./src/entry.js`.

[bastion]: https://github.com/Olical/bastion

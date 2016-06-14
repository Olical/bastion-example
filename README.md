# bastion-example

Say hello to [bastion][]! It builds JavaScript related things for you.

## What's this?

In this repository you'll find Elm and React code side by side with hot module reloading. That means you can change the code and it'll update live in your browser without losing the state.

The only configuration is a couple of simple lines in `bastion.conf.js`, you don't even need that if you just want a simple JavaScript application. You could still use React without this configuration file, the live reloading just wouldn't maintain state.

That configuration calls the pre-built mixins for React HMR and seamless Elm support, again with HMR. I hope to add more of these for things like CSS and image importing.

## Want to know more?

Check out the [bastion][] repository as well as the files within this one. Especially `bastion.conf.js`, `Makefile` and `./src/entry.js`.

[bastion]: https://github.com/Olical/bastion

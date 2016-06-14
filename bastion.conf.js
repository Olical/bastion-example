// This function is given the webpack configuration as the first argument.
// It receives the CLI options as the second argument, I just don't need them here.
export function webpack () {
  // I'm using pre-configured webpack mixins.
  // They mutate the config object for you.

  // Adds React hot module reloading to the dev server.
  this.react()

  // Adds first class Elm lang support (through normal JavaScript imports!)
  // as well as hot module reloading.
  this.elm()
}

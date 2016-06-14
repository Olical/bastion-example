// This function is given the webpack configuration as the first argument.
// It receives the CLI options as the second argument, I just don't need them here.
export function webpack () {
  // I'm using pre-configured webpack mixins.
  // They mutate the config object for you.
  this.react()
  this.elm()
}

function slowUpperCase (msg) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(msg.toUpperCase()), 1000)
  })
}

async function main () {
  const result = await slowUpperCase('hello')
  console.log(`Result is: ${result}`)
}

main()

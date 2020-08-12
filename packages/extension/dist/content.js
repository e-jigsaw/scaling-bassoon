const main = async () => {
  const res = await fetch('http://localhost:3000')
  const json = await res.json()
  console.log(json)
}

main()

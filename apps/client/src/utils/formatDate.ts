export function formatDate(input: Date) {
  const year = input.getFullYear()
  const month = (input.getMonth() + 1).toString().padStart(2, '0')
  const day = input.getDate().toString().padStart(2, '0')
  const output = `${year}-${month}-${day}`

  return output
}
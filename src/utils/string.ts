export const parseSalary = (from: number, to: number, currency: number) => {
  if (to && from) return `з/п ${from} - ${to} ${currency}`
  if (from) return `з/п от ${from} ${currency}`
  if (to) return `з/п до ${to} ${currency}`
  return 'з/п не указана'
}
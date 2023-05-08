export const calcPagination = (countPage: number) => {
  if (countPage === 1) return ([0, 4]) 
  if (countPage > 1) return ([(countPage - 1) * 4, (countPage - 1) * 4 + 4]) 
 // if (countPage > 1) return [countPage - 1 * 4, countPage * 4 + 3]
 return [0, 4] 
}
export interface ICategory {
  title: string
  title_rus: string
  title_trimmed: string
  url_rus: string
  key: number
}

export interface IVacation {
  profession: string
  firm_name: string 
  town: {
    title: string
  }
  catalogues: Array<{
    title: string
  }>
  type_of_work: {
    title: string
  }
  vacancyRichText: string
  payment_to: number 
  payment_from: number
  currency: number
}

export interface IReqVacation {
  more: boolean
  objects: Array<IVacation>
  total: number
}
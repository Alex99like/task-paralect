import { IFormJob } from '../pages/Jobs'
import { catalogues, vacations } from '../api/consts'
import queryString from 'query-string'
import axios from 'axios'
import { createHeaders } from '../api/url.config'
import { ICategory, IReqVacation, IVacation } from '../types/vacantion.type'

export const JobsService = {
  async getVacation({ search, industry, from, to, page }: IFormJob & { page: number }): Promise<IReqVacation> {
    const queryParams = {
      published: '1',
      catalogues: industry && +industry,
      keyword: search,
      payment_from: from,
      payment_to: to,
      page: page,
      count: 4
    };
 
    const queryStringify = queryString.stringify(queryParams);

    const { data } = await axios.get<IReqVacation>(`${vacations}?${queryStringify}`, {
      ...createHeaders(),
    })
    
    return data 
  },
  
  async getVacationId(id: string) {
    const { data } = await axios.get<IVacation>(`${vacations}/${id}`, {
      ...createHeaders(),
    })

    return data
  },

  async getCategories(): Promise<Array<ICategory>> {
    const { data } = await axios.get<Array<ICategory>>(`${catalogues}`, {
      ...createHeaders()
    })

    return data
  }
}

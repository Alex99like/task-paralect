import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IFormJob } from '../pages/Jobs'
import { XApiAppId, XSecretKey, catalogues, vacations } from '../api/consts'
import queryString from 'query-string'
import axios from 'axios'
import { createHeaders } from '../api/url.config'

export const JobsService = {
  async getVacation({ search, filter: { industry, salary: { from, to } } }: IFormJob) {
    const queryParams = {
      keyword: search,
      payment_from: from,
      payment_to: to,
      catalogues: industry,
      page: '1',
      count: '4'
    };
    
    const queryStringified = queryString.stringify(queryParams);

    const { data } = await axios.get(`${vacations}?/${queryStringified}`, {
      ...createHeaders(),
    })

    return data 
  },
  
  async getCatalogues() {
    const { data } = await axios.get(`${catalogues}`, {
      ...createHeaders()
    })

    return data
  }
}

// export const jobsApi = createApi({
//   reducerPath: 'jobs',
//   baseQuery: fetchBaseQuery({ 
//     baseUrl: 'https://startup-summer-2023-proxy.onrender.com',
//     prepareHeaders: (headers) => {
//       headers.set('x-secret-key', XSecretKey)
//       headers.set('X-Api-App-Id', XApiAppId)
//     }
//   }),
//   endpoints: (build) => ({
//     getJobs: build.query<null, IFormJob>({
//       query: ({ search, filter: { industry, salary: { from, to } } }) => ({
//         url: `https://startup-summer-2023-proxy.onrender.com/vacancies`
//       })
//     })
//   })
// })

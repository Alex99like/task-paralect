import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const jobsApi = createApi({
  reducerPath: 'jobs',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://startup-summer-2023-proxy.onrender.com',
    prepareHeaders: (headers, { getState }) => {
        getState()
    }
  }),
  endpoints: (build) => ({
    getJobs: build.query({
      query: () => ({
        url: '/vacancies'
      })
    })
  })
})
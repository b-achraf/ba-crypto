import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '92b69bf5aemsh0ee9a6c70456fd7p1c1312jsnab663652f92c'
}
const baseURL = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })
export const cryptoNewsApi = createApi(
    {
        reducerPath: 'cryptoNewsApi',
        baseQuery: fetchBaseQuery(
            {
                baseUrl: baseURL
            }
        ),
        endpoints: (builder) => (
            {
                getCryptoNews: builder.query(
                    {
                        query: (
                            {
                                newsCategory,
                                count
                            }
                        ) => createRequest(
                            `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
                        )
                    }
                )
            }
        )
    }
)
export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi
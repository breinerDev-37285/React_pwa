import axios, { AxiosRequestConfig } from 'axios'

export const fetching = <T>(opts: AxiosRequestConfig): Promise<any> => {
    if (!opts.method) opts.method = 'get'
    if (!opts.headers) opts.headers = {}

    return axios(opts)
}

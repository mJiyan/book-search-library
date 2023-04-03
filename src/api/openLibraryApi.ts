import axios, { AxiosRequestHeaders } from 'axios';

import { Maybe } from 'src/types';

import { HTTP, MAX_REVIEW_FILES_SIZE } from './const';

type OpenLibraryApiCallProps = {
  url: string,
  data: Maybe<string>,
  params: Maybe<string>,
  method: HTTP,
  headers: any
}

const openLibraryApiCall = async ({ url = '', data = null, params = null, method = HTTP.GET, headers }: OpenLibraryApiCallProps) =>
  axios({
    url,
    data,
    params,
    method,
    headers: {
      ...headers,
    },
    maxContentLength: MAX_REVIEW_FILES_SIZE,
  })
    .then((p) => p)
    .catch((err) => {
      throw err;
    });


export default openLibraryApiCall
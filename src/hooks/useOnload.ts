import { api } from './api-client';

type res = {
  data: 'success'|'error',
  status: string,
}

export const useOnload = async () => {
  try {

    const res = await api.get<res>('/contact/onload/api/');

    const { data, status } = res
    if (+status === 401) {
      // console.log(status)
      throw data
    }

    return {
      data: data,
    }

  } catch (error: any) {
    const err: string = error;
    return {
      data: err,
    }
  }
}
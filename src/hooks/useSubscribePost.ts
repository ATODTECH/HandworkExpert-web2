import { SubscribeType } from '@/types/contact-us';
import { api } from './api-client';

type res = {
  data: 'success'|'error',
  status: string,
}

export const useSubscribePost = async (value: SubscribeType) => {
  try {
    const mainData = JSON.stringify(value);

    const res = await api.post<res>('/contact/subscribe/api/', mainData);
    console.log(res)

    const { data, status } = res
    if (+status === 406) {
      console.log(status)
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
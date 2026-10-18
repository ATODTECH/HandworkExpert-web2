import { ApiDataRes } from '@/types/contact-us';
import { api } from '../lib/axios-config';

type res = {
  data: ApiDataRes
  status: string
}

export const Onload = async () => {
  const { data } = await api.get<res>('/contact/onload/api/')
  return data
}

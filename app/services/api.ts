import { axiosClient } from './axios.config';

export type MockDataDTO = {
  name: string;
  category: string;
  value: number;
  id: string;
};

export const fetchMockData = () => {
  return axiosClient.get<MockDataDTO[]>(
    'https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete',
  );
};

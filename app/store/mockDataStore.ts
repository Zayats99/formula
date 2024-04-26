import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { MockDataDTO } from '../services/api';

type mockDataStore = {
  mockData: MockDataDTO[] | null;
};

type mockDataActions = {
  setMock: (data: MockDataDTO[]) => void;
};

const initialState: mockDataStore = {
  mockData: null,
};
export const useProfileStore = create<mockDataStore & mockDataActions>()(
  devtools(
    immer((set) => ({
      ...initialState,
      setMock: (data) =>
        set((state) => {
          state.mockData = data;
        }),
    })),
  ),
);

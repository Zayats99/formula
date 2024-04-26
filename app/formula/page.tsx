'use client';

import InputsWrapper from '@/app/ui/formula/inputs';
import { lusitana } from '@/app/ui/fonts';
import { useQuery } from '@tanstack/react-query';
import { fetchMockData } from '../services/api';
import { useProfileStore } from '../store/mockDataStore';
import InputFormula from '../ui/formula/formula';

export default function Page() {
  const { setMock } = useProfileStore((store) => store);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetchMockData().then((res) => {
        setMock(res.data);
        return res.data;
      }),
  });

  

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Formula
      </h1>
      <div className="flex gap-1 overflow-x-auto">
        <InputsWrapper />
      </div>
      <div className="flex p-16">
        <InputFormula />
      </div>
    </main>
  );
}

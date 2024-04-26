'use client';

import { VariableIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { useProfileStore } from '@/app/store/mockDataStore';

export default function InputsWrapper() {
  const { mockData } = useProfileStore((store) => store);

  return (
    <>
      {mockData
        ? mockData.map((data, index) => (
            <Card key={index} title={data.name} value={data.value} />
          ))
        : null}
    </>
  );
}

export function Card({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm min-w-max">
      <div className="flex p-4">
        <VariableIcon className="h-5 w-5 text-gray-700" />
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-2 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

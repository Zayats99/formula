'use client';

import { useProfileStore } from '@/app/store/mockDataStore';
import { Fragment, useEffect, useState } from 'react';

export default function InputFormula() {
  const { mockData } = useProfileStore((store) => store);

  const [state, setState] = useState<string[]>(['x', '+', 'y']);
  const [open, setOpen] = useState(false);

  const handleKeyDown = (e: any) => {
    console.log('e', e);
    
    if (e.keyCode === 32) {
      const value = e.target?.innerText?.trim();
      if (value === '') return;
      setState([...state, value]);
    }
  };

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  return (
    <div
      contentEditable
      className="flex w-full gap-1 rounded-md border px-2 py-4"
      onKeyDown={handleKeyDown}
    >
      <div></div>
      {state.map((val, index) => (
        <Fragment key={index}>
          <div className="w-max shrink-0 rounded bg-slate-500 px-0.5">
            {val}
          </div>
          <div></div>
        </Fragment>
      ))}
    </div>
  );
}

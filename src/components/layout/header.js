import React from 'react'
import { PiHandWavingLight } from 'react-icons/pi';

export default function Header({title, icon, name}) {
  return (
    <div>
      <header className="bg-slate-100 mx-5 flex items-center gap-2 text-sm p-3 rounded-xl my-8">
        {title}
        <span className="font-semibold">{name}</span>
        {icon ? <PiHandWavingLight className="font-bold text-lg " /> : null}
      </header>
    </div>
  );
}

import React from 'react';


export default function SearchBar({value, onChange, placeholder, wraperClass}) {

  return (
    <div spacing={2} className={`w-[80%] lg:w-[25%] xl:w-[25%] md:w-[45%]  ${wraperClass}`}>
        
        <input
        className='xl:w-[100%] w-[100%] h-[100%] pt-2 rounded-lg  pl-6 pb-2 border-[var(--c-dark-1)]'
        value={value}
        onKeyUp={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
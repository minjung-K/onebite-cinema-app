'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!search) return;

    router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <input
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeydown}
        placeholder="검색어를 입력하세요..."
      ></input>
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}

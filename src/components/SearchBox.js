import { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

const SearchBox = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Redirect to /search page with the search query
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form
      className="flex items-center justify-center gap-3 border-2 border-gray-500 rounded-lg w-[350px] h-[35px] px-2"
      onSubmit={handleSearch}
    >
      <MagnifyingGlass size={20} />
      <input
        type="text"
        placeholder="Search here...."
        className="border-none outline-none bg-transparent w-full text-base"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;

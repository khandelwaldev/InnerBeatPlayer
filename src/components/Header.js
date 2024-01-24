import { Gear } from "@phosphor-icons/react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div style={{zIndex: 999}} className="fixed top-0 left-0 w-full h-[55px] bg-black/70 backdrop-blur-sm border-b-2 border-gray-700 flex items-center justify-between px-5">
      {/** Logo */}
      <div className="flex items-center gap-3">
        <img
          src={`https://innerbeat.vercel.app/logo.svg`}
          width={27}
          height={27}
          alt="Logo"
        />
        <h1 className="text-2xl font-semibold">InnerBeat</h1>
      </div>

      {/** Search Box and Others */}
      <div className="flex items-center gap-5">
        <SearchBox />
        <div>
          <button>
            <Gear size={27} className="hover:animate-spin" />
          </button>
        </div>
      </div>

      {/** */}
    </div>
  );
}

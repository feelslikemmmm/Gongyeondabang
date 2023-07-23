import { Link } from 'react-router-dom';
import useCulturesQuery from '../hooks/queries/useCulturesQuery';

const Navbar = () => {
  const { data } = useCulturesQuery();

  console.log(data);
  return (
    <header className="m-auto justify-between flex items-center h-header px-10 lg:max-w-[980px]">
      <Link
        to="/"
        className="flex items-center text-sm md:text-xl font-bold text-[#555555] hover:text-[blue]"
      >
        <h1>공연다방</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold  text-sm md:text-[14px] text-[#555555]">
        <Link to="/products">
          <button className="py-[5.5px] px-[12px] rounded-[4px]">
            <span>소개</span>
          </button>
        </Link>
        <Link to="/cart">
          <button className="py-[5.5px] px-[12px] rounded-[4px]">
            <span>아티클</span>
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// If you use react-router later, swap <button> for <Link>.

const navItems = [
  { label: 'Food', to: '/food' },
  { label: 'Wellness', to: '/Wellness' },
  { label: 'Housing', to: '/housing' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Clothing', to: '/clothing' },
  { label: 'Education', to: '/education' },
];

// Reusable button style
const btnTab =
  'px-4 py-2 rounded border border-[#00df0f] text-[#00df0f] ' +
  'hover:bg-[#00df0f] hover:text-black transition ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00df0f]';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df0f]">NextDoorHub</h1>

      {/* Desktop buttons */}
      <ul className="hidden md:flex items-center gap-3">
        {navItems.map((item) => (
          <li key={item.label}>
            <button type="button" className={btnTab}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile icon */}
      <button onClick={handleNav} className="block md:hidden" aria-label="Toggle menu">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed top-0 ${
          nav ? 'left-0' : '-left-full'
        } w-[60%] h-full border-r border-r-gray-900 bg-[#000300] duration-500 z-50`}
      >
        <div className="m-4">
          <h1 className="text-3xl font-bold text-[#00df0f] mb-4">NextDoorHub</h1>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setNav(false)}
                  className={`w-full text-left ${btnTab}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

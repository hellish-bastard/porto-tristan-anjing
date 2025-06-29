import { Link } from 'react-router-dom';
import logo from '../assets/strangersLogo.png';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-6">
      {/* Logo */}
      <Link to="/">
          <img className="mx-2 w-16 h-16 cursor-pointer" src={logo} alt="logo" />
      </Link>

      {/* Dropdown */}
      <div className="flex items-center gap-4">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white">
              <FaBars className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>

          <AnimatePresence>
            {open && (
              <DropdownMenuContent
  align="end"
  sideOffset={8}
  className="bg-[#0f0f1a]/80 backdrop-blur-md text-white border border-white/10 rounded-md shadow-lg p-2"
>
  <DropdownMenuItem asChild>
    <Link
      to="/"
      className="hover:bg-white/10 px-2 py-1 rounded-md w-full"
    >
      Home
    </Link>
  </DropdownMenuItem>
  <DropdownMenuItem asChild>
    <Link
      to="/experience"
      className="hover:bg-white/10 px-2 py-1 rounded-md w-full"
    >
      Experience
    </Link>
  </DropdownMenuItem>
  <DropdownMenuItem asChild>
    <Link
      to="/projects"
      className="hover:bg-white/10 px-2 py-1 rounded-md w-full"
    >
      Projects
    </Link>
  </DropdownMenuItem>
</DropdownMenuContent>

            )}
          </AnimatePresence>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

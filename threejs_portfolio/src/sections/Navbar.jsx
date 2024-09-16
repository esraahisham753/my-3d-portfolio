const Navbar = () => {
  return (
    <header className="bg-black/90 fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mx-auto py-5 items-center text-white c-space">
          <a
            href="/"
            className="text-neutral-400 hover:text-white font-bold text-xl transition-colors"></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

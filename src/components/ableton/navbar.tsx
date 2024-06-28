export const Navbar = () => {
  return (
    <>
      <nav className="p-5 xl:px-10 flex justify-between bg-white border-b-2 border-b-gray-100">
        <div className="flex gap-8">
          <img src="/ableton.svg" alt="ableton logo" />
          <ul className="flex gap-8">
            <li>
              <a href="#">Live</a>
            </li>
            <li>
              <a href="#">Push</a>
            </li>
            <li>
              <a href="#">Note</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Packs</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li className="text-orange-400">
              <a href="#">More+</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-8">
            <li>
              <a href="#" className="text-lg text-blue-700 font-bold">
                Try Live 12 for free
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-bold">
                Log in or register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="p-5 xl:px-10 bg-white">
        <ul className="flex gap-5 text-sm">
          <li className="text-orange-400">
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Apprenticeships</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

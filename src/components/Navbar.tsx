import { Button } from "./ui/button";


const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <ul className="flex flex-row pl-14 items-center gap-8 pt-4 text-xl font-semibold">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact us</li>
            <Button className="absolute top-3 left-[31%]">Login</Button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

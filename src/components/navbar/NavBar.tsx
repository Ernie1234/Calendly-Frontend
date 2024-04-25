import Logo from "./Logo";
import MenuBar from "./MenuBar";
import NavigationBtn from "./NavigationBtn";
import NavigationLink from "./NavigationLink";

interface INavBar {
  inView: boolean;
}
function NavBar({ inView }: INavBar) {
  return (
    <nav
      className={`${inView ? "shadow-md" : "shadow-sm"} bg-white sticky top-0 p-2 z-[99999] border border-gray-50 border-y`}
    >
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="hidden lg:block">
          <NavigationLink />
        </div>
        <div className="flex justify-center items-center gap-4">
          <NavigationBtn />
          <div className="block lg:hidden">
            <MenuBar />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

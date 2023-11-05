import About from "../components/About";
import Budget from "../components/Budget";
import Contact from "../components/Contact";

const Header = () => {
  return (
    <div className="bg-blue-500 p-4">
      <ul className="flex justify-between items-center container mx-auto">
        <li>
          <a href="/" className="text-white text-2xl font-bold">
            Inicio
          </a>
        </li>
        <li>
          <About />
        </li>
        <li>
          <Budget />
        </li>
        <li>
          <Contact />
        </li>
      </ul>
    </div>
  );
};

export default Header;

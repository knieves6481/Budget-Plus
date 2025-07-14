import "../src/NavBar.css"
import { Link } from 'react-router-dom';

interface NavBarProps {
  brandName: string;
  navItems: string[];
  imageSrc?: string;   // optional image source prop
}

const NavBar: React.FC<NavBarProps> = ({ imageSrc, brandName, navItems,  }) => {
  return (
    <nav className="custom-navbar">
      <div className="nav-left">
        {imageSrc && <img src={imageSrc} alt="Logo" className="nav-logo" />}
        <span className="nav-brand">{brandName}</span>
      </div>
      <div className="nav-right">
        {navItems.map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase()}`} className="nav-link">
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

import css from "./Navbar.module.css";
import { RiotGamesLogo } from "../../assets/svg";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";

export default function Header() {
  return (
    <div className={css.header}>
      {/* logo side */}
      <div className={css.logo}>
        <Image src={Logo} alt="" height={100} width={250} />
        <span>ValShop</span>
      </div>
      {/* menu side */}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      {/* Right side */}
      <div className={css.rightside}>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="white" />
          <div className={css.badge}>1</div>
        </div>
      </div>
    </div>
  );
}

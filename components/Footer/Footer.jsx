import { UilGithub, UilInstagram } from "@iconscout/react-unicons";
import css from "./Footer.module.css";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
export default function Footer() {
  return (
    <>
      <div className={css.container}>
        <span>ALL RIGHT RESERVED</span>
        <div className={css.social}>
          <UilGithub size={45} color="white" />
          <UilInstagram size={45} color="white" />
        </div>
        <div className={css.logo}>
          {/* <Image src={Logo} alt="" width={100} height={100} /> */}
          <span>ValShop</span>
        </div>
      </div>
    </>
  );
}

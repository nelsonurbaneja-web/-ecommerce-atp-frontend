import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/images/ATPMOTOR.png";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <Image
          src={logo}
          alt="ATP MOTOR SPORT"
          width={130}
          height={33}
          placeholder="blur"
          title="ATP MOTOR SPORT"
          className="cursor_p"
        />
      </div>
    </Link>
  );
};

export default Logo;

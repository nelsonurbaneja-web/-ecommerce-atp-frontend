import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/images/ATPMOTOR_ORIGINAL.png";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <Image
          src={logo}
          alt="ATP MOTOR SPORT"
          width={120}
          height={55}
          placeholder="blur"
          title="ATP MOTOR SPORT"
          className="cursor_p"
        />
      </div>
    </Link>
  );
};

export default Logo;

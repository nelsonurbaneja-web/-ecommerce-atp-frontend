import Image from 'next/image'
import logo from 'public/assets/ATPMOTOR_ORIGINAL_SMALL.png'

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="logo"
      width={130}
      height={33}
      placeholder="blur"
      title="ATP MOTOR SPORT"
    />
  );
};

export default Logo;

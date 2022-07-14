import Image from "next/image"
import Link from "next/link"
import logo from "public/assets/ATPMOTOR_ORIGINAL_SMALL.png"

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="ATP MOTOR SPORT"
        width={130}
        height={33}
        placeholder="blur"
        title="ATP MOTOR SPORT"
        className="cursor_p"
      />
    </Link>
  )
}

export default Logo

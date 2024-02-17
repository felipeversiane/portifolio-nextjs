import Link from "next/link";
import Image from 'next/image'

interface Props {
    src: string;
    href:string;
  }
const  SocialButton: React.FC<Props> = ({
    src,
    href,
  }) => {
  return (
    <Link href={href} passHref className="bg-black p-2.5 border border-solid border-opacity-50 rounded-md shadow-md hover:bg-[#383737] transition-all duration-300 border-[#383737]">
        <Image src={src} alt="Social Icon" width={25} height={25} />
    </Link>
  );
};
export default SocialButton;
  
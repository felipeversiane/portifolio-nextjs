import Link from "next/link";

const FooterBottom = () => {
  return (
  <div className="flex items-center w-full justify-between mt-4 ">
        <div className="">
            <p className=" text-lg font-extralight">
            © 2024 - Felipe Fernandes Versiane. All rights reserved.
            </p>
        </div>
        <div>
        <p className="text-lg font-extralight">
            {[
                <span key="made-by" className="mr-2">Made by</span>,
                <Link key="next-js" href='/' className="mr-2 font-normal hover:underline transition-all duration-300">Next.js</Link>,
                <span key="and" className="mr-2">and</span>,
                <Link key="shadcn-ui" href='/' className="mr-2 font-normal hover:underline transition-all duration-300">Shadcn/UI</Link>
            ]}
        </p>
        </div>
  </div>
  );
};
export default FooterBottom;
  
import FooterBottom from "./FooterBottom";
import {ContactFull} from "./ContactFull";

export function Footer(){
  return (
  <div className="flex items-center w-full mt-20 justify-center flex-col py-4 px-10 text-white">
        <ContactFull/>
       <FooterBottom/>
  </div>
  );
};
  
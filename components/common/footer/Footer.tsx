import FooterBottom from "./FooterBottom";
import {ContactFull} from "./ContactFull";

export function Footer(){
  return (
  <div className="flex items-center w-full justify-center flex-col text-white">
        <ContactFull/>
       <FooterBottom/>
  </div>
  );
};
  
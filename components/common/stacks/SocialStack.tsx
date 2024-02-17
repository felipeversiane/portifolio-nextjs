import SocialButton from "../buttons/SocialButton";

const buttons: {src:string,href:string}[] = [
  {
    src:"/icons/social/social-linkedin.svg",
    href:"https://www.linkedin.com/in/felipeversiane/",
  },
  {
    src:"/icons/social/social-instagram.svg",
    href:"https://www.instagram.com/felipeffv_/",
  },
  {
    src:"/icons/social/social-github.svg",
    href:"https://github.com/felipeversiane",
  },
  {
    src:"/icons/social/social-spotify.svg",
    href:"https://open.spotify.com/user/iamlipe?si=1ca828be84d24316",
  },
  {
    src:"/icons/social/social-whatsapp.svg",
    href:"https://w.app/oWNQTn",
  },
]

const SocialStack = () => {
  return (
  <div className="flex items-center w-fit h-fit justify-center space-x-2">
    {buttons.map((button, index) => (
        <SocialButton
          key={index} 
          src={button.src}
          href={button.href}
        />
    ))}
  </div>
  );
};
export default SocialStack;
  
import SocialButton from "./SocialButton";

const buttons: { src: string; alt: string; height: number;width: number;href:string; }[] = [
    {
      src: "/icons/social-linkedin.svg",
      alt: "Linkedin Icon",
      height: 25,
      width: 25,
      href:"",
    },
    {
        src: "/icons/social-instagram.svg",
        alt: "Instagram Icon",
        height: 25,
        width: 25,
        href:"",
    },
    {
        src: "/icons/social-github.svg",
        alt: "Github Icon",
        height: 25,
        width: 25,
        href:"",
    },
    {
        src: "/icons/social-spotify.svg",
        alt: "Spotify Icon",
        height: 25,
        width: 25,
        href:"",
    },
    {
        src: "/icons/social-discord.svg",
        alt: "Discord Icon",
        height: 25,
        width: 30,
        href:"",
    },
    {
        src: "/icons/social-whatsapp.svg",
        alt: "Whatsapp Icon",
        height: 25,
        width: 25,
        href:"",
    },
  ]

const SocialStack = () => {
  return (
  <div className="flex items-center w-fit h-fit justify-center space-x-2">
    {buttons.map((button, index) => (
        <SocialButton
          key={index} 
          src={button.src}
          alt={button.alt}
          width={button.width}
          height={button.height}
          href={button.href}
        />
    ))}
  </div>
  );
};
export default SocialStack;
  
import { useTranslations } from "next-intl";
import Link from "next/link";

const FooterBottom = () => {
  const t = useTranslations('footer');
  return (
  <div className="flex items-center w-full justify-between mt-4 ">
        <div className="">
            <p className=" text-lg font-extralight">
            {t('copright')}
            </p>
        </div>
        <div>
        <p className="text-lg font-extralight">
            {[
                <span key="made-by" className="mr-2">{t('made_by.madeby')}</span>,
                <Link key="next-js" target="blank" href='https://nextjs.org' className="mr-2 font-normal hover:underline transition-all duration-300">{t('made_by.nextjs')}</Link>,
                <span key="and" className="mr-2">{t('made_by.and')}</span>,
                <Link key="shadcn-ui" target="blank" href='https://ui.shadcn.com' className="mr-2 font-normal hover:underline transition-all duration-300">{t('made_by.shadcn')}</Link>
            ]}
        </p>
        </div>
  </div>
  );
};
export default FooterBottom;
  
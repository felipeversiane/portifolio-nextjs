import HeroHome from '../../components/common/main/HeroHome'
import Projects from '@/components/common/main/Projects';
import MoreAboutMe from '@/components/common/main/MoreAboutMe';
import { Locale } from '@/config/i18n.config';


export default function Index({ params }: { params: { lang: Locale } }){
  return (
    <div>
      <HeroHome params={params}/>
      <Projects />
      <MoreAboutMe params={params} />
    </div>
  );
};
  
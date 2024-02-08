import HeroHome from '../../components/common/index/herohome/HeroHome'
import Projects from '@/components/common/index/projects/Projects';
import MoreAboutMe from '@/components/common/index/moreaboutme/MoreAboutMe';
import { Locale } from '@/config/i18n.config';



export default function Index({ params }: { params: { lang: Locale } }){
  return (
    <div>
      <HeroHome params={params}/>
      <Projects />
      <MoreAboutMe />
    </div>
  );
};
  
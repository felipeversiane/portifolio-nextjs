import Layout from '../layouts/layout';
import HeroHome from '../components/common/index/herohome/HeroHome'
import Projects from '@/components/common/index/projects/Projects';
import MoreAboutMe from '@/components/common/index/moreaboutme/MoreAboutMe';

const Index = () => {
  return (
  <Layout title='Felipe Versiane'>
    <HeroHome/>
    <Projects/>
    <MoreAboutMe/>
  </Layout>
  );
};
export default Index;
  
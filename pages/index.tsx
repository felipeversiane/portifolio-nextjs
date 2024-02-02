import Layout from '../layouts/layout';
import HeroHome from '../components/common/index/herohome/HeroHome'
import Projects from '@/components/common/index/projects/Projects';

const Index = () => {
  return (
  <Layout title='Felipe Versiane'>
    <HeroHome/>
    <Projects/>
  </Layout>
  );
};
export default Index;
  
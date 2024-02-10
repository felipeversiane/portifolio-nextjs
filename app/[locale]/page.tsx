'use client'
import HeroHome from '../../components/common/main/HeroHome'
import Projects from '@/components/common/main/Projects';
import MoreAboutMe from '@/components/common/main/MoreAboutMe';

export default function Index(){
  return (
    <div>
      <HeroHome/>
      <Projects />
      <MoreAboutMe/>
    </div>
  );
};
  
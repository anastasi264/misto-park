import { SiGumtree } from 'react-icons/si';
import { TbReportAnalytics } from 'react-icons/tb';
import { LiaFileContractSolid } from 'react-icons/lia';
import { GiBookshelf } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';

export const navLinks = [
  {
    id: 1,
    name: 'Про нас',
    path: '#about',
    icon: <SiGumtree />
  },
  {
    id: 2,
    name: 'Фінзвіти',
    path: '#reports',
    icon: <TbReportAnalytics />
  },
  {
    id: 3,
    name: 'Меморандуми',
    path: '#contracts',
    icon: <LiaFileContractSolid />
  },
  {
    id: 4,
    name: 'Програми',
    path: '#programs',
    icon: <GiBookshelf />
  },
  {
    id: 5,
    name: 'Наша команда',
    path: '#team',
    icon: <RiTeamFill />
  }
];

import { SimpleCard } from '../Cards/SimpleCard';
import './HomeSection.scss';
import { BsCheckCircleFill } from 'react-icons/bs';

export const HomeSection = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">
          Small Effort Make Big
          <span className="home__title-selected">Change.</span>
        </h1>
        <p className="home__subtitle">
          We seek out world-changers and difference-makers around the globe, and their unique
          purpose.
        </p>
      </div>
      <div className="home__block">
        <div className="home__image"></div>
        <div className="home__card home__card-volunteer">
          <SimpleCard
            imagePath="/images/home/01.jpg"
            icon={<BsCheckCircleFill className="text-[#009999]" />}
            text="Become Volunteer"
          />
        </div>
        <div className="home__card home__card-pig">
          <SimpleCard
            imagePath="/images/home/02.jpg"
            icon={<BsCheckCircleFill className="text-[#cc9966]" />}
            text="Quick Fundraise"
          />
        </div>
        <img src="/images/home/icon/dots.svg" alt="dots" className="home__dots" />
        <img src="/images/home/icon/vector.svg" alt="vector" className="home__vector" />
        {/* <div className="home__statistic statistic">
          <div className="statistic__block">
            <span className="statistic__number">12</span>
            <span className="statistic__text">Years of Experience</span>
          </div>
          <div className="statistic__block">
            <span className="statistic__number statistic__number-selected">14</span>
            <span className="statistic__text">Thousands Volunteers</span>
          </div>
          <div className="statistic__block">
            <span className="statistic__number">23</span>
            <span className="statistic__text">Worldwide Offices</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

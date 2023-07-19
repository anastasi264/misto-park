import { ReactNode } from 'react';
import './SimpleCard.scss';

type Props = {
  imagePath: string;
  icon: ReactNode;
  text: string;
};

export const SimpleCard: React.FC<Props> = ({ imagePath, icon, text }) => {
  return (
    <div className="card">
      <div className="card__image-block">
        <img src={imagePath} alt="img" className="card__image" />
        <span className="card__icon">{icon}</span>
      </div>
      <span className="card__text">{text}</span>
    </div>
  );
};

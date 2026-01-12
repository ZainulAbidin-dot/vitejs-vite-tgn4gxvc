import {imageBase64} from './image';
import './card.css';

interface CardProps {
  title?: string;
  imageId: number;
}

export const Card = ({
  title = 'Welcome to Our Sample Component',
}: CardProps) => {
  return (
    <div className="card-container">
      <img
        src={imageBase64}
        alt="Sample"
        className="card-image"
      />
      <h2 className="card-title">{title}</h2>
      <p className="card-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
        libero quam. Fusce efficitur, lectus ac commodo maximus, neque augue
        tincidunt tellus, id dictum odio eros ac nulla.
      </p>
      <p className="card-paragraph">
        Vivamus at urna sit amet justo auctor vestibulum ut nec nisl. Sed auctor
        augue eget libero tincidunt, ut dictum libero facilisis. Phasellus non
        libero at nisi eleifend tincidunt a eget ligula.
      </p>
    </div>
  );
};

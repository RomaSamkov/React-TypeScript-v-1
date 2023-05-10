import { FC } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  children?: React.ReactNode;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
  // const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid green" : "none",
        background: variant === CardVariant.primary ? "lightgreen" : "",
        borderRadius: "5px",
      }}
      onClick={() => onClick(0)}
    >
      {children}
    </div>
  );
};

export default Card;

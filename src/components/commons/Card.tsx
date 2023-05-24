import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <article
      className={clsx("group", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </article>
  );
};

export default Card;

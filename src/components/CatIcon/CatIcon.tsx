import catIcon from "../../assets/catIcon.svg";

type CatIconProps = {
  className?: string;
};

export default function CatIcon({ className }: CatIconProps) {
    return (
        <img
            src={catIcon}
            alt=""
            className={className}
            aria-hidden 
        />
    );
}
import {CSSProperties} from "react";
import "./style.css"

interface ButtonProps {
  label: string | number;
  className?: string;
  icon?: string;
  onClick?: (param:any) => void;
  bg?:string;
  type?: "primary" | "secondary" | "destroy" | "tertiary",
}

const Button = ({label, icon, className, onClick, bg, type}: ButtonProps) => {
  return (
    <button className={`button text-4-bold  ${type} ${className ? className:""}`} onClick={onClick} style={bg ? { '--bg': bg } as CSSProperties : undefined} >
      <span>{label}</span>
      {icon && <img src={icon} alt={`icon ${icon}`}/>}
    </button>
  );
};

export default Button;

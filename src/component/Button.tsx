import type { ButtonProps } from "../utils/Types";

const Button = ({ text, icon, style, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick} className={`rounded-full ${style}`}>
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Button;

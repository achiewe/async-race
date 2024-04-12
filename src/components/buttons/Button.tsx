import PropsButton from "../../types/PropsButton";
import "./Button.css";

function Button({
  className,
  text,
  disabled,
  handleClick,
}: PropsButton): JSX.Element {
  return (
    <button
      className={`${className} ${disabled ? "btn-disabled" : ""}`}
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;

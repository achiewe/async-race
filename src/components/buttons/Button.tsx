// Button.tsx
import PropsButton from "../../types/PropsButton";
import "./Button.css";

function Button({
  className,
  text,
  disabled,
  handleClick,
}: PropsButton): JSX.Element {
  function getButtonClass(className: string, disabled: boolean): string {
    return `${className} ${disabled ? "btnDisabled" : ""}`;
  }
  const buttonClass = getButtonClass(className, disabled);

  return (
    <button
      className={buttonClass}
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;

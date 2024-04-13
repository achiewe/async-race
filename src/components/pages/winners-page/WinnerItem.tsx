import PropsWinnerItem from "../../../types/PropsWinnerItem";
import CarImage from "../../car/CarImage";

function WinnerItem({
  number,
  color,
  name,
  winsAmount,
  bestTime,
}: PropsWinnerItem) {
  return (
    <li className="winItem">
      <div className="winContent winItemNumber">{number}</div>
      <div className="winContent winItemImage">
        <CarImage className="carSvg" color={color} />
      </div>
      <div className="winContent winItemName">{name}</div>
      <div className="winContent winItemQuantity">{winsAmount}</div>
      <div className="winContent winItemTime">{bestTime}</div>
    </li>
  );
}

export default WinnerItem;

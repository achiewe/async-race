import Button from "../buttons/button";

export default function CreateCarItem() {
  const onCreateCar = () => {};
  return (
    <div className="settings-container">
      <div className="settings-content">
        <div className="button-group">
          <p className="button-group-title">Create: </p>
          <input className="input-text" type="text" />
          <input className="input-color" type="color" />
        </div>
        <Button
          className="button btn-create"
          text="Create"
          disabled={false}
          handleClick={onCreateCar}
        />
      </div>
    </div>
  );
}

import Button from "../buttons/button";

function RaceSettings() {
  return (
    <>
      <div className="settings-container">
        <div className="settings-content">
          <Button
            className="button btn-start-race"
            text="Start race!"
            disabled
            handleClick={() => {
              console.log("click");
            }}
          />
          <Button
            className="button btn-stop-race"
            text="Reset"
            disabled
            handleClick={() => {
              console.log("click");
            }}
          />
          <Button
            className="button btn-generate"
            text="Generate cars"
            disabled
            handleClick={() => {
              console.log("click");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default RaceSettings;

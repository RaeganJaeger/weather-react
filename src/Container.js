import Weather from "./Weather";

export default function Container() {
  return (
    <div className="boundary" id="box-color">
      <br />
      <Weather defaultCity="Minneapolis" />
    </div>
  );
}

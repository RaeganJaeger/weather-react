import Weather from "./Weather";

export default function Container() {
  return (
    <div className="boundary">
      <Weather defaultCity="Minneapolis" />
    </div>
  );
}

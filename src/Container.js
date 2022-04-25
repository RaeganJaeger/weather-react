import Search from "./Search";
import Weather from "./Weather";

export default function Container() {
  return (
    <div className="boundary" id="box-color">
      <Search />
      <br />
      <Weather defaultCity="Minneapolis" />
    </div>
  );
}

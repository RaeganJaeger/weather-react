import Search from "./Search";
import Header from "./Header";

export default function Container() {
  return (
    <div className="boundary" id="box-color">
      <Search />
      <br /> <Header />
    </div>
  );
}

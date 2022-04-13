export default function Search() {
  return (
    <div className="search">
      <form id="search-form">
        <input type="city" id="city-input" placeholder="Enter a city..." />
        <input type="submit" value="Submit" hidden />
        <button className="icon-button">
          <i className="fas fa-search ibutton"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-location-arrow ibutton" id="location-button"></i>
        </button>
      </form>
    </div>
  );
}

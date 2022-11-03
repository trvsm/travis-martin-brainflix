import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo"></div>
        <div className="header__right">
          <div className="header__search">
            <form className="header__form" action="/">
              <label className="header__label" htmlFor="search">
                <input
                  className="header__search-input"
                  type="text"
                  id="search"
                  placeholder="search"
                />
              </label>
            </form>
            <div className="header__profile-pic header__profile-pic--small"></div>
          </div>
          <div className="header__upload"><button className="header__button">Upload</button>
          <div className="header__profile-pic header__profile-pic--med"></div></div>
        </div>
      </header>
    </>
  );
};

export default Header;

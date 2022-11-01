import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">BrainFlix</div>
        <div className="header__right">
          <form className="header__form" action="/">
            <label htmlFor="search">
              <input
                className="header__search-input"
                type="text"
                id="search"
                placeholder="search"
              />
            </label>
          </form>
          <div className="header__profile-pic header__profile-pic--small"></div>
          <button className="header__button">Upload</button>
          <div className="header__profile-pic header__profile-pic--med"></div>
        </div>
      </header>
    </>
  );
};

export default Header;

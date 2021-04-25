import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">Vintage.Cars</div>
        <div className="centerr">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="iconn">
          <SearchIcon />
          <PersonIcon />
        </div>
      </div>
    </header>
  );
}

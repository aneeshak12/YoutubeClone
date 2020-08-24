import React from "react";
import "./topbar.css";
const Topbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand pt-2" href="javascript:">
          <i className="fa fa-bars px-2" aria-hidden="true"></i>
          <i
            className="fa fa-youtube-play pl-4 pr-2 pt-1 youtube-button"
            aria-hidden="true"
          ></i>
          YouTube
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <form class="form-inline my-4 my-lg-0">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto font-right">
            <li className="nav-item active">
              <a className="nav-link" href="javascript:">
                <i className="fa fa-video-camera px-2" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:">
                <i className="fa fa-th px-2" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:">
                <i class="fa fa-bell px-2 " aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/10.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <div class="navcontainer">
        <div class="is-flex is-horizontal-center">
          <img src={logo} alt="Kaldi" style={{ width: "200px" }} />
        </div>
        <nav class="navmenu">
          <div class="level is-mobile">
            <div class="level-item has-text-centered is-home">
              <div class="homeitem">Home</div>
            </div>
            <div class="level-item has-text-centered">
              <div>Music</div>
            </div>
            <div class="level-item has-text-centered">
              <div>About</div>
            </div>
            <div class="level-item has-text-centered is-shows">
              <div>Shows</div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;

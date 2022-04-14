import PropTypes from "prop-types";
import React, { useState } from "react";
import { Menu } from "./Menu";
import Link from "next/link";

function Header(props) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible ? (
        <Menu setVisible={setVisible} onClick={() => setVisible(false)} />
      ) : null}

      <div
        className={`w-full h-14 fixed flex justify-between z-40 p-3 px-10 items-center ${
          props.navActive && "bg-gray-800 shadow"
        }`}
      >
        <Link passHref href="/">
          <p className="uppercase text-2xl font-bold text-white drop-shadow cursor-pointer">
            Hype <span className="text-yellow-300">Escape room</span>
          </p>
        </Link>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => setVisible(true)}
        >
          <div className="w-7 h-1 bg-white shadow" />
          <div className="w-5 h-1 bg-white mt-1 shadow" />
          <div className="w-7 h-1 bg-white mt-1 shadow" />
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  navActive: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: `Hype Escape room`,
  navActive: false,
};

export default Header;

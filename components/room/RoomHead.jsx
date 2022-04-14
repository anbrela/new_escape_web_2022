import Head from "next/head";
import * as PropTypes from "prop-types";
import React from "react";

export const RoomHead = (props) => {
  return (
    <Head>
      <title>{props.name} | Hype Escape Room</title>
      <meta name="description" content={props.description} />
      <script
        id="js-turitop"
        src="https://app.turitop.com/js/load-turitop.min.js"
        data-company="H274"
        data-ga="no"
        data-buttoncolor="green"
        data-afftag="ttafid"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

RoomHead.propTypes = { room: PropTypes.any, description: PropTypes.string };

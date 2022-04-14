import Head from "next/head";
import React from "react";
import * as PropTypes from "prop-types";

export const CustomHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title} | Hype Escape Room</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

CustomHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

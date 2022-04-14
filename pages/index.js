import React, { useEffect, useRef, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import logo from "../images/logo.svg";
import styles from "../styles/Home.module.css";
import { Background } from "../components/Home/Background";
import { About } from "../components/Home/About";
import { History } from "../components/Home/History";
import { Rooms } from "../components/Home/Rooms";
import { Gift } from "../components/Home/Gift";
import { Faq } from "../components/Home/Faq";

import Header from "../components/Home/Header";
import { Footer } from "../components/Home/Footer";
import { Menu } from "../components/Home/Menu";
import { CustomHead } from "../components/CustomHead";

export default function Home() {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 820) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden relative">
      <CustomHead
        title="El primer escape room de Lugo"
        description="Hype Escape Room Lugo es la primera sala de la ciudad. Forma tu equipo y adéntrate en el mundo de los escape rooms! Da lo mejor de ti este 2021 ⚠️ 100% recomendable"
      />

      <main className="flex flex-col">
        <Header navActive={navActive} />
        <Background />
        <About />
        <History />
        <Rooms />
        <Gift />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

import React, { useEffect, useState } from "react";

export const Countdown = () => {
  const [days, setDays] = useState(0);
  const today = new Date();

  useEffect(() => {
    const endDate = new Date("October 17, 2022 03:24:00");

    const difference = Math.abs(endDate - today);
    setDays(difference / (1000 * 3600 * 24));
  }, [today]);

  return (
    <div className="flex text-white italic space-x-3 text-lg">
      <p className="">
        Faltan <span className="text-green-300">{Math.round(days)}</span> días
      </p>
    </div>
  );
};

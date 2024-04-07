import mailAnimation from "../imges/mailAnimation.json";
import Lottie from "react-lottie";

import React from "react";

export const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mailAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <Lottie options={defaultOptions} height={350} width={350} />
    </div>
  );
};

export default Animation;

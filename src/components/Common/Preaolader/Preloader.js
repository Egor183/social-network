import loaderImage from "../../../assets/images/Rolling.svg";
import React from "react";
import s from "../Preaolader/Preloader.module.css"

let Preloader = () => {
  return (
    <div className={s.preloaderContainer}>
      <img className={s.preloader} alt="loader" src={loaderImage} />{" "}
    </div>
  );
};

export default Preloader;

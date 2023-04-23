import React, { useEffect } from "react";
import styles from "@/styles/glass.module.css";

const Glass = () => {
  useEffect(() => {
    const video = document.getElementById("video") as HTMLVideoElement;
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-center w-screen">
      <button className={styles.glass}>
        <video
          autoPlay
          id="video"
          className="absolute top-0 left-0 rounded-md scale-[3] -scale-x-100 blur-[1px] saturate-50 brightness-90"
        />
      </button>
    </div>
  );
};

export default Glass;

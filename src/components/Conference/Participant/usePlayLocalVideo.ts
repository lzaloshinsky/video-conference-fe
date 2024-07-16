import { useEffect, useRef } from "react";

const usePlayLocalVideo = (isCurrent: boolean) => {
  // This is not really behaving, added it just fro having fun...
  const videoRef = useRef();

  useEffect(() => {
    if (isCurrent) {
      // TODO track stream

      //@ts-ignore
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
          //@ts-ignore
          videoRef.current.srcObject = currentStream;
          //@ts-ignore
          videoRef.current.muted = true;
        });
    }
  }, [isCurrent]);

  if (!isCurrent) return;

  return videoRef;
};

export default usePlayLocalVideo;

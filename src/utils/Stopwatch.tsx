import { useEffect, useState } from "react";

const formatTime = (time: number): string => {
  const seconds = Math.floor(time % 60);
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);

  const hoursStringified = (hours < 10 ? "0" : "") + hours;
  const minutesStringified = (minutes < 10 ? "0" : "") + minutes;
  const secondsStringified = (seconds < 10 ? "0" : "") + seconds;

  return `${hoursStringified}:${minutesStringified}:${secondsStringified}`;
};

const Stopwatch = ({
  initialTimeInSeconds = 0,
}: {
  initialTimeInSeconds?: number;
}) => {
  const [timeElapsed, setTimeElapsed] = useState(initialTimeInSeconds);

  useEffect(() => {
    const intervalId = setInterval(
      () => setTimeElapsed((prevCount) => prevCount + 1),
      1000
    );

    return () => clearInterval(intervalId); // Clear after unmounting
  }, []);

  return <>{formatTime(timeElapsed)}</>;
};

export default Stopwatch;

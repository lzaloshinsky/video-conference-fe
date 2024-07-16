import { useMemo } from "react";
import { put } from "../../utils/fetch";
import { Button, Chip } from "@mui/material";
import Stopwatch from "../../utils/Stopwatch";
import {
  Mic as MicIcon,
  PresentToAll as ShareIcon,
  Videocam as VideoCameraIcon,
} from "@mui/icons-material";

const layoutHack = <div />;

type Props = {
  meetingId: number;
  startDate: string;
  currentParticipantId?: number;
};

const BottomSection = ({
  startDate,
  meetingId,
  currentParticipantId,
}: Props) => {
  const initialStopwatchTimeInSeconds = useMemo(
    () => (new Date().getTime() - new Date(startDate).getTime()) / 1000,
    [startDate]
  );

  return (
    <div className="flex justify-between h-16 w-full items-center">
      {layoutHack}

      <div className="flex gap-3">
        <Button
          variant="contained"
          onClick={() =>
            put(`meeting/${meetingId}/user/${currentParticipantId}/camera`, {})
          }
        >
          <VideoCameraIcon />
          מצלמה
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            put(
              `meeting/${meetingId}/user/${currentParticipantId}/microphone`,
              {}
            )
          }
        >
          <MicIcon />
          מיקרופון
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            put(`meeting/${meetingId}/user/${currentParticipantId}/share`, {})
          }
        >
          <ShareIcon />
          שיתוף
        </Button>
      </div>

      <div className="flex gap-3 items-center">
        <div className="text-white">
          <Stopwatch initialTimeInSeconds={initialStopwatchTimeInSeconds} />
        </div>

        <Chip label="Live" color="error" />
      </div>
    </div>
  );
};

export default BottomSection;

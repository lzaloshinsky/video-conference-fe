import Participant from "./Participant";
import { Tooltip } from "@mui/material";
import { type Participant as ParticipantType } from "../../types";
import { CloseFullscreen as CloseFullscreenIcon } from "@mui/icons-material";
import BottomSection from "./BottomSection";

const CloseFullscreenToolTip = ({ onClick }: { onClick: () => void }) => (
  <Tooltip
    title="צא ממסך מלא"
    onClick={onClick}
    className="text-white cursor-pointer"
  >
    <CloseFullscreenIcon />
  </Tooltip>
);

type Props = {
  committee: string;
  startDate: string;
  meetingId: number;
  isFullScreen: boolean;
  currentParticipantId?: number;
  judges: Array<ParticipantType>;
  parties: Array<ParticipantType>;
  onCloseFullscreenClick: () => void;
};

const Conference = ({
  judges,
  parties,
  committee,
  startDate,
  meetingId,
  isFullScreen,
  currentParticipantId,
  onCloseFullscreenClick,
}: Props) => (
  <div className="flex flex-col justify-end w-full h-full gap-3 p-3 rounded-md bg-blue-950">
    {isFullScreen && (
      <CloseFullscreenToolTip onClick={onCloseFullscreenClick} />
    )}

    <div className="flex flex-col justify-center h-full gap-3">
      <div className="flex justify-center gap-3">
        {judges.map((judge) => (
          <Participant
            committee={committee}
            participant={{ ...judge, isJudge: true }}
          />
        ))}
      </div>

      <div className="flex justify-center gap-3">
        {parties.map((party) => (
          // TODO committee is extra here
          <Participant committee={committee} participant={party} />
        ))}
      </div>
    </div>

    <BottomSection
      meetingId={meetingId}
      startDate={startDate}
      currentParticipantId={currentParticipantId}
    />
  </div>
);

export default Conference;

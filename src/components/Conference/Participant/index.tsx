import { Chip } from "@mui/material";
import BottomSection from "./BottomSection";
import { Participant as ParticipantType } from "../../../types";

const Participant = ({
  committee,
  participant,
}: {
  committee: string;
  participant: ParticipantType;
}) => {
  const { isCurrent, role, isJudge } = participant;

  // const localVideo = usePlayLocalVideo(isCurrent);

  const roleWithMaybePrefix = isJudge ? role : `צד ${role}`;

  const chipLabel = !isCurrent
    ? roleWithMaybePrefix
    : `אני - ${roleWithMaybePrefix}`;

  return (
    <div className="relative w-full h-full max-w-2xl">
      <div className="absolute z-20 top-3 right-3">
        <Chip label={chipLabel} color={isCurrent ? "primary" : "secondary"} />
      </div>

      <video
        autoPlay
        playsInline
        // ref={localVideo as any}
        className="z-10 w-full h-full bg-gray-400 rounded-md"
      />

      <div className="absolute bottom-0 z-20 w-full">
        <BottomSection
          participant={participant}
          roleDescription={isJudge ? committee : roleWithMaybePrefix}
        />
      </div>
    </div>
  );
};

export default Participant;

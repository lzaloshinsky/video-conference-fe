import { Gender, type Participant } from "../../../types";
import {
  Mic as MicIcon,
  MicOffOutlined as MicOffIcon,
} from "@mui/icons-material";

const judgePrefixBasedOnGender = {
  [Gender.MALE]: "כבוד השופט",
  [Gender.FEMALE]: "כבוד השופטת",
};

const BottomSection = ({
  participant,
  roleDescription,
}: {
  roleDescription: string;
  participant: Participant;
}) => {
  const IsraelLogo = <>Israel Logo</>;
  const { isJudge, name, gender, isMuted } = participant;

  const nameWithMaybePrefix = !isJudge
    ? name
    : `${judgePrefixBasedOnGender[gender]} ${name}`;

  return (
    <div className="bg-slate-800 bg-opacity-40 rounded-md h-12 flex justify-between text-white items-center p-3">
      <div className="flex gap-3">
        {isJudge && IsraelLogo}

        <div className="flex flex-col gap-1 text-xs">
          <span className="font-bold text-blue-500">{roleDescription}</span>

          <span>{nameWithMaybePrefix}</span>
        </div>
      </div>

      {isMuted ? <MicOffIcon /> : <MicIcon />}
    </div>
  );
};

export default BottomSection;

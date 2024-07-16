import { useState } from "react";
import { Tooltip } from "@mui/material";
import SecurityPopover from "./SecurityPopover";
import {
  OpenInFull as FullScreenIcon,
  ShieldOutlined as SecurityIcon,
} from "@mui/icons-material";

const Recording = () => (
  <span className="truncate inline-flex items-center align-middle py-0.5 w-max rounded-full text-xs gap-1">
    <span className="rounded-full pl-0.25 pt-0.25 h-1.5 w-1.5 mr-2 justify-center bg-red-500" />
    מקליט
  </span>
);

type Props = {
  topic: string;
  committee: string;
  caseNumber: string;
  isRecording: boolean;
  isFullScreen: boolean;
  onShowFullScreen: () => void;
};

const Header = ({
  topic,
  committee,
  caseNumber,
  isRecording,
  onShowFullScreen,
}: Props) => {
  const [popoverAnchorEl, setPopoverAnchorEL] = useState(null);

  const title = `משרד המשפטים, ${committee} - ${topic}`;

  return (
    <>
      <div className="flex items-center justify-between py-4 px-4 text-white sticky top-0 left-0 ">
        <div className="grid gap-3">
          <div className="font-bold text-sm">{title}</div>
          <div className="text-xs">תיק מספר {caseNumber}</div>
        </div>

        <div className="flex gap-3 items-center">
          <Tooltip
            title="מסך מלא"
            onClick={onShowFullScreen}
            className="cursor-pointer"
          >
            <FullScreenIcon />
          </Tooltip>
          <Tooltip
            title="אבטחה"
            className="cursor-pointer"
            onClick={(event: any) => setPopoverAnchorEL(event.currentTarget)}
          >
            <SecurityIcon />
          </Tooltip>

          {isRecording && <Recording />}
        </div>
      </div>

      <SecurityPopover
        anchorEl={popoverAnchorEl}
        onClose={() => setPopoverAnchorEL(null)}
      />
    </>
  );
};

export default Header;

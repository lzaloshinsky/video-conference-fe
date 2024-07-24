import SidebarItem from "./Item";
import { Badge, Button } from "@mui/material";
import { put } from "../../utils/fetch";
import {
  GavelOutlined as GavelIcon,
  PeopleAltOutlined as PeopleIcon,
  SettingsOutlined as SettingsIcon,
  AdminPanelSettingsOutlined as AdminPanelSettingsIcon,
} from "@mui/icons-material";

const SideBar = ({
  meetingId,
  participantsCount,
}: {
  meetingId: number;
  participantsCount: number;
}) => (
  <div className="relative flex flex-col items-center justify-between w-40 h-full py-4 text-white border-t-2 border-b-2 border-l-2 bg-sky-950 border-emerald-800 rounded-l-3xl">
    <div className="h-18">Israel Logo</div>
    {/* TODO add the twisted border as an overlay svg */}

    <div className="grid gap-6">
      <SidebarItem
        label={"אנשים"}
        onClick={() => alert("אנשים")}
        icon={
          <Badge badgeContent={participantsCount}>
            <PeopleIcon />
          </Badge>
        }
      />
      <SidebarItem
        icon={<GavelIcon />}
        label={"פרטי דיון"}
        onClick={() => alert("פרטי דיון")}
      />
      <SidebarItem
        label={"מנהל דיון"}
        icon={<AdminPanelSettingsIcon />}
        onClick={() => alert("מנהל דיון")}
      />
      <SidebarItem
        label={"הגדרות"}
        icon={<SettingsIcon />}
        onClick={() => alert("הגדרות")}
      />
    </div>

    <Button variant="contained">
      <div
        className="font-bold text-red-500"
        onClick={() => put(`meeting/${meetingId}/end`, {})}
      >
        יציאה מהדיון
      </div>
    </Button>
  </div>
);

export default SideBar;

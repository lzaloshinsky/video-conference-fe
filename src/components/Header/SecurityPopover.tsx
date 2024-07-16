import { Popover } from "@mui/material";

const SecurityPopover = ({
  onClose,
  anchorEl,
}: {
  anchorEl: any;
  onClose: () => void;
}) => (
  <Popover
    open={!!anchorEl}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
  >
    <div className="w-32 p-3">מידע על אבטחה</div>
  </Popover>
);

export default SecurityPopover;

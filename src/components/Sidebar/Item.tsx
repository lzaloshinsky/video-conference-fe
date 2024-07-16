type Props = {
  onClick: () => void;
  icon: JSX.Element;
  label: string;
};

const SidebarItem = ({ icon, label, onClick }: Props) => (
  <div
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-1 text-xs text-white cursor-pointer"
  >
    {icon}
    {label}
  </div>
);

export default SidebarItem;

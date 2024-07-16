import { Gender } from "./types";

const data = {
  id: 1,
  isRecording: true,
  caseNumber: "64949-02-22",
  topic: "השתתפות בהוצאות קבועות",
  committee: "ועדת ערר לענייני קורונה",
  startDate: "2024-07-16T19:05:31.662Z",
  judges: [
    {
      id: 1,
      role: "דובר",
      isMuted: false,
      isCurrent: false,
      stream: undefined,
      gender: Gender.FEMALE,
      name: "ישראלה ישראלוף",
    },
  ],
  parties: [
    {
      id: 2,
      role: "עורר",
      isMuted: true,
      isCurrent: true,
      gender: Gender.MALE,
      name: "עו״ד קובי יעקובי",
    },
    {
      id: 3,
      role: "משיב",
      isMuted: true,
      isCurrent: false,
      stream: undefined,
      gender: Gender.FEMALE,
      name: "עו״ד שושנה שושני",
    },
  ],
};

export default data;

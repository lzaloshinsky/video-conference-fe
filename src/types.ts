export enum Gender {
  MALE = "M",
  FEMALE = "F",
}

export type Participant = {
  id: number;
  stream?: any;
  role: string;
  name: string;
  gender: Gender;
  isMuted: boolean;
  isJudge?: boolean;
  isCurrent: boolean;
};

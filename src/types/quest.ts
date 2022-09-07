export type Quest = {
  id: number;
  title: string;
  description: string;
  previewImg: string;
  coverImg: string;
  type: string;
  level: string;
  peopleCount: [number, number];
  duration: number;
}

export type TQuestLevel = {
  [level: string]: string
}

export type TQuestType = {
  [type: string]: string
}

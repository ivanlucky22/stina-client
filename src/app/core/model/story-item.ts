export interface StoryItem {
  data: any;
  type: StoryItemType;
}

export enum StoryItemType {
  TEXT,
  IMAGE,
  LABELS
}

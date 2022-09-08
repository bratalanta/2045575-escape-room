import { FilterType } from 'const';

export type Filter = typeof FilterType[keyof typeof FilterType];

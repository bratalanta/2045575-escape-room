import { TQuestLevel, TQuestType } from 'types/quest';

enum AppRoute {
  Home = '/',
  Quest = '/quest/:id',
  Contacts = '/contacts',
  NotFound = '*'
}

enum APIRoute {
  Quests = '/quests',
  Orders = '/orders'
}

const QuestLevel: TQuestLevel = {
  'hard': 'сложный',
  'medium': 'средний',
  'easy': 'легкий'
} as const;

const QuestType: TQuestType = {
  'adventures': 'приключения',
  'horror': 'ужасы',
  'detective': 'детектив',
  'mystic': 'мистика',
  'sci-fi': 'sci-fi',
} as const;

const FilterType = {
  All: 'Все квесты',
  Adventures: 'Приключения',
  Horror: 'Ужасы',
  Detective: 'Детектив',
  Mystic: 'Мистика',
  Scifi: 'Sci-fi',
} as const;

enum NameSpace {
  Quests = 'quests',
  App = 'app',
  Orders = 'orders'
}

enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}

const REQUIRED_PHONE_LENGTH = 10;

export {
  NameSpace,
  AppRoute,
  QuestLevel,
  QuestType,
  APIRoute,
  LoadingStatus,
  REQUIRED_PHONE_LENGTH,
  FilterType
}

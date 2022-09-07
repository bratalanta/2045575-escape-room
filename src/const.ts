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
  'sci-fi': 'sci-fi'
} as const;

enum NameSpace {
  Quests = 'quests',
  App = 'app',
}

enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}

export {
  NameSpace,
  AppRoute,
  QuestLevel,
  QuestType,
  APIRoute,
  LoadingStatus
}

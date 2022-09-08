import { NameSpace } from 'const';
import { State } from 'types/state';

const selectCurrentFilter = (state: State) => state[NameSpace.App].currentFilter;
const selectActiveHeaderLink = (state: State) => state[NameSpace.App].activeHeaderLink;

export {
  selectActiveHeaderLink,
  selectCurrentFilter
}

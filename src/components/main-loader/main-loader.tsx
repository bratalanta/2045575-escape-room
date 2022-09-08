import { appTheme } from 'components/app/common';
import { ClipLoader } from 'react-spinners';
import * as S from './main-loader.styled';

const SMainLoader = {
  Size: 150,
  Color: appTheme.color.carrotOrange
} as const;

const MainLoader = () => (
  <S.Main>
    <ClipLoader
      size={SMainLoader.Size}
      color={SMainLoader.Color}
    />
  </S.Main>
)


export default MainLoader;

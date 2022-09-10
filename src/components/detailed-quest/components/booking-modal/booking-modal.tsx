import * as S from './booking-modal.styled';
import { useEffect } from 'react';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useAppDispatch, useAppSelector } from 'hooks';
import { orderLoadingStatusSelector } from 'store/orders-slice/selectors';
import { resetOrderLoadingStatus } from 'store/orders-slice/orders-slice';
import BookingForm from '../booking-form/booking-form';

type BookingModalProps = {
  onModalCloseBtnClick: () => void;
  peopleCount: [number, number];
}

const BookingModal = ({onModalCloseBtnClick, peopleCount}: BookingModalProps) => {
  const dispatch = useAppDispatch();
  const {isOrderStatusFulfilled} = useAppSelector(orderLoadingStatusSelector);

  useEffect(() => {
    if (isOrderStatusFulfilled) {
      onModalCloseBtnClick();
      dispatch(resetOrderLoadingStatus());
    }
  }, [isOrderStatusFulfilled]);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onModalCloseBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <BookingForm peopleCount={peopleCount}/>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;

import * as S from './booking-modal.styled';
import React, { FormEvent } from 'react';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useAppDispatch, useAppSelector } from 'hooks';
import { postOrderAction } from 'store/api-actions';
import { useForm } from "react-hook-form";
import { Order } from 'types/order';
import { REQUIRED_PHONE_LENGTH } from 'const';
import { orderLoadingStatusSelector } from 'store/orders-slice/selectors';

enum InputErrorMessage {
  Default = 'Поле обязательно к заполнению',
  PhoneLength = 'Контактный телефон должен состоять из 10 цифр',
  PhonePattern = 'Контактный телефон должен содержать только цифры',
  MinPeopleCount = 'Минимальное количество участников:',
  MaxPeopleCount = 'Максимальное количество участников:',
}

type BookingModalProps = {
  onModalCloseBtnClick: () => void;
  peopleCount: [number, number];
}

const BookingModal = ({onModalCloseBtnClick, peopleCount}: BookingModalProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Order>({
    mode: 'all'
  });

  const dispatch = useAppDispatch();
  const {
    isOrderStatusPending,
    isOrderStatusRejected,
    isOrderStatusFulfilled
  } = useAppSelector(orderLoadingStatusSelector);
  const [minPeopleCount, maxPeopleCount] = peopleCount;

  const onSubmit = (data: Order) => {
    dispatch(postOrderAction(data))

    if (isOrderStatusFulfilled) {
      onModalCloseBtnClick();
    }
  }

  return (
    <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={onModalCloseBtnClick}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        onSubmit={handleSubmit(onSubmit)}
        id="booking-form"
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            placeholder="Имя"
            {...register('name', {
              required: InputErrorMessage.Default
            })}
          />
          <S.InputErrorContainer>
            <S.InputErrorMessage>
              {errors?.name?.message}
            </S.InputErrorMessage>
          </S.InputErrorContainer>
        </S.BookingField>

        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            placeholder="Телефон"
            {...register('phone', {
              required: InputErrorMessage.Default,
              pattern: {
                value: /^[0-9]+$/,
                message: InputErrorMessage.PhonePattern
              },
              maxLength: {
                value: REQUIRED_PHONE_LENGTH,
                message: InputErrorMessage.PhoneLength
              },
              minLength: {
                value: REQUIRED_PHONE_LENGTH,
                message: InputErrorMessage.PhoneLength
              }
            })}
          />
          <S.InputErrorContainer>
            <S.InputErrorMessage>
              {errors?.phone?.message}
            </S.InputErrorMessage>
          </S.InputErrorContainer>
        </S.BookingField>

        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            placeholder="Количество участников"
            {...register('peopleCount', {
              required: InputErrorMessage.Default,
              valueAsNumber: true,
              min: {
                value: minPeopleCount,
                message: `${InputErrorMessage.MinPeopleCount} ${minPeopleCount}`,
              },
              max: {
                value: maxPeopleCount,
                message: `${InputErrorMessage.MaxPeopleCount} ${maxPeopleCount}`,
              }
            })}
          />
          <S.InputErrorContainer>
            <S.InputErrorMessage>
              {errors?.peopleCount?.message}
            </S.InputErrorMessage>
          </S.InputErrorContainer>
        </S.BookingField>

        <S.BookingSubmit type="submit" disabled={isOrderStatusPending}>
          {isOrderStatusPending ? 'Отправляем...' : 'Отправить заявку'}
        </S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            {...register('isLegal', {
              required: true
            })}
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>

      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
  );
};

export default BookingModal;

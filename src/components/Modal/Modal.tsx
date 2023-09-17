import { FC } from "react";

import Select from "../custom/Select/Select";

import { ReactComponent as UntitledIcon } from "../../assets/icons/Untitled.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/Close.svg";
import { ReactComponent as FileIcon } from "../../assets/icons/File.svg";

import styles from "./Modal.module.scss";

interface IModalProps {
  setIsOpen: any;
}

const Modal: FC<IModalProps> = ({ setIsOpen }) => {
  const handleModalClick = (event: any) => {
    event.stopPropagation();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSaveData = () => {
    setIsOpen(false);
    setTimeout(() => {
      alert("Сохранено");
    }, 100);
  };

  return (
    <div className={styles.wrapper} onClick={handleModalClick}>
      <div className={styles.title__block}>
        <span className={styles.title}>
          Коммерческое предложение поставщика
        </span>
        <CloseIcon className={styles.close__icon} onClick={handleCloseModal} />
      </div>
      <span className={styles.subtitle}>
        Выберите товары на которые планируете предоставить предложения
      </span>
      <div className={styles.block}>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>ИНН</span>
          <div className={styles.input__btns_block}>
            <input
              className={styles.filter__input}
              placeholder="Введите ИНН"
              type="text"
            />
            <div className={styles.file__btns_block}>
              <div className={styles.button}>
                <UntitledIcon className={styles.first__file} />
                <UntitledIcon className={styles.second__file} />
              </div>
              <div className={styles.button}>
                <FileIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Наименование компании</span>
          <input
            className={styles.filter__input}
            placeholder="Не введено"
            type="text"
          />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>ФИО</span>
          <input
            className={styles.filter__input}
            placeholder="Не введено"
            type="text"
          />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>e-mail</span>
          <input
            className={styles.filter__input}
            placeholder="Не введено"
            type="text"
          />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Телефон</span>
          <input
            className={styles.filter__input}
            placeholder="Не введено"
            type="text"
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Расчёт отгрузки в</span>
          <Select className={styles.filter__select} placeholder="Не выбрано" />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Валюта</span>
          <Select className={styles.filter__select} placeholder="Не выбрана" />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>НДС %</span>
          <input
            className={styles.filter__input}
            placeholder="НДС Не выбрана"
            type="text"
          />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>КП действительно (дней)</span>
          <input
            className={styles.filter__input}
            placeholder="Срок действия КП"
            type="text"
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.wide__input_block}>
          <span className={styles.filter__title}>Условия оплаты</span>
          <Select
            className={styles.wide__filter_select}
            placeholder="Не выбрано"
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Условия доставки</span>
          <Select className={styles.filter__select} placeholder="Не выбрано" />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Физический адрес</span>
          <input
            className={styles.wide__filter_input}
            placeholder="Введите адрес"
            type="text"
          />
        </div>
      </div>
      <span className={styles.modal__title}>Предлождение поставщика</span>
      <span className={styles.subtitle}>
        Выберите товары на которые планируете предоставить предложения
      </span>
      <div className={styles.additional__filters_block}>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Количество товара</span>
          <input
            className={styles.additional__filter__input}
            placeholder="Не выбрано"
            type="text"
          />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Цена с НДС?</span>
          <Select
            className={styles.additional__filter_select}
            placeholder="Не выбрано"
          />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Цена за ед</span>
          <input
            className={styles.additional__filter__input}
            placeholder="не введено"
            type="text"
          />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Отгрузка | n/a</span>
          <input
            className={styles.additional__filter__input}
            placeholder="не введено"
            type="text"
          />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Доставка АФО | n/a</span>
          <input
            className={styles.additional__filter__input}
            placeholder="не введено"
            type="text"
          />
        </div>
        <div className={styles.input__block}>
          <span className={styles.filter__title}>Итого с НДС</span>
          <input
            className={styles.additional__filter__input}
            placeholder="не введено"
            disabled
            type="text"
          />
        </div>
      </div>
      <div className={styles.results__block}>
        <div className={styles.text__block}>
          <span className={styles.text}>Итого: 800 000 ₽</span>
          <span className={styles.text}>НДС 20%: 8 000 ₽</span>
          <span className={styles.text}>Итого с НДС: 800 000 ₽</span>
        </div>
      </div>
      <div className={styles.modal__btns_block}>
        <div className={styles.save__btn} onClick={handleSaveData}>
          Сохранить
        </div>
        <div className={styles.cancel__btn} onClick={handleCloseModal}>
          Отмена
        </div>
      </div>
    </div>
  );
};

export default Modal;

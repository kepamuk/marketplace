import { FC, useCallback, useEffect, useState } from "react";

import Blackout from "../../components/custom/Blackout/Blackout";
import Modal from "../../components/Modal/Modal";

import { ReactComponent as ChevronIcon } from "../../assets/icons/Chevron.svg";
import { ReactComponent as ArrowsIcon } from "../../assets/icons/Arrows.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/Plus.svg";
import { ReactComponent as FileIcon } from "../../assets/icons/File.svg";
import Machine from "../../assets/images/Machine.png";

import styles from "./Main.module.scss";

const Main: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOpenBtn = () => {
    setIsOpen(true);
  };

  const handleClickCloseBtn = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleDocumentKeydown = (event: any) => {
      if (event.keyCode === 27) {
        handleClickCloseBtn();
      }
    };

    document.addEventListener("keydown", handleDocumentKeydown);
  }, [handleClickCloseBtn]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.machine__block}>
          <ChevronIcon className={styles.chevron} />
          <img src={Machine} alt="" />
          <div className={styles.machine__title_block}>
            <span className={styles.machine__title}>
              Токарный станокпрврплврап
            </span>
            <span className={styles.machine__subtitle}>Z-MaT | F200.1</span>
          </div>
        </div>
        <div className={styles.fields__block}>
          <div className={styles.disabled__field}>-</div>
          <div className={styles.field}>
            <ArrowsIcon />
          </div>
          <div className={styles.field}>
            <FileIcon />
          </div>
          <div className={styles.field}>шт</div>
          <div className={styles.field}>10</div>
          <div className={styles.field}>Оригинал</div>
          <div className={styles.field}>Новое</div>
          <div className={styles.field}>122</div>
          <div className={styles.field}>0</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.tables__wrapper}>
          <div className={styles.table__block}>
            <span className={styles.table__title}>
              Предложения маркетплейса
            </span>
            <div className={styles.table}>
              <div className={styles.table__head}>
                <div className={styles.checkbox}></div>
                <div className={styles.head__titles_block}>
                  <span className={styles.table__head_title}>Компания</span>
                  <span className={styles.table__head_title}>Продажа</span>
                  <span className={styles.table__head_title}>Доступно</span>
                  <span className={styles.table__head_title}>Цена шт</span>
                  <span className={styles.table__head_title}>НДС</span>
                  <span className={styles.table__head_title}>Сумма НДС</span>
                  <span className={styles.table__head_title}>Сумма</span>
                  <span className={styles.table__head_title}>Отгрузка</span>
                </div>
              </div>
              <div className={styles.empty__block}>
                <span className={styles.empty__block_title}>
                  У вас нет ни одного предложения на макертплейсе
                </span>
              </div>
            </div>
          </div>
          <div className={styles.table__block}>
            <span className={styles.table__title}>
              Предложения поставщиков online
            </span>
            <div className={styles.table}>
              <div className={styles.table__head}>
                <div className={styles.checkbox}></div>
                <div className={styles.head__titles_block}>
                  <span className={styles.company}>Компания</span>
                  <span className={styles.table__head_title}>Доступно</span>
                  <span className={styles.table__head_title}>AFO %</span>
                  <span className={styles.table__head_title}>Цена шт</span>
                  <span className={styles.table__head_title}>НДС</span>
                  <span className={styles.table__head_title}>Сумма НДС</span>
                  <span className={styles.table__head_title}>Сумма c НДС</span>
                  <span className={styles.table__head_title}>Склад АФО</span>
                  <span className={styles.table__head_title}>Отгрузка</span>
                </div>
              </div>
              <div className={styles.empty__block}>
                <span className={styles.empty__block_title}>
                  У вас нет ни одного предложения от поставщика
                </span>
              </div>
            </div>
          </div>
          <div className={styles.table__block}>
            <span className={styles.table__title}>
              Предложения поставщиков offline
            </span>
            <div className={styles.table}>
              <div className={styles.table__head}>
                <div className={styles.checkbox}></div>
                <div className={styles.head__titles_block}>
                  <span className={styles.company}>Компания</span>
                  <span className={styles.table__head_title}>Доступно</span>
                  <span className={styles.table__head_title}>AFO %</span>
                  <span className={styles.table__head_title}>Цена шт</span>
                  <span className={styles.table__head_title}>НДС</span>
                  <span className={styles.table__head_title}>Сумма НДС</span>
                  <span className={styles.table__head_title}>Сумма c НДС</span>
                  <span className={styles.table__head_title}>Склад АФО</span>
                  <span className={styles.table__head_title}>Отгрузка</span>
                </div>
              </div>
              <div className={styles.empty__block}>
                <span className={styles.empty__block_title}>
                  У вас нет ни одного предложения от поставщика
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.add__button} onClick={handleClickOpenBtn}>
          <PlusIcon />
          <span className={styles.add__button_title}>Добавить</span>
        </div>
        {isOpen && (
          <Blackout onClose={handleClickCloseBtn}>
            <Modal setIsOpen={setIsOpen} />
          </Blackout>
        )}
      </div>
    </div>
  );
};

export default Main;

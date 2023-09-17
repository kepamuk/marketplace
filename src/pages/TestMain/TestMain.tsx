import { FC, useCallback, useEffect, useState } from "react";

import Blackout from "../../components/custom/Blackout/Blackout";
import Modal from "../../components/Modal/Modal";

import { ReactComponent as ChevronIcon } from "../../assets/icons/Chevron.svg";
import { ReactComponent as ArrowsIcon } from "../../assets/icons/Arrows.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/Plus.svg";
import { ReactComponent as FileIcon } from "../../assets/icons/File.svg";
import Machine from "../../assets/images/Machine.png";

import styles from "./TestMain.module.scss";

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
          <div className={styles.active__field}>13</div>
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
                  <span className={styles.table__head_title}>Доступно</span>
                  <span className={styles.table__head_title}>Продажа</span>
                  <span className={styles.table__head_title}>
                    Цена ед.б/ НДС
                  </span>
                  <span className={styles.table__head_title}>Сум.б.НДС</span>
                  <span className={styles.table__head_title}>Сум.НДС</span>
                  <span className={styles.table__head_title}>Сум.c.НДС</span>
                  <span className={styles.table__head_title}>Рент</span>
                  <span className={styles.table__head_title}>Отгрузка</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.table__block}>
            <span className={styles.table__title}>
              Предложения поставщиков online
            </span>
            <table>
              <thead>
                <tr>
                  <th>
                    <div className={styles.checkbox}></div>
                  </th>
                  <th>
                    <span className={styles.company}>Компания</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Доступно</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>AFO %</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>
                      Цена ед.б/ НДС
                    </span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Сум.б.НДС</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Сум.НДС</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Сум.c.НДС</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Рент</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Дос-ка</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Отгрузка</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.invisible__green_row}>
                  <td>
                    <div className={styles.checkbox}></div>
                  </td>
                  <td>
                    <div className={styles.table__row_company}>
                      <span className={styles.company__name}>
                        ООО Компания B
                      </span>
                      <span className={styles.row__block_value}>
                        Санкт-Петербург
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>10 шт</span>
                      <span className={styles.row__block_value}>10 kg</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_field}>5</div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>
                        105 000 000 ₽
                      </span>
                      <span className={styles.row__block_value}>
                        100 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>
                        1 050 000 000 ₽
                      </span>
                      <span className={styles.row__block_value}>
                        1 000 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>
                        210 000 000 ₽
                      </span>
                      <span className={styles.row__block_value}>
                        200 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>
                        1 260 000 000 ₽
                      </span>
                      <span className={styles.row__block_value}>
                        1 200 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_rentBlock}>
                      <span className={styles.row__block_rentTitle}>
                        60 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_field}>2</div>
                  </td>
                  <td>
                    <div className={styles.row__end_block}>
                      <div className={styles.table__row_block}>
                        <span className={styles.row__block_title}>92 д</span>
                        <span className={styles.row__block_value}>90 д</span>
                      </div>
                      <div className={styles.ellipsis__block}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.table__block}>
            <span className={styles.table__title}>
              Предложения поставщиков offline
            </span>
            <table>
              <thead>
                <tr>
                  <th>
                    <div className={styles.checkbox}></div>
                  </th>
                  <th>
                    <span className={styles.company}>Компания</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Доступно</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>AFO %</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>
                      Цена ед.б/ НДС
                    </span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Сум.б.НДС</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Сум.НДС</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Сум.c.НДС</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Рент</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Дос-ка</span>
                  </th>
                  <th>
                    <span className={styles.table__head_title}>Отгрузка</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.empty__row}></tr>
                <tr className={styles.red__row}>
                  <td>
                    <div className={styles.checkbox}></div>
                  </td>
                  <td>
                    <div className={styles.table__row_company}>
                      <span className={styles.company__name}>
                        ООО Компания B
                      </span>
                      <span className={styles.row__block_value}>
                        Санкт-Петербург
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>10 шт</span>
                      <span className={styles.row__block_value}>10 kg</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_field}>5</div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>5 250 ₽</span>
                      <span className={styles.row__block_value}>5 000 ₽</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>52 500 ₽</span>
                      <span className={styles.row__block_value}>50 000 ₽</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>10 500 ₽</span>
                      <span className={styles.row__block_value}>10 000 ₽</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>63 000 ₽</span>
                      <span className={styles.row__block_value}>60 000 ₽</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_rentBlock}>
                      <span className={styles.row__block_rentTitle}>
                        3 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_errorField}>-</div>
                  </td>
                  <td>
                    <div className={styles.row__end_block}>
                      <div className={styles.table__row_block}>
                        <span className={styles.row__block_title}>- д</span>
                        <span className={styles.row__block_value}>2 д</span>
                      </div>
                      <div className={styles.ellipsis__block}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className={styles.empty__row}></tr>
                <tr className={styles.green__row}>
                  <td>
                    <div className={styles.checkbox}></div>
                  </td>
                  <td>
                    <div className={styles.table__row_company}>
                      <span className={styles.company__name}>
                        ООО Компания B
                      </span>
                      <span className={styles.row__block_value}>
                        Санкт-Петербург
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>10 шт</span>
                      <span className={styles.row__block_value}>10 kg</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_field}>5</div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>
                        105 000 000 ₽
                      </span>
                      <span className={styles.row__block_value}>
                        100 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>
                        1 050 000 000 ₽
                      </span>
                      <span className={styles.row__block_value}>
                        1 000 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>
                        210 000 000 ₽
                      </span>
                      <span className={styles.row__block_value}>
                        200 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>
                        1 260 000 000 ₽
                      </span>
                      <span className={styles.row__block_value}>
                        1 200 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_rentBlock}>
                      <span className={styles.row__block_rentTitle}>
                        60 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_field}>2</div>
                  </td>
                  <td>
                    <div className={styles.row__end_block}>
                      <div className={styles.table__row_block}>
                        <span className={styles.row__block_title}>92 д</span>
                        <span className={styles.row__block_value}>90 д</span>
                      </div>
                      <div className={styles.ellipsis__block}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className={styles.empty__row}></tr>
                <tr className={styles.red__row}>
                  <td>
                    <div className={styles.checkbox}></div>
                  </td>
                  <td>
                    <div className={styles.table__row_company}>
                      <span className={styles.company__name}>
                        ООО Компания B
                      </span>
                      <span className={styles.row__block_value}>
                        Санкт-Петербург
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>10 шт</span>
                      <span className={styles.row__block_value}>10 kg</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_errorField}>-</div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>- ₽</span>
                      <span className={styles.row__block_value}>
                        100 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>- ₽</span>
                      <span className={styles.row__block_value}>
                        100 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>- ₽</span>
                      <span className={styles.row__block_value}>
                        20 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_block}>
                      <span className={styles.row__block_title}>- ₽</span>
                      <span className={styles.row__block_value}>
                        120 000 000 ₽
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_rentBlock}>
                      <span className={styles.row__block_rentTitle}>- ₽</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table__row_errorField}>-</div>
                  </td>
                  <td>
                    <div className={styles.row__end_block}>
                      <div className={styles.table__row_block}>
                        <span className={styles.row__block_title}>- д</span>
                        <span className={styles.row__block_value}>120 д</span>
                      </div>
                      <div className={styles.ellipsis__block}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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

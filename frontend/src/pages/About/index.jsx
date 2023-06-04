import styles from "./About.module.scss";

export const About = () => {
  return (
    <>
      {/* <h1 className={styles.header}>SAVE PAWS</h1> */}
      <div className={styles.aboutBlock}>
        <div className={styles.wrap}>
          <div className={styles.image}></div>
        </div>
        {/* <div className={styles.wrap}> */}
        <div className={styles.wrapper}>
          <div className={styles.whatIs}>
            <h3 className={styles.aboutHeading}>Що таке Save Paws?</h3>
            <p className={styles.aboutText}>
              Save Paws - організація яка займається допомогою тваринкам із
              Сумської області, які опинилися у важкій ситуації. Кожен
              користувач сайту має змогу залишити оголошення та зробити добру
              справу.
            </p>

            <h3 className={styles.aboutHeading}>
              Які оголошення можуть бути опубліковані?{" "}
            </h3>
            <p className={styles.aboutText}>
              Оголошення можуть містити будь-яку інвормацію про допомогу
              тваринам. Це може бути оголошення про пошук домівки для тваринки,
              або навпаки про пошук чотирилапого улюбленця. А може бути збір на
              лікування своєї або безхатньої тварини.
            </p>

            <h3 className={styles.aboutHeading}>
              Яку інформацію має містити оголошення?
            </h3>
            <p className={styles.aboutText}>
              В кожному оголошенні має бути заголовок та текст. Бажано щоб
              заголовок був максимально змістовний. В полі текст має бути
              вказана вся інформація про тваринку, номер телефона та місто
              людини яка звертається. Також в кожному оголошенні можна додати
              фотографію.
            </p>
            <h3 className={styles.aboutHeading}>
              Яку додаткову інформацію можна знайти на сайті?
            </h3>
            <p className={styles.aboutText}>
              На сайті присутні такі додаткові розділи:
              <ul>
                <li>
                  притулки: на сторінці розміщені функціонуючі притулки для
                  тварин;
                </li>
                <li>ветеринарні клініки: на цій сторінці наведені клініки;</li>
                <li>
                  благодійсніть: цей розділ містить благодійні організації, які
                  допомогають тваринкам.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

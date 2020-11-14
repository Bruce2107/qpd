import styles from './index.module.css';

const Page7: React.FC = () => {
  return (
    <div
      className={`${styles['pv-16']} ${styles['row-gap-8']} ${styles['mt-24']}`}
      style={{ paddingBottom: '32px' }}
    >
      <div className={`${styles.columns}`}>
        <figure>
          <img
            src="/circa-1985-police-whip-protester-gty-jc-200706_hpEmbed_3x2_992.jpg"
            alt=""
            aria-hidden
            className={`${styles.image}`}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://abcnews.go.com/International/apartheid-jim-crow-george-floyds-death-reverberated-africa/story?id=71556630">
              https://abcnews.go.com/International/apartheid-jim-crow-george-floyds-death-reverberated-africa/story?id=71556630
            </a>
          </figcaption>
        </figure>
        <div className={`${styles.columns} ${styles['flex-column']}`}>
          <p>
            A morte de George Floyd, um homem negro que foi asfixiado por um
            policial branco nos Estados Unidos, gerou uma onda de indignação e
            pessoas por todo o mundo colocaram em alta a hashtag
            <cite>
              <strong>#blacklivesmatter</strong>
            </cite>
            .
          </p>
          <p>
            No dia 25 de maio de 2020, o afro-americano George Perry Floyd Jr.
            foi estrangulado por um policial branco que apoiou fortemente seu
            joelho no pescoço de Folyd por aproximadamente 7 minutos, enquanto
            George dizia “não consigo respirar” e o policial ignorava as falas
            do homem indefeso.
          </p>
          <p>
            Um vídeo gravado de 10 minutos da agonizante morte de Floyd foi
            parar nas redes sociais e em poucas horas, as ruas de Minneapolis,
            nos Estados Unidos, onde ocorreu a morte, estavam cheias e geram
            manifestações onlines e nas ruas.
          </p>
        </div>
        <figure>
          <img
            src="/Non-whites 2.png"
            alt=""
            aria-hidden
            className={`${styles.image}`}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://secretsofaidsandebola.blogspot.com/2019/09/the-roots-of-xenophobia-in-south-africa.html">
              https://secretsofaidsandebola.blogspot.com/2019/09/the-roots-of-xenophobia-in-south-africa.html
            </a>
          </figcaption>
        </figure>
        <div className={`${styles.columns} ${styles['flex-column']}`}>
          <p>
            A organização Black Lives Matter surgiu no ano de 2013 e foi criada
            por três mulheres ativistas norte-americanas: Alicia Garza, Patrisse
            Cullors e Opal Tometi. Hoje em dia é uma fundação global que tem o
            propósito de "erradicar a supremacia branca e construir poder local
            para intervir na violência infligida às comunidades negras”.
          </p>
          <p>
            Essas mulheres se juntaram após o vigia George Zimmermann receber
            absolvição por assassinar o jovem negro Trayvon Martin, com um tiro
            no peito. Mas só ganharam destaque após a morte de Michael Brown e
            Eric Garner e essa hashtag se expandiu para todo o mundo, ajudando
            na luta dos negros contra a supremacia branca.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page7;

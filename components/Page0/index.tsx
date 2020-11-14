import styles from './index.module.css';

const Page1: React.FC = () => {
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
            A história mostra que o racismo não é um fenômeno recente, ele
            esteve presente em nossa sociedade faz séculos e até os dias de hoje
            afeta milhões de pessoas. O mundo em que vivemos é fruto de séculos
            de escravidão, exclusão, segregação e massacre de diversos povos.
          </p>
          <p>
            Um dos exemplos mais marcantes de racismo na nossa história foi o
            tráfico, escravidão e racismo de milhões de pessoas entre 1501 e
            1870, em que cerca de 12,5 milhões de africanos foram raptados e
            transportados para o continente americano. No entanto, os africanos
            não foram as únicas vítimas, os povos nativos da América sofreram
            intensamente sobre a mão dos colonizadores.
          </p>
          <p>
            Mesmo após os 300 anos de escravidão os povos agora libertos
            continuaram sendo aterrorizados e agora perante a segregação, que
            foi instaurada na maioria das nações. Um dos sistemas de exclusões
            mais reconhecidos foi o apartheid. O apartheid foi uma política
            racial separatista implantada na África do Sul e oficializada em
            1948, na qual os negros foram submetidos a diversas desiguales
            incluindo a exclusão dos espaços públicos, da educação e postos de
            trabalho.
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
            No resto do mundo não foi diferente, os negros e indígenas foram
            desprezados e durante a década de 1940 os racismo se materializou em
            um partido político: Partido Nacional-Socialista dos Trabalhadores
            Alemães. Com a instauração de Hitler no governo alemão a perseguição
            contra aqueles que não eram da "raça pura", ou seja, raça ariana se
            iniciou. Foi feito um terrível massacre contra diversos povos,
            dentre eles os ciganos, judeus, homossexuais e os afro-germanos.
          </p>
          <p>
            Nos Estados Unidos além da segregação diversos movimentos foram
            levantados, como Ku Klux Klan, também conhecida como KKK, que surgiu
            no sul dos Estados Unidos no final dos anos 1860 e resiste até hoje.
            O KKK defende correntes reacionárias e extremistas, tais como a
            supremacia branca, o nacionalismo branco, a anti-imigração etc.
          </p>
          <p>
            Esses são poucos dos horrores sofridos pelos diversos povos e, que
            até hoje parte deste racismo permanece estruturado em nossa
            sociedade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page1;

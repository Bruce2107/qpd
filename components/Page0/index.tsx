import styles from './index.module.css';

const Page0: React.FC = () => {
  return (
    <div
      className={`${styles['pv-16']} ${styles['row-gap-8']} ${styles['mt-24']}`}
      style={{ paddingBottom: '32px' }}
    >
      <div className={`${styles.columns}`}>
        <figure>
          <img
            src="/5057613.png"
            alt=""
            aria-hidden
            className={`${styles.image}`}
            style={{ width: '75%' }}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://www.livesoftheladysaints.com/may.html">
              https://www.livesoftheladysaints.com/may.html
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
            src="/1000x-1.jpg"
            alt=""
            aria-hidden
            className={`${styles.image}`}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://www.bloomberg.com/news/articles/2013-12-10/life-in-apartheid-era-south-africago">
              https://www.bloomberg.com/news/articles/2013-12-10/life-in-apartheid-era-south-africago
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
      <div
        className={`${styles.references} ${styles.columns} ${styles['flex-column']}`}
        style={{ rowGap: '8px' }}
      >
        <h4>Grupo</h4>
        <cite>Giovana Destro Brizanti Gardini - 200056</cite>
        <cite>Raphaela dos Santos de Oliveira - 200073</cite>
        <cite>Yasmin Silva Costa Ercolini - 2000079</cite>
        <cite>Michaela Lourdes Goethe - 200232</cite>
        <cite>Vitoria Carolina da Silva - 200237</cite>
      </div>
    </div>
  );
};

export default Page0;

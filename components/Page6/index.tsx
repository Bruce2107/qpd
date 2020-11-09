import styles from './index.module.css';

export default function index() {
  return (
    <div
      className={`${styles['pv-16']} ${styles['row-gap-8']} ${styles['mt-24']}`}
      style={{ paddingBottom: '32px' }}
    >
      <figure>
        <img
          src="/Cinco-Formas-de-Combater-o-Racismo-na-Infância.png"
          alt=""
          aria-hidden
          style={{ width: '100%' }}
        />
        <figcaption>
          Fonte:{' '}
          <a href="https://www.geledes.org.br/conheca-cinco-formas-de-combater-o-racismo-na-infancia/">
            https://www.geledes.org.br/conheca-cinco-formas-de-combater-o-racismo-na-infancia/
          </a>
        </figcaption>
      </figure>
      <ol>
        <li>
          Eduque as crianças para o respeito à diferença. Ela está nos tipos de
          brinquedos, nas línguas faladas, nos vários costumes entre os amigos e
          as pessoas de diferentes culturas, raças e etnias. As diferenças
          enriquecem nosso conhecimento.
        </li>
        <li>
          Valorize e incentive o comportamento respeitoso e sem preconceito em
          relação à diversidade étnico-racial.
        </li>
        <li>
          Ajude a escola de seus filhos a adotar a postura de ensinar sobre a
          história e a cultura da população negra e sobre como enfrentar o
          racismo.
        </li>
        <li>
          Proporcione e estimule a convivência de crianças de diferentes raças e
          etnias nas brincadeiras, nas salas de aula, em casa ou em qualquer
          outro lugar.
        </li>
        <li>
          Não deixe de denunciar. A discriminação é uma violação de direitos.
        </li>
      </ol>
      <p className={styles.font}>
        Sobre cotas:
        <br />
        <a href="https://www.youtube.com/watch?v=SwN4ndBFaPg">
          https://www.youtube.com/watch?v=SwN4ndBFaPg
        </a>
        <br />
        <a href="https://www.youtube.com/watch?v=QcQIaoHajoM">
          https://www.youtube.com/watch?v=QcQIaoHajoM
        </a>
      </p>
      <p className={styles.font}>
        O COMBATE AO RACISMO É UMA LUTA DE TODOS”, DIZ JOSÉ VICENTE:
        <br />
        <a href="https://todospelaeducacao.org.br/noticias/o-combate-ao-racismo-e-uma-luta-de-todos-entrevista-jose-vicente/">
          https://todospelaeducacao.org.br/noticias/o-combate-ao-racismo-e-uma-luta-de-todos-entrevista-jose-vicente/
        </a>
      </p>
    </div>
  );
}

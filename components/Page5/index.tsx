import styles from './index.module.css';

export default function index() {
  return (
    <div
      className={`${styles.box} ${styles['pv-16']} ${styles['row-gap-8']} ${styles['mt-24']}`}
      style={{ paddingBottom: '32px' }}
    >
      <cite className={`${styles.box} ${styles['row-gap-8']}`}>
        <span>
          No último dia 18, a polícia do Rio de Janeiro matou João Pedro Mattos,
          quando ele estava dentro de sua casa, em São Gonçalo, no Rio de
          Janeiro, divertindo- se com amigos. Ele foi atingido por um projétil
          de fuzil que o acertou na parte posterior das costas. João Pedro era
          mais um adolescente negro brasileiro: tinha 14 anos.
        </span>
        <span>
          Poucos dias depois, 25, na cidade de Minneapolis, no noroeste dos
          Estados Unidos, a polícia matou George Floyd, asfixiado, e depois de
          já estar inteiramente dominado por um policial brutamontes. George
          Floyd era mais um cidadão negro norte-americano: tinha 46 anos. Poucas
          horas depois que um vídeo foi divulgado nas redes sociais,
          mostrando-se a brutalidade e a covardia da polícia norte-americana, o
          prefeito de Minneapolis, Jacob Frey (um “muito fraco prefeito da
          esquerda radical”, segundo Trump), afirmou em uma entrevista que “ser
          negro nos Estados Unidos não deveria ser uma sentença de morte. ”
        </span>
        <span>E não deveria mesmo sê-lo, nem aqui, nem lá, nem alhures.</span>
        <span>
          Aqui, o governador do Rio de Janeiro não disse nada de relevante sobre
          a morte de João Pedro, preferindo (da maneira mais simplista possível)
          transferir a responsabilidade para a Polícia Federal que,
          efetivamente, co-participara da operação assassina em São Gonçalo. A
          Polícia Federal, por sua vez, informou que a corregedoria havia
          instaurado uma sindicância para apurar a atuação dos policiais
          federais que participaram da operação homicida, que estava
          acompanhando o inquérito policial instaurado pela polícia civil do Rio
          de Janeiro, que prestaria todas as informações, que apoiava a
          elucidação dos fatos, etc., etc., etc.
        </span>
        <span>
          Nos Estados Unidos, os policiais que participaram da morte de George
          Floyd foram defenestrados imediatamente do serviço público, e um deles
          já está preso, acusado de homicídio culposo.
        </span>
        <span>
          Aqui, os policiais civis e federais que atuaram na operação que
          resultou na morte de João Pedro não foram suspensos, e continuam
          trabalhando na atividade policial, como se nada de mais houvesse
          acontecido naquela casa de São Gonçalo.
        </span>
        <span>
          Nos Estados Unidos, a violência contra a população negra, como se sabe
          há séculos, desde a escravização, é um sinal bastante claro do racismo
          que permeia perversamente a sociedade americana, desde a sua formação,
          de origem europeia e puritana.
        </span>
        <span>
          O assassinato de João Pedro sucede uma série de outras mortes que
          atingem a população negra e jovem brasileira, e antecede, certamente,
          outras tantas que estão por vir, desgraçadamente. Os números que
          comprovam esta afirmação e esta prognose são facilmente acessíveis em
          qualquer pesquisa que seja feita seriamente no país.
        </span>
      </cite>
      <p className={styles.font}>
        Por Romulo Moreira em:{' '}
        <a
          href="https://www.justificando.com/2020/06/02/de-joao-
        pedro-a-george-floyd-o-racismo-que-mata/"
        >
          https://www.justificando.com/2020/06/02/de-joao-
          pedro-a-george-floyd-o-racismo-que-mata/
        </a>
      </p>
      <figure>
        <img
          src="/15910244302920.jpg"
          alt=""
          aria-hidden
          style={{ width: '100%' }}
        />
        <figcaption>
          Fonte:{' '}
          <a href="https://www.football-addict.com/en-us/article/la-liga/vinicius-and-rodrygo-blacklivesmatter/5ed54978bf54634096526692">
            https://www.football-addict.com/en-us/article/la-liga/vinicius-and-rodrygo-blacklivesmatter/5ed54978bf54634096526692
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

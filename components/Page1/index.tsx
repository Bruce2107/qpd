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
            src="/mae_filha.jpg"
            alt=""
            aria-hidden
            className={`${styles.image}`}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://twitter.com/premioherzog/status/1050392574115151873">
              https://twitter.com/premioherzog/status/1050392574115151873
            </a>
          </figcaption>
        </figure>
        <div className={`${styles.columns} ${styles['flex-column']}`}>
          <p>
            Racismo pode ser considerado uma tríade que une estereótipo,
            preconceito e discriminação. Debater sobre este tema também é falar
            sobre o sistema judiciário, a história, a sociedade, a economia e
            literatura. Mas para começar uma discussão sobre o assunto, é
            preciso definir e entender a diferença entre esses tópicos.
          </p>
          <p>
            Estereótipo é um argumento ou ideia muito conhecida e repetida a
            respeito de um acontecimento ou pessoa, ou seja, são como “rótulos”
            criados pelo senso comum. Como por exemplo, o estereótipo da beleza,
            em que apenas pessoas magras são consideradas dentro do padrão de
            beleza. Preconceito significa que um conceito foi formado sem nenhum
            conhecimento prévio do assunto tratado, sem dados fundamentados. Por
            fim, mas não menos importante, quando há uma exclusão que
            inferioriza um determinado grupo ou pessoa, está sendo abordada a
            discriminação, e os grupos mais afetados são pessoas de classe
            social baixa, população negra, obesos, etnias e religiões
            diferentes, e grupo LGBTQAI+.
          </p>
        </div>
        <figure>
          <img
            src="/garoto_sapato.jpg"
            alt=""
            aria-hidden
            className={`${styles.image}`}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://twitter.com/brummmmm/status/1126449834200842240">
              https://twitter.com/brummmmm/status/1126449834200842240
            </a>
          </figcaption>
        </figure>
        <div className={`${styles.columns} ${styles['flex-column']}`}>
          <p>
            Diante da explicação desses temas, é possível definir o assunto
            principal desta matéria. O racismo é uma teoria que afirma a
            superioridade de certas raças humanas sobre as demais, segregação. É
            o poder da discriminação e do preconceito contra grupos ou
            indivíduos por causa de sua cor ou etnia.
          </p>
          <p>
            Não é plausível determinar um momento certo na história em que
            surgiu a discriminação, mas desde a antiguidade há rastros de
            segregação quando os povos latinos e gregos classificavam os
            estrangeiros como bárbaros. No entanto, o preconceito em relação a
            cor da pele se deu com a expansão marítima e colonização das
            Américas, a partir da escravização e genocídio dos povos nativos.
            Para justificar a supremacia branca, entidades como a Klu Klux Klan
            e o nazismo se baseavam em estudos de medição do crânio, chamado
            craniometria.
          </p>
          <p>
            Existem três tipos de racismo. O{' '}
            <strong>
              preconceito e discriminação racial ou crime de ódio racial
            </strong>{' '}
            é uma forma direta de racismo, em que há violência física ou verbal
            contra indivíduos de diferentes etnias ou cor. O{' '}
            <strong>racismo institucional</strong> é praticado de maneira menos
            direta e é uma forma de preconceito por parte de órgãos públicos
            governamentais ou instituições privadas, que de forma indireta,
            promovem a exclusão ou o preconceito social. E por último, o{' '}
            <strong>racismo estrutural</strong>, que ocorre de maneira ainda
            mais serena e pode ser ainda mais perigoso, já que as falas, piadas,
            práticas e hábitos estão introduzidos no cotidiano.{' '}
          </p>
        </div>
        <figure>
          <img
            src="/policia.png"
            alt=""
            aria-hidden
            className={`${styles.image}`}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://twitter.com/folha/status/1204038396856934400">
              https://twitter.com/folha/status/1204038396856934400
            </a>
          </figcaption>
        </figure>
        <div className={`${styles.columns} ${styles['flex-column']}`}>
          <p>
            O Brasil foi o último grande país ocidental a abolir a escravidão,
            quando a Lei Áurea foi promulgada, em 13 de maio de 1888. As causas
            do racismo no país podem ser associadas à longa escravização e a
            abolição tardia, e abordando as características históricas que ainda
            mantém esse preconceito em alta, pode ser mencionada a herança
            escravocrata, a segregação e não incorporação da população negra
            logo após a escravidão, leis da república, teorias raciais e a
            segregação espacial.
          </p>
          <p>
            Logo após a promulgação da lei que encerrava com o tráfico de
            negros, não houve a inclusão dessa porção da população. Os escravos
            libertos tiveram que se locar em lugares que nenhuma pessoa queria
            como os morros, formando as favelas. Sem uma moradia digna, sem
            emprego e condições de se manterem, a violência aumentou entre os
            negros e marginalizados. A exclusão social e econômica levou essas
            pessoas a tomar decisões para sua sobrevivência, e essas ações
            resultaram na concepção precipitadas sobres os negros.
          </p>
          <p>
            Um ramo da sociologia, chamado de a sociologia da violência, estuda
            as relações e estruturas sociais da violência e criminalidade, e
            enfatiza que o principal fator de violência existente é o fator
            econômico.
          </p>
          <p>
            A sociedade impôs a idéia de que se deve ter medo dos negros e com
            isso, a taxa de homicídio aumentou cerca de 33% nos últimos dez
            anos. Neste ano (2020), ocorreram inúmeros protestos, principalmente
            nos Estados Unidos, após a morte de George Floyd, homem
            afro-americano que foi asfixiado, por aproximadamente nove minutos,
            por um policial branco. Crianças negras também foram e continuam
            sendo mortas, vítimas de bala perdida em comunidade e vários
            jogadores sofreram racismo em campo.
          </p>
          <p>
            No entanto, os jovens negros são as principais vítimas da violência
            letal e do encarceramento, tanto que os movimentos sociais têm
            chamado esta perspectiva de aprisionamento dos jovens negros de
            genocídio.
          </p>
          <p>
            <cite>Os Olhos que Condenam</cite>, lançada em 2019 na Netflix, é
            uma minissérie criada por Ava DuVernay, que aborda a invisibilidade
            dos jovens negros, que historicamente estão entre os que mais morrem
            e os mais encarcerados do mundo. Em quatro episódios, refere-se a
            história real de um dos maiores erros do sistema judiciário
            norte-americano. Trata-se da condenação e prisão de cinco jovens
            negros sob falsa acusação de estupro de uma mulher no Central Park,
            em 1989.
          </p>
          <p>
            A primeira lei implementada contra o racismo, foi no ano de 1950,
            por Getúlio Vargas. A Lei n° 1.390 proibia a discriminação racial em
            ambientes públicos, acesso a educação ou empregos e etc. Porém, essa
            lei impunha muita dificuldade para provar a denúncia e exigia provas
            contundentes. Em 1985 entra em vigor a Lei Caó, que inclui a
            contravenções penais.
          </p>
          <p>
            As leis foram criadas para tentar acabar com o racismo, mas como o
            sistema judiciário tem suas falhas, sem sempre ocorre com o
            planejado. Em 1989 foi sancionada a lei n° 7.716, que define como
            crime, toda e qualquer manifestação, segregação por motivos raciais,
            e por ser um crime inafiançável e imprescritível, a pena é de até
            quatro anos. Sancionado no ano de 1940, Art. 140 do Código Penal
            trata de injúria racial, que baseia-se na conduta de ofender a
            dignidade de alguém, a pena varia de um a seis meses de reclusão ou
            multa. Contudo, como mencionado, o sistema é falho e o advogado pode
            alegar que não ocorreu a prática do racismo, mas sim injúria,
            podendo assim pagar uma multa e não cumprir a pena.
          </p>
          <p>
            Para combater a discriminação no campo da educação, algumas
            políticas foram impulsionadas e propunham a aplicação de um sistema
            diferenciado de acesso às universidades publicas para estudantes
            negros. A Lei de Cotas visa acabar com a desigualdade racial
            resultante da escravidão no Brasil.
          </p>
          <p>
            O sociólogo brasileiro Gilberto Freyre, escreveu o livro{' '}
            <cite>Casa Grande & Senzala</cite>. Marcado por grandes elogios e
            críticas, aborda um enredo polêmico e sexualizado e tem influência
            muito grande da antropologia norte americana que rompeu com o
            racismo científico. Publicado em 1933, a obra busca entender a
            formação social do Brasil a partir da família, tenta derrubar as
            teses racistas que circulavam os meios acadêmicos e científicos.
            Freyre defendia que a miscigenação era a saída para proporcionar a
            evolução social.{' '}
          </p>
        </div>
        <figure>
          <img
            src="/say_their_names.jpg"
            alt=""
            aria-hidden
            className={`${styles.image}`}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://twitter.com/Chinoxx94/status/1269296132892405761">
              https://twitter.com/Chinoxx94/status/1269296132892405761
            </a>
          </figcaption>
        </figure>
        <div
          className={`${styles.references} ${styles.columns} ${styles['flex-column']}`}
          style={{ rowGap: '8px' }}
        >
          <h4>Referências</h4>
          <cite>
            <a href="https://www.uol.com.br">UOL</a>
          </cite>
          <cite>
            <a href="https://www.istoe.com.br">ISTOÉ</a>
          </cite>
          <cite>
            <a href="https://www.todamateria.com.br">Toda Matéria</a>
          </cite>
          <cite>
            <a href="https://www.uol.com.br">UOL</a>
          </cite>
        </div>
      </div>
    </div>
  );
};

export default Page1;

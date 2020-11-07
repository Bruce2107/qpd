import Person from '../Person';
import styles from './index.module.css';

const Page3: React.FC = () => {
  return (
    <div
      className={`${styles.box} ${styles['pv-16']} ${styles['row-gap-8']} ${styles['mt-24']}`}
      style={{ paddingBottom: '32px' }}
    >
      <h2 style={{ margin: 0, textAlign: 'center' }}>
        REFLEXÕES SOBRE O MARXISMO E A QUESTÃO RACIAL{' '}
        <small
          style={{
            color: '#56504c',
            fontWeight: 'normal',
            fontSize: '.875rem',
          }}
        >
          Augusto Cezar Bounicore
        </small>
      </h2>
      <div className={`${styles.columns}`}>
        <figure>
          <img
            src="/maxresdefault.jpg"
            alt=""
            aria-hidden
            style={{ width: '100%' }}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://www.youtube.com/watch?v=jedLb_QCXIk">
              https://www.youtube.com/watch?v=jedLb_QCXIk
            </a>
          </figcaption>
        </figure>
        <div className={`${styles.columns} ${styles['flex-column']}`}>
          <p>
            Se existe uma grande confusão no seio das organizações da esquerda
            em torno do movimento negro ou antirracista, isso, em grande parte,
            se deve à pouca (ou nenhuma) atenção dada ao tema pelos clássicos do
            marxismo – refiro-me aqui especialmente a Marx e Engels. Uma lacuna
            mantida pelos seus herdeiros teóricos mais importantes, como
            Kautsky, Plekhanov, Lênin e Gramsci. Portanto, o estudo entre nós da
            chamada “questão racial” é recente e problemático. A “questão
            racial”, em geral, apareceu embutida, nos primeiros estudos
            marxistas como subproduto da questão colonial e nacional; ou seja,
            no estudo da dominação do imperialismo sobre os países africanos,
            asiáticos e latino-americanos. Por isso, talvez, fosse mais correto
            dizer que para os marxistas até o início do século XX a “questão
            racial” não se constituiu enquanto um problema político e teórico a
            ser resolvido.
          </p>
          <small
            style={{
              color: '#56504c',
              fontWeight: 'normal',
              fontSize: '.875rem',
            }}
          >
            Saiba mais:{' '}
            <a href="https://www.youtube.com/watch?v=jedLb_QCXIk">
              https://www.youtube.com/watch?v=jedLb_QCXIk
            </a>
          </small>
          <p>
            Ao contrário do apregoam as leituras liberais, racismo não é apenas
            um problema ético, uma categoria jurídica ou um dado psicológico.
            Racismo é uma relação social, que se estrutura política e
            economicamente.
          </p>
          <p>
            Por ser uma relação social – portanto, dotado de materialidade e
            historicidade –, o fenômeno do racismo não escapou das lentes da
            teoria marxista. Já nas obras de Marx e Engels, assim como na dos
            “clássicos” marxistas (Vladimir Lenin, Karl Kautsky, Rosa Luxemburgo
            e Bruno Bauer), reflexões acerca da relação entre racismo,
            nacionalismo, colonialismo e a formação da economia capitalista
            ocupam posição de destaque.
          </p>
          <p>
            Com efeito, o debate racial no interior do pensamento marxista
            aprofundou-se à medida que os impactos das grandes transformações
            sociais do século XX exigiram um reposicionamento teórico. Temas
            como constituição de subjetividade e ideologia, Estado capitalista e
            as crises e papel das minorias na luta de classes, bem como os
            diálogos com a psicanálise, a fenomenologia, o estruturalismo e o
            pós-estruturalismo, ampliaram as possibilidades de uma análise
            marxista do racismo.
          </p>
          <p>
            Assim, diversos foram os pensadores e as pensadoras que trataram do
            racismo partindo da análise de experiências históricas distintas e
            de múltiplas interpretações e apropriações dos conceitos presentes
            na obra de Marx. Muitos desses estudiosos da conexão entre racismo e
            capitalismo estiveram diretamente envolvidos nas lutas sociais em
            seus respectivos países. São apenas alguns exemplos, que nem de
            longe encerram a lista de autores e autoras cuja perspectiva, de
            algum modo, liga-se ao marxismo: nos Estados Unidos, Oliver C. Cox,
            Angela Davis e Stokely Carmichael são referências fundamentais na
            luta dos negros estadunidenses; no continente africano e no contexto
            da resistência anticolonial, Amílcar Cabral, Kwame Nkrumah e Frantz
            Fanon produziram obras de grande influência; sobre a realidade da
            escravidão e do racismo segundo a perspectiva caribenha, Walter
            Rodney, C. L. R. James e Eric Williams gestaram obras de relevo; no
            Brasil, destaca-se a importância de Florestan Fernandes, Guerreiro
            Ramos e Clóvis Moura.
          </p>
          <p>
            Se é possível dizer que o marxismo permite uma compreensão
            científica da questão racial, também se pode afirmar que a análise
            do fenômeno racial abre as portas para que o marxismo cumpra sua
            vocação de tornar inteligíveis as relações sociais históricas em
            suas determinações sociais mais concretas. Os conceitos de classe,
            Estado, imperialismo, ideologia e acumulação primitiva,
            superexploração, crise e tantos outros ganham concretude histórica e
            inteligibilidade quando informados pelas determinações raciais.
            Nesse sentido, é importante dizer quão essencial o estudo das
            relações raciais é para a compreensão das especificidades de cada
            formação social capitalista, especialmente nos países da América, do
            Caribe, da África e da Ásia.
          </p>
        </div>
        <figure>
          <img
            src="/200806184827-amanpour-misan-harriman-exlarge-34.jpg"
            alt=""
            aria-hidden
            style={{ width: '100%' }}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://edition.cnn.com/video/data/3.0/video/tv/2020/08/06/amanpour-misan-harriman-vogue.cnn/index.xml">
              https://edition.cnn.com/video/data/3.0/video/tv/2020/08/06/amanpour-misan-harriman-vogue.cnn/index.xml
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Page3;

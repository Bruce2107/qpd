import Person from '../Person';
import styles from './index.module.css';

const Page2: React.FC = () => {
  return (
    <div
      className={`${styles.box} ${styles['pv-16']} ${styles['row-gap-8']} ${styles['mt-24']}`}
    >
      <blockquote>
        <h2 className={styles.description}>
          A representatividade tende a defender que todos cidadãos tenham a
          oportunidade de formular suas preferências, expressá-las aos demais
          cidadãos e ao governo por meio de ação individual ou coletiva, e que
          seus interesses não sejam discriminados. Para isso, é necessário que o
          pluralismo tenha centralidade na sociedade.
        </h2>
      </blockquote>
      <div className={`${styles.columns}`}>
        <h3 className={styles['list-title']}>Música</h3>
        <Person
          description="Nascido José Bezerra da Silva (1927-2005) em Pernambuco, foi um cantor,
compositor e intérprete brasileiro. Se consolidou no gênero samba de coco, foi
responsável por trazer o estilo de vida boêmio para a grande massa. Em suas
letras que eram ‘’porta voz dos morros e favelas’’, ele se transformou em nome
de resistência em sua época."
          image="/Bezerra_da_Silva.jpg"
          imageFont="https://pt.wikipedia.org/wiki/Bezerra_da_Silva"
          name="Bezerra da Silva"
        />
        <Person
          description="Aos 83 anos de idade, Elza Soares continua fazendo história. Sendo uma das
cantoras mais notáveis da música brasileira, Elza foi linha de frente na luta da violência contra a mulher. Mãe aos 13 anos, a &#39;mulher do fim do mundo&#39; relata
que “hoje eu acho mais fácil. A ideia da mulher, do negro, o ser humano, ele
hoje tem mais liberdade para falar. O negro pode falar, ser o que ele sente”,
como expressou ao Alma Preta, em 2018.."
          image="/Elza_Soares.webp"
          imageFont="https://g1.globo.com/pop-arte/musica/noticia/2020/07/22/elza-soares-completa-90-anos-e-fala-sobre-o-brasil-vim-do-planeta-fome-e-continuo-no-planeta-fome.ghtml"
          name="Elza Soares"
        />
        <Person
          description="Ex-ministro da Cultura e dono de hits como ‘’Aquele Abraço’’ (1969) e ‘’Toda
Menina Baiana’’ (1979), Gilberto Passos Gil Moreira (77) é vencedor de
prêmios como o Grammy Latino e o Grammy Americano e foi condecorado
pelo governo francês com a Ordem Nacional do Mérito. Gil foi nome de
destaque contra a Ditadura Militar (1964-1985), tendo que sair de seu país por
conta de perseguições."
          image="/Gilberto_Gil.jpg"
          imageFont="https://www1.folha.uol.com.br/ilustrada/2018/08/apos-tratamento-gilberto-gil-diz-que-agora-enfrenta-a-velhice-como-todos.shtml"
          name="Gilberto Gil"
        />
        <Person
          description="Nascido Mauro Mateus dos Santos, o rapper Sabotage (1973-2004) é nome de
destaque na cena hip hop brasileira. Sabotage acumula mais de 70 milhões de
visualizações no Youtube e mais de 500 mil ouvintes mensais no Spotify. Ano
após ano, a prefeitura de São Paulo premia os rappers mais promissores da
cidade com um prêmio que carrega seu nome. No Grajaú, Zona Sul da capital,
o cinema público da região é nomeado em sua homenagem."
          image="/Sabotage.jpg"
          imageFont="https://br.pinterest.com/pin/541698661410906258/"
          name="Sabotage"
        />
        <Person
          description="Gustavo Pereira Marques (26), mais conhecido pelo nome artístico Djonga, é
um rapper, escritor e compositor brasileiro. Considerado um dos nomes mais
influentes do rap na atualidade, o artista chama a atenção por sua lírica afiada,
marginalizada e agressiva e por suas fortes críticas sociais em suas letras.
Djonga já foi citado como um ‘’nome para ficar de olho’’ por publicações
internacionais, como a Daily Art Magazine."
          image="/djonga-e-bia-nogueira.jpeg"
          imageFont="https://entretenimento.r7.com/musica/mais-que-dinheiro-diz-djonga-ao-lancar-historias-da-minha-area-14032020"
          name="Djonga"
        />
        <Person
          description="Konrad Dantas, mais conhecido pelo nome artístico KondZilla (Guarujá, 13 de
setembro de 1988) é um produtor e empresário brasileiro.  Ele é fundador da
produtora que leva seu nome artístico Kondzilla Filmes e Kondzilla Records,
sendo um dos principais responsáveis pelo sucesso do funk brasileiro. Tem,
atualmente, o maior canal do YouTube Brasil e da América Latina, e o sétimo
maior canal de música do mundo, com mais de 59 milhões de inscritos."
          image="/kondzilla.jpg"
          imageFont="https://www.jornaldaparaiba.com.br/cultura/kondzilla-fecha-parceria-com-netflix-para-producao-seriado-sintonia.html"
          name="Kondzilla"
        />
        <Person
          description="Tim Maia teve a importância de ser um grande cantor, o primeiro blues shouter
brasileiro e bem-sucedido criador. Foi enraizado pelo som de Luiz Gonzaga e
Jackson do Pandeiro com a Motown e expôs essa simbiose através da sua
música soul made in Brasil. Tim sempre será lembrado como o soulman da
música brasileira com timbre de voz especial e único. Esse título sempre será
dele, por toda posteridade. Ele significa um segmento e estilo musical no nosso
país. Os cantores de blues e soul brasileiros são como Tim Maia. Eles cantam
Tim Maia... Não é cantor de soul: ele é o próprio estilo. Quem compõe soul,
compõe para o Tim e não para o soul."
          image="/Tim-Maia.png"
          imageFont="https://www.funarte.gov.br/estudio-f/estudio-f-tim-maia/"
          name="Tim Maia"
        />
        <Person
          description='Leandro Roque de Oliveira, mais conhecido pelo nome artístico Emicida, é um rapper,
cantor e compositor brasileiro. É considerado uma das maiores revelações do hip hop do
Brasil da década de 2000. O nome "Emicida" é uma fusão das palavras "MC" e "homicida".'
          image="/emicidafotoamarelo1.webp"
          imageFont="https://g1.globo.com/pop-arte/musica/blog/mauro-ferreira/post/2019/10/31/emicida-pacifica-o-discurso-cai-no-samba-e-depura-o-canto-no-album-amarelo.ghtml"
          name="Emicida"
        />
        <Person
          description="Beyoncé (1981) é uma cantora, compositora, produtora musical e atriz norte-
americana de música R&amp;B e pop. A cantora é considerada a mulher do século
no mundo pop."
          image="/beyonce.jpg"
          imageFont="https://www.purepeople.com.br/noticia/beyonce-iconica-7-provas-que-a-cantora-e-um-fenomeno-da-musica_a300700/1"
          name="Beyoncé"
        />
        <Person
          description="Bob Marley (1945-1981) foi um cantor, compositor e guitarrista jamaicano, responsável
por tornar o reggae um ritmo conhecido mundialmente. Foi também um dos maiores
representantes do movimento religioso Rastafári."
          image="/bob-marley.jpg"
          imageFont="https://www.musicjournal.com.br/bob-marley-serie-de-documentarios-legacy-continua-com-o-episodio-women-rising/"
          name="Bob Marley"
        />
        <h3 className={styles['list-title']}>Esporte</h3>
        <Person
          description="O velocista norte-americano foi o primeiro atleta na história a vencer quatro
ouros numa mesma Olimpíada. Owens venceu os 100 e 200 metros rasos,
o salto em distância e o rezevamento 4×100."
          image="/jesse.webp"
          imageFont="https://www.swishappeal.com/2020/5/21/21264343/jesse-owens-underdog-achievement-underdog-psychology-underdog-theories-underdog-strategies-winning"
          name="Jesse Owens"
        />
        <Person
          description='Pelé (1940) é um ex-jogador brasileiro de futebol. Conhecido como "Rei
Pelé", encantou o mundo com seus dribles e passes. Foi designado o
Embaixador Mundial do Futebol. Foi eleito o "Atleta do Século". Levou o
Santos Futebol Clube, onde atuou por mais de duas décadas, a ganhar
mais de quarenta títulos. Foi artilheiro do campeonato paulista, ganhou o
título 11 vezes, onde 9 foram consecutivas. Foi artilheiro da Taça Brasil,
da Taça Libertadores e do Torneio Rio São Paulo. Fez sua estreia na
Seleção Brasileira com apenas 17 anos, incompletos, onde só se
despediu em 1971. Jogou no New York Cosmos de 1975 a 1977. Foi
Ministro dos Esportes entre os anos de 1995 e 1998.'
          image="/pele.jpg"
          imageFont="https://www.britannica.com/biography/Pele-Brazilian-athlete"
          name="Pelé"
        />
        <Person
          description="Simone Arianne Biles é uma ginasta profissional dos Estados Unidos,
especialista na ginástica artística, vencedora de vinte e cinco medalhas em
campeonatos mundiais, sendo dezenove delas de ouro. É a ginasta mais
condecorada na história do seu país em mundiais"
          image="/simone.jpg"
          imageFont="https://www.britannica.com/biography/Simone-Biles"
          name="Simone Biles"
        />
        <Person
          description="Usain St. Leo Bolt, OJ, OD é um ex-velocista jamaicano multicampeão olímpico
e mundial nessa modalidade. É o único atleta na história a tornar-se tricampeão
em duas modalidades de pista em Jogos Olímpicos de forma consecutiva e
bicampeão também de forma consecutiva na modalidade revezamento 4 x 100
metros"
          image="/bolt.webp"
          imageFont="https://www.aljazeera.com/sports/2020/8/25/coronavirus-catches-up-with-usain-bolt-worlds-fastest-man"
          name="Usain Bolt"
        />
        <Person
          description="Considerado por muitos o maior da história do basquete, Michael Jordan é um
ex-jogador que atuou na NBA entre 1984 e 2003, se tornando hexacampeão
pelo Chicago Bulls. Além disso, foi medalhista de ouro nas Olimpíadas de
1984, em Los Angeles, e em 1992, em Barcelona, onde defendeu a seleção
americana que ficou conhecida como Dream Team."
          image="/jordan.webp"
          imageFont="https://www.insider.com/the-last-dance-shifted-stance-jordan-lebron-goat-debate-2020-5"
          name="Michael Jordan"
        />
        <h3 className={styles['list-title']}>Ciência</h3>
        <Person
          description="Coffin foi professor de matemática e língua românica da Universidade Wiley, no
estado norte-americano do Texas. Formou-se e concluiu o mestrado na
Universidade Fisk, uma instituição de ensino historicamente negra do
Tennessee, e, em 1889, tornou-se o primeiro afro-americano a obter um
doutorado em biologia pela Illinois Wesleyan University"
          image="/Alfred_Oscar_Coffin.jpg"
          imageFont="https://en.wikipedia.org/wiki/Alfred_Oscar_Coffin"
          name="Alfred Oscar Coffin"
        />
        <Person
          description="Enedina Alves Marques foi a primeira mulher negra a se formar em engenharia
no Brasil. Nascida em 1913, de família pobre, ela cursou engenharia e se
formou aos 30 anos no Instituto de Engenharia do Paraná (IEP). Em agosto de
1981, foi vítima de um infarte."
          image="/Enedina-Marques-1-1009x646.jpg"
          imageFont="https://afrohistoricos.com.br/personalidade/enedina-alves-marques/"
          name="Enedina Alves"
        />
        <h3 className={styles['list-title']}>Cinema</h3>
        <Person
          description="O filme Pantera Negra, dirigido por Ryan Coogler (EUA, 2018), foi indicado a
categoria de Melhor Filme do Oscar 2019. A narrativa apresenta de forma
ficcional a cultura e a diáspora africana no ocidente, tendo T’Challa como
protagonista, o rei de Wakanda. Com maioria do elenco negro, vemos que o
cinema tem acompanhado o movimento da sociedade com pautas que
evidenciam a representatividade."
          image="/zizek-pantera-negra-blog.jpg"
          imageFont="https://blogdaboitempo.com.br/2018/02/27/zizek-dois-panteras-negras/"
          name="Pantera Negra"
        />
        <Person
          description="Estrelas Além do Tempo conta uma história praticamente desconhecida e
quase inacreditável: nos anos 1960, quando as leis de segregação racial
ainda estavam em vigor nos Estados Unidos, um grupo de mulheres
negras foi fundamental para o avanço tecnológico que permitiu a ida do
primeiro americano ao espaço, atuando como “computadores”,
responsáveis pelos complicados cálculos matemáticos envolvidos na
missão."
          image="/hidden-figures.jpg"
          imageFont="https://veja.abril.com.br/blog/e-tudo-historia/estrelas-alem-do-tempo-historia-real-e-ainda-mais-otimista/"
          name="Estrelas além do tempo"
        />
      </div>
    </div>
  );
};

export default Page2;

import styles from './index.module.css';

const Page3: React.FC = () => {
  return (
    <div
      className={`${styles['pv-16']} ${styles['row-gap-8']} ${styles['mt-24']}`}
      style={{ paddingBottom: '32px' }}
    >
      <h3 style={{ margin: 0, textAlign: 'center' }}>
        Desigualdade racial no Brasil
      </h3>
      <div className={`${styles.columns}`}>
        <div className={`${styles.columns} ${styles['flex-column']}`}>
          <p>
            Definição:{' '}
            <cite>
              A <strong>desigualdade racial</strong> é o resultado de distinções
              sociais hierárquicas entre grupos étnicos dentro de uma sociedade
              e, muitas vezes estabelecida com base em características como a
              cor da pele e outras características físicas ou origem e cultura
              de um indivíduo.
            </cite>
          </p>
          <small
            style={{
              color: '#56504c',
              fontWeight: 'normal',
              fontSize: '.875rem',
            }}
          >
            Acesse:{' '}
            <a href="https://www.youtube.com/watch?v=ufbZkexu7E0">
              https://www.youtube.com/watch?v=ufbZkexu7E0
            </a>
          </small>
        </div>
        <figure>
          <img
            src="/grafico.png"
            alt=""
            aria-hidden
            style={{ width: '100%' }}
          />
        </figure>
      </div>
      <h3 style={{ margin: 0, textAlign: 'center' }}>
        Desigualdade racial no Brasil
      </h3>
      <div className={`${styles.columns}`}>
        <figure>
          <img
            src="/o-que-é-racismo-estrutural__capa-1.png"
            alt=""
            aria-hidden
            style={{ width: '100%' }}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://desenvolver-rs.com.br/2020/09/17/o-que-e-racismo-estrutural/">
              https://desenvolver-rs.com.br/2020/09/17/o-que-e-racismo-estrutural/
            </a>
          </figcaption>
        </figure>
        <div className={`${styles.columns} ${styles['flex-column']}`}>
          <p>
            Segundo o portal Brasil de Direitos,{' '}
            <strong>racismo estrutural</strong> é a “naturalização de ações,
            hábitos, situações, falas e pensamentos que já fazem parte da vida
            cotidiana do povo brasileiro, e que promovem, direta ou
            indiretamente, a segregação ou o preconceito racial.
          </p>
          <small
            style={{
              color: '#56504c',
              fontWeight: 'normal',
              fontSize: '.875rem',
            }}
          >
            Acesse:{' '}
            <a href="https://www.youtube.com/watch?v=Ia3NrSoTSXk">
              https://www.youtube.com/watch?v=Ia3NrSoTSXk
            </a>
          </small>
        </div>
      </div>
      <h3 style={{ margin: 0, textAlign: 'center' }}>
        Como é ser negro no Brasil, relato
      </h3>
      <div className={`${styles.columns}`}>
        <small
          style={{
            color: '#56504c',
            fontWeight: 'normal',
            fontSize: '.875rem',
          }}
        >
          Acesse:{' '}
          <a href="https://www.youtube.com/watch?v=fl6tvDlTJbg">
            https://www.youtube.com/watch?v=fl6tvDlTJbg
          </a>
        </small>
      </div>
      <h3 style={{ margin: 0, textAlign: 'center' }}>
        Expressões racistas que usamos sem perceber:
      </h3>
      <div className={`${styles.columns}`}>
        <small
          style={{
            color: '#56504c',
            fontWeight: 'normal',
            fontSize: '.875rem',
          }}
        >
          Acesse:{' '}
          <a href="https://youtu.be/E_BjYPOE3ag">
            https://youtu.be/E_BjYPOE3ag
          </a>
        </small>
      </div>
      <h3 style={{ margin: 0, textAlign: 'center' }}>Colorismo</h3>
      <div className={`${styles.columns}`}>
        <figure>
          <img
            src="/negro-de-pele-clara.jpg"
            alt=""
            aria-hidden
            style={{ width: '100%' }}
          />
          <figcaption>
            Fonte:{' '}
            <a href="https://cearacriolo.com.br/novo/colorismo-ser-negro-de-pele-clara-e-classe-media-nao-me-protege-do-racismo/">
              https://cearacriolo.com.br/novo/colorismo-ser-negro-de-pele-clara-e-classe-media-nao-me-protege-do-racismo/
            </a>
          </figcaption>
        </figure>
        <div className={`${styles.columns} ${styles['flex-column']}`}>
          <p>
            O colorismo* ou a pigmentocracia é a discriminação pela cor da pele
            e é muito comum em países que sofreram a colonização europeia e em
            países pós-escravocratas. De uma maneira simplificada, o termo quer
            dizer que, quanto mais pigmentada uma pessoa, mais exclusão e
            discriminação essa pessoa irá sofrer
          </p>
          <small
            style={{
              color: '#56504c',
              fontWeight: 'normal',
              fontSize: '.875rem',
            }}
          >
            Acesse:{' '}
            <a href="https://www.youtube.com/watch?v=rrcz2l-Vb5I">
              https://www.youtube.com/watch?v=rrcz2l-Vb5I
            </a>
          </small>
        </div>
      </div>
      <h3 style={{ margin: 0, textAlign: 'center' }}>Apropriação cultural</h3>
      <div className={`${styles.columns}`}>
        <p>
          <strong>Apropriação cultural</strong> é quando você adota alguns
          elementos específicos de uma cultura distinta à sua. Por exemplo,
          formas de vestir ou adorno pessoal (turbantes, tranças), música e
          arte, religião, língua ou comportamento social (gírias
        </p>
        <small
          style={{
            color: '#56504c',
            fontWeight: 'normal',
            fontSize: '.875rem',
          }}
        >
          Acesse:{' '}
          <a href="https://www.youtube.com/watch?v=8Q_H99xE9_U">
            https://www.youtube.com/watch?v=8Q_H99xE9_U
          </a>
        </small>
      </div>
    </div>
  );
};

export default Page3;

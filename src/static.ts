import fs from 'fs/promises'
import path from 'path'
import { buildFeed } from './feed.js'
import { initCache } from './cache.js'

const BASE_URL = 'https://stejfen.github.io/raiplaysound-feed'

const podcasts = [
  {
    title: 'Il ruggito del coniglio',
    path: 'programmi/ilruggitodelconiglio'
  },
  {
    title: 'Radio3 Scienza',
    path: 'programmi/radio3scienza'
  },
  {
    title: 'Zapping',
    path: 'programmi/zapping'
  },
  {
    title: "Radio anch'io",
    path: 'programmi/radioanchio'
  },
  {
    title: 'Radio3 Mondo',
    path: 'programmi/radio3mondo'
  },
  {
    title: 'Eta Beta',
    path: 'programmi/etabeta'
  },
  {
    title: 'Detectives - Casi risolti e irrisolti',
    path: 'programmi/detectives-casirisoltieirrisolti'
  },
  {
    title: "L'edicola di Radio1",
    path: 'programmi/ledicoladiradio1'
  },
  {
    title: 'Prima Pagina',
    path: 'programmi/primapagina'
  },
  {
    title: 'Revolution',
    path: 'programmi/revolution'
  },
  {
    title: 'Tutta la città ne parla',
    path: 'programmi/tuttalacittaneparla'
  },
  {
    title: 'Tra poco in edicola',
    path: 'programmi/trapocoinedicola'
  },
    {
    title: 'Lillo e Greg 610',
    path: 'programmi/lilloegreg610'
  },
  {
    title: 'Un giorno da pecora',
    path: 'programmi/ungiornodapecora'
  }
]

const audiobooks = [
  {
    title: 'Emilio Salgari - Le meraviglie del Duemila',
    path: 'audiolibri/lemeravigliedelduemila'
  },
  {
    title: 'Giancarlo Liviano D`Arcangelo - Andai, dentro la notte illuminata',
    path: 'audiolibri/andaidentrolanotteilluminata'
  },
  {
    title: 'Toni Morrison - Amatissima',
    path: 'audiolibri/amatissima'
  },
  {
    title: 'Achille Giovanni Cagna - Alpinisti ciabattoni',
    path: 'audiolibri/alpinisticiabattoni'
  },
  {
    title: 'Grazia Deledda - Canne al vento',
    path: 'audiolibri/cannealvento'
  },
  {
    title: 'Grazia Deledda - Cenere',
    path: 'audiolibri/cenere'
  },
  {
    title: 'Mario Rigoni Stern - Chissà dove ero quel 25 aprile',
    path: 'audiolibri/chissadoveroquel25aprile'
  },
  {
    title: 'Luigi Pirandello Ciàula scopre la luna',
    path: 'audiolibri/ciaulascoprelaluna'
  },
  {
    title: 'Autori Vari - Cattivo Natale',
    path: 'audiolibri/cattivonatale'
  },
  {
    title: 'Primo Levi - Cristo si è fermato a Eboli',
    path: 'audiolibri/cristosiefermatoaeboli'
  },
  {
    title: 'Mikhail Bulgakov - Cuore di cane',
    path: 'audiolibri/cuoredicane'
  },
  {
    title: 'Joseph Conrad - Cuore di tenebra',
    path: 'audiolibri/cuoreditenebra'
  },
  {
    title: 'Giovanni Boccaccio - Decamerone',
    path: 'audiolibri/decamerone'
  },
  {
    title: 'Raymond Carver - Dì alle donne che usciamo',
    path: 'audiolibri/dialledonnecheusciamo'
  },
  {
    title: 'Ernest Hemingway - Dieci indiani e campo indiano',
    path: 'audiolibri/dieciindianiecampoindiano'
  },
  {
    title: 'Raymond Carver - Distanza',
    path: 'audiolibri/distanza'
  },
  {
    title: 'Arthur Schnitzler - Doppio Sogno',
    path: 'audiolibri/doppiosogno'
  },
    {
    title: 'Knut Hamsun - Fame',
    path: 'audiolibri/fame'
  },
  {
    title: 'Antonio Gramsci - Fiabe dei Fratelli Grimm',
    path: 'audiolibri/fiabedeifratelligrimm'
  },
  {
    title: 'Vitaliano Brancati - Gli anni perduti',
    path: 'audiolibri/glianniperduti'
  },
  {
    title: 'Henry James - Giro di vite',
    path: 'audiolibri/girodivite'
  },
  {
    title: 'Ödön von Horváth - Gioventù senza dio',
    path: 'audiolibri/gioventusenzadio'
  },
  {
    title: 'Giorgio Bassani - Gli occhiali d`oro',
    path: 'audiolibri/gliocchialidoro'
  },
  {
    title: 'Ernest Hemingway - Grande fiume dai due cuori',
    path: 'audiolibri/grandefiumedaiduecuori'
  },
  {
    title: 'Giorgio Bassani - Gli ultimi anni di Clelia Trotti',
    path: 'audiolibri/gliultimiannidicleliatrotti'
  },
  {
    title: 'Bohumil Hrabal - Ho servito il re d`Inghilterra',
    path: 'audiolibri/hoservitoilredinghilterra'
  },
  {
    title: 'Giovanni Verga - I Malavoglia',
    path: 'audiolibri/imalavoglia'
  },
  {
    title: 'John Reed - I dieci giorni che sconvolsero il mondo',
    path: 'audiolibri/idiecigiornichesconvolseroilmondo'
  },
  {
    title: 'Goethe - I dolori del giovane Werther',
    path: 'audiolibri/idoloridelgiovanewerther'
  },
  {
    title: 'Giuseppe Bandi - I mille da Genova a Capua',
    path: 'audiolibri/imilledagenovaacapua'
  },
  {
    title: 'Giovanni Manzoni - I promessi sposi',
    path: 'audiolibri/ipromessisposi'
  },
  {
    title: 'Franz Werfel - I quaranta giorni del Mussa Dagh',
    path: 'audiolibri/iquarantagiornidelmussadagh'
  },
  {
    title: 'Ferenč Molnar - I ragazzi della Via Pal',
    path: 'audiolibri/iragazzidellaviapal'
  },
  {
    title: 'Luigi Pirandello - I vecchi e i giovani',
    path: 'audiolibri/ivecchieigiovani'
  },
  {
    title: 'Marco Polo - Il milione',
    path: 'audiolibri/ilmilione'
  },
  {
    title: 'Vitaliano Brancati - Il bell`Antonio',
    path: 'audiolibri/ilbellantonio'
  },
  {
    title: 'Cesare Pavese - Il compagno',
    path: 'audiolibri/ilcompagno'
  },
  {
    title: 'Guido Morselli - Il comunista',
    path: 'audiolibri/ilcomunista'
  },
  {
    title: 'Luigi Pirandello - Il fu Mattia Pascal',
    path: 'audiolibri/ilfumattiapascal'
  },
  {
    title: 'Vamba - Il giornalino di Gianburrasca',
    path: 'audiolibri/ilgiornalinodigianburrasca'
  },
  {
    title: 'Hermann Hesse - Il giuoco delle perle di vetro',
    path: 'audiolibri/ilgiuocodelleperledivetro'
  },
  {
    title: 'Salvatore Satta - Il giorno del giudizio',
    path: 'audiolibri/ilgiornodelgiudizio'
  },
  {
    title: 'Mikhail Bulgakov - Il maestro e Margherita',
    path: 'audiolibri/ilmaestroemargherita'
  },
  {
    title: 'Nikolaj Gogol - Il mantello',
    path: 'audiolibri/ilmantello'
  },
  {
    title: 'Charles Dickens - Il mistero di Edwin Drood',
    path: 'audiolibri/ilmisterodiedwindrood'
  },
  {
    title: 'Matthew G. Lewis - Il monaco',
    path: 'audiolibri/ilmonaco'
  },
  {
    title: 'Paolo Volponi - Il pianeta irritabile',
    path: 'audiolibri/ilpianetairritabile'
  },
  {
    title: 'Stendahl - Il rosso e il nero',
    path: 'audiolibri/ilrossoeilnero'
  },
  {
    title: 'Nikolaj Gogol - Il ritratto',
    path: 'audiolibri/ilritratto'
  },
  {
    title: 'Oscar Wilde - Il ritratto di Dorian Gray',
    path: 'audiolibri/ilritrattodidoriangray'
  },
  {
    title: 'Anna Maria Ortese - L`iguana',
    path: 'aaudiolibri/liguana'
  },
  {
    title: 'Selma Lagerlöf - L`imperatore di Portugallia',
    path: 'audiolibri/limperatorediportugallia'
  },
  {
    title: 'Italo Svevo - La coscienza di Zeno',
    path: 'audiolibri/lacoscienzadizeno'
  },
    {
    title: 'Edith Wharton - La finestra della Signora Manstey e altri racconti',
    path: 'audiolibri/lafinestradellasignoramansteyealtriracconti'
  },
  {
    title: 'Cesare Pavese - La luna e i falò',
    path: 'audiolibri/lalunaeifalo'
  },
  {
    title: 'Albert Camus - La peste',
    path: 'audiolibri/lapeste'
  },
  {
    title: 'W. M. Thackeray - Le memorie di Barry Lindon',
    path: 'audiolibri/lememoriedibarrylindon'
  },
  {
    title: 'Anonimo - Lazarillo de Tormes',
    path: 'audiolibri/lazarillodetormes'
  },
  {
    title: 'Philip K. Dick - Ma gli androidi sognano le pecore elettriche?',
    path: 'audiolibri/magliandroidisognanopecoreelettriche'
  },
  {
    title: 'Ivan Aleksandrovič Gončarov - Oblomov',
    path: 'audiolibri/oblomov'
  },
  {
    title: 'Nikolaj Gogol - Prospettova Nevskij',
    path: 'audiolibri/prospettivanevskij'
  },
  {
    title: 'Ryunosuke Akutagawa - Racconti',
    path: 'audiolibri/raccontidiryunosukeakutagawa'
  },
  {
    title: 'Luigi Pirandello - Racconti',
    path: 'audiolibri/raccontidiluigipirandello'
  },
  {
    title: 'Raymond Carver - Racconti',
    path: 'audiolibri/raccontidiraymondcarver'
  },
  {
    title: 'Lev Tolstoj - Racconti',
    path: 'audiolibri/raccontidilevtolstoj'
  },
  {
    title: 'Katherine Mansfield - Racconti',
    path: 'audiolibri/raccontidikatherinemansfield'
  },
  {
    title: 'Italo Calvino - Racconti',
    path: 'audiolibri/raccontidiitalocalvino'
  },
  {
    title: 'Franz Kafka - Racconti',
    path: 'audiolibri/raccontidifranzkafka'
  },
  {
    title: 'Ernest Hemingway - Racconti',
    path: 'audiolibri/raccontidiernesthemingway'
  },
  {
    title: 'Anton Checov - Racconti',
    path: 'audiolibri/raccontidiantoncechov'
  },
  {
    title: 'Pier Paolo Pasolini - Ragazzi di vita',
    path: 'audiolibri/ragazzidivita'
  },
    {
    title: 'Italo Calvino - Ultimo viene il corvo',
    path: 'audiolibri/ultimovieneilcorvo'
  },
  {
    title: 'Un anno sull`altipiano',
    path: 'audiolibri/unannosullaltipiano'
  },
  {
    title: 'Pier Paolo Pasolini - Una vita violenta',
    path: 'audiolibri/unavitaviolenta'
  },
  {
    title: 'Luigi Pirandello - Uno, nessuno, centomila',
    path: 'audiolibri/unonessunoecentomila'
  },
  {
    title: 'Alexandre Dumas - Venti anni dopo',
    path: 'audiolibri/ventannidopo'
  },
  {
    title: 'Bel Ami',
    path: 'audiolibri/belami'
  }
]

const allFeeds = [...podcasts, ...audiobooks]

const sortedPodcasts = [...podcasts].sort((a, b) =>
  a.title.localeCompare(b.title, 'it', {
    sensitivity: 'base'
  })
)

const sortedAudiobooks = [...audiobooks].sort((a, b) =>
  a.title.localeCompare(b.title, 'it', {
    sensitivity: 'base'
  })
)

await initCache()
await fs.mkdir('out/rss', { recursive: true })

for (const feed of allFeeds) {
  try {
    console.log(`Generating ${feed.title}: ${feed.path}`)

    const xml = await buildFeed(feed.path)
    const file = path.join('out/rss', `${feed.path}.xml`)

    await fs.mkdir(path.dirname(file), { recursive: true })
    await fs.writeFile(file, xml)

    console.log(`Generated ${file}`)
  } catch (err) {
    console.error(`Skipped ${feed.title} (${feed.path})`)
    console.error(err)
  }
}

function markdownRows(feeds: typeof allFeeds) {
  return feeds
    .map(feed => {
      const feedUrl = `${BASE_URL}/rss/${feed.path}.xml`
      return `| ${feed.title} | ${feedUrl} |`
    })
    .join('\n')
}

function htmlRows(feeds: typeof allFeeds) {
  return feeds
    .map(feed => {
      const feedUrl = `${BASE_URL}/rss/${feed.path}.xml`

      return `<tr>
  <td>${feed.title}</td>
  <td><a href="${feedUrl}">${feedUrl}</a></td>
</tr>`
    })
    .join('\n')
}

const podcastRows = markdownRows(sortedPodcasts)
const audiobookRows = markdownRows(sortedAudiobooks)

const readme = `# RaiPlay Sound Feed

Questo repository genera dei feed RSS per i programmi di RaiPlay Sound, e sono generati automaticamente tramite GitHub Actions e GitHub Pages. In modo da potersi abbonare/ascoltare su qualsiasi client podcast  e non esclusivamente tramite l’app RaiPlaySound. 

Questo progetto è una evoluzione di un mio [precedente repository](https://github.com/giuliomagnifico/raiplay-feed),  il quale aveva il problema di non risolvere correttamente la redirect ed era quindi necessario scaricare il file prima di riprodurlo certi podcast. Adesso gli URLs vengono risolti fino alla CDN finale Rai, evitando i problemi causati dai redirect \`relinkerServlet.htm\` con alcuni client podcast (i.e. [PocketCasts](https://pocketcasts.com/)).


> [!TIP]
> È una versione modificata del repository [frammenti/raiplaysoundrss](https://github.com/frammenti/raiplaysoundrss) costruita per poter funzionare usando solo su GitHub, in modo da essere indipendente da un server esterno. 


## Podcast

| Programma | Feed RSS |
|----------|----------|
${podcastRows}

## Audiolibri

| Audiolibro | Feed RSS |
|------------|----------|
${audiobookRows}

## Abbonarsi o aggiungere un feed

Per abbonarsi basta copiare l'URL del feed dalla tabella nel lettore podcast.

Per aggiungere programmi o audiolibri puoi forkare il repository e aggiungere manualmente i feed, oppure aprire una Pull Request modificando [static.ts](https://github.com/giuliomagnifico/raiplaysound-feed/blob/main/src/static.ts), esempio:

\`\`\`ts
{
  title: 'Radio3 Scienza',
  path: 'programmi/radio3scienza'
}
\`\`\`

oppure per un audiolibro:

\`\`\`ts
{
  title: 'Arancia meccanica',
  path: 'audiolibri/aranciameccanica'
}
\`\`\`

> [!NOTE]
> la tabella con i feeds o audiolibri nuovi si aggiorna  automaticamente con il nuovo feed (in ordine alfabetico) quando viene eseguita la Action, non aggiungere o modificare manualmente la tabella.

## Aggiornamento ogni ora

I feed vengono aggiornati automaticamente tramite GitHub Actions ogni ora e viene controllata la validità degli URL vecchi ogni 14 giorni.
`
await fs.writeFile('README.md', readme)

await fs.writeFile(
  'out/index.html',
  `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>RaiPlay Sound Feed</title>
</head>
<body>
<h1>RaiPlay Sound Feed</h1>

<p>Feed RSS statici per RaiPlay Sound con URL CDN Rai già risolti.</p>

<h2>Podcast</h2>
<table border="1">
<tr>
<th>Podcast</th>
<th>Feed RSS</th>
</tr>
${htmlRows(sortedPodcasts)}
</table>

<h2>Audiolibri</h2>
<table border="1">
<tr>
<th>Audiolibro</th>
<th>Feed RSS</th>
</tr>
${htmlRows(sortedAudiobooks)}
</table>

</body>
</html>
`
)

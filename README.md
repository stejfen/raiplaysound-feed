# RaiPlay Sound Feed

Questo repository genera dei feed RSS per i programmi di RaiPlay Sound, e sono generati automaticamente tramite GitHub Actions e GitHub Pages. In modo da potersi abbonare/ascoltare su qualsiasi client podcast  e non esclusivamente tramite l’app RaiPlaySound. 

Questo progetto è una evoluzione di un mio [precedente repository](https://github.com/giuliomagnifico/raiplay-feed),  il quale aveva il problema di non risolvere correttamente la redirect ed era quindi necessario scaricare il file prima di riprodurlo certi podcast. Adesso gli URLs vengono risolti fino alla CDN finale Rai, evitando i problemi causati dai redirect `relinkerServlet.htm` con alcuni client podcast (i.e. [PocketCasts](https://pocketcasts.com/)).


> [!TIP]
> È una versione modificata del repository [frammenti/raiplaysoundrss](https://github.com/frammenti/raiplaysoundrss) costruita per poter funzionare usando solo su GitHub, in modo da essere indipendente da un server esterno. 


## Podcast

| Programma | Feed RSS |
|----------|----------|
| Detectives - Casi risolti e irrisolti | https://stejfen.github.io/raiplaysound-feed/rss/programmi/detectives-casirisoltieirrisolti.xml |
| Eta Beta | https://stejfen.github.io/raiplaysound-feed/rss/programmi/etabeta.xml |
| Il ruggito del coniglio | https://stejfen.github.io/raiplaysound-feed/rss/programmi/ilruggitodelconiglio.xml |
| L'edicola di Radio1 | https://stejfen.github.io/raiplaysound-feed/rss/programmi/ledicoladiradio1.xml |
| Lillo e Greg 610 | https://stejfen.github.io/raiplaysound-feed/rss/programmi/lilloegreg610.xml |
| Prima Pagina | https://stejfen.github.io/raiplaysound-feed/rss/programmi/primapagina.xml |
| Radio anch'io | https://stejfen.github.io/raiplaysound-feed/rss/programmi/radioanchio.xml |
| Radio3 Mondo | https://stejfen.github.io/raiplaysound-feed/rss/programmi/radio3mondo.xml |
| Radio3 Scienza | https://stejfen.github.io/raiplaysound-feed/rss/programmi/radio3scienza.xml |
| Revolution | https://stejfen.github.io/raiplaysound-feed/rss/programmi/revolution.xml |
| Tra poco in edicola | https://stejfen.github.io/raiplaysound-feed/rss/programmi/trapocoinedicola.xml |
| Tutta la città ne parla | https://stejfen.github.io/raiplaysound-feed/rss/programmi/tuttalacittaneparla.xml |
| Un giorno da pecora | https://stejfen.github.io/raiplaysound-feed/rss/programmi/ungiornodapecora.xml |
| Zapping | https://stejfen.github.io/raiplaysound-feed/rss/programmi/zapping.xml |

## Audiolibri

| Audiolibro | Feed RSS |
|------------|----------|
| Achille Giovanni Cagna - Alpinisti ciabattoni | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/alpinisticiabattoni.xml |
| Albert Camus - La peste | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/lapeste.xml |
| Alexandre Dumas - Venti anni dopo | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ventannidopo.xml |
| Anna Maria Ortese - L`iguana | https://stejfen.github.io/raiplaysound-feed/rss/aaudiolibri/liguana.xml |
| Anonimo - Lazarillo de Tormes | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/lazarillodetormes.xml |
| Anton Checov - Racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/raccontidiantoncechov.xml |
| Antonio Gramsci - Fiabe dei Fratelli Grimm | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/fiabedeifratelligrimm.xml |
| Arthur Schnitzler - Doppio Sogno | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/doppiosogno.xml |
| Autori Vari - Cattivo Natale | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/cattivonatale.xml |
| Bel Ami | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/belami.xml |
| Bohumil Hrabal - Ho servito il re d`Inghilterra | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/hoservitoilredinghilterra.xml |
| Cesare Pavese - Il compagno | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilcompagno.xml |
| Cesare Pavese - La luna e i falò | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/lalunaeifalo.xml |
| Charles Dickens - Il mistero di Edwin Drood | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilmisterodiedwindrood.xml |
| Edith Wharton - La finestra della Signora Manstey e altri racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/lafinestradellasignoramansteyealtriracconti.xml |
| Emilio Salgari - Le meraviglie del Duemila | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/lemeravigliedelduemila.xml |
| Ernest Hemingway - Dieci indiani e campo indiano | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/dieciindianiecampoindiano.xml |
| Ernest Hemingway - Grande fiume dai due cuori | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/grandefiumedaiduecuori.xml |
| Ernest Hemingway - Racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/raccontidiernesthemingway.xml |
| Ferenč Molnar - I ragazzi della Via Pal | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/iragazzidellaviapal.xml |
| Franz Kafka - Racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/raccontidifranzkafka.xml |
| Franz Werfel - I quaranta giorni del Mussa Dagh | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/iquarantagiornidelmussadagh.xml |
| Giancarlo Liviano D`Arcangelo - Andai, dentro la notte illuminata | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/andaidentrolanotteilluminata.xml |
| Giorgio Bassani - Gli occhiali d`oro | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/gliocchialidoro.xml |
| Giorgio Bassani - Gli ultimi anni di Clelia Trotti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/gliultimiannidicleliatrotti.xml |
| Giovanni Boccaccio - Decamerone | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/decamerone.xml |
| Giovanni Manzoni - I promessi sposi | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ipromessisposi.xml |
| Giovanni Verga - I Malavoglia | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/imalavoglia.xml |
| Giuseppe Bandi - I mille da Genova a Capua | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/imilledagenovaacapua.xml |
| Goethe - I dolori del giovane Werther | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/idoloridelgiovanewerther.xml |
| Grazia Deledda - Canne al vento | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/cannealvento.xml |
| Grazia Deledda - Cenere | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/cenere.xml |
| Guido Morselli - Il comunista | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilcomunista.xml |
| Henry James - Giro di vite | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/girodivite.xml |
| Hermann Hesse - Il giuoco delle perle di vetro | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilgiuocodelleperledivetro.xml |
| Italo Calvino - Racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/raccontidiitalocalvino.xml |
| Italo Calvino - Ultimo viene il corvo | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ultimovieneilcorvo.xml |
| Italo Svevo - La coscienza di Zeno | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/lacoscienzadizeno.xml |
| Ivan Aleksandrovič Gončarov - Oblomov | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/oblomov.xml |
| John Reed - I dieci giorni che sconvolsero il mondo | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/idiecigiornichesconvolseroilmondo.xml |
| Joseph Conrad - Cuore di tenebra | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/cuoreditenebra.xml |
| Katherine Mansfield - Racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/raccontidikatherinemansfield.xml |
| Knut Hamsun - Fame | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/fame.xml |
| Lev Tolstoj - Racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/raccontidilevtolstoj.xml |
| Luigi Pirandello - I vecchi e i giovani | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ivecchieigiovani.xml |
| Luigi Pirandello - Il fu Mattia Pascal | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilfumattiapascal.xml |
| Luigi Pirandello - Racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/raccontidiluigipirandello.xml |
| Luigi Pirandello - Uno, nessuno, centomila | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/unonessunoecentomila.xml |
| Luigi Pirandello Ciàula scopre la luna | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ciaulascoprelaluna.xml |
| Marco Polo - Il milione | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilmilione.xml |
| Mario Rigoni Stern - Chissà dove ero quel 25 aprile | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/chissadoveroquel25aprile.xml |
| Matthew G. Lewis - Il monaco | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilmonaco.xml |
| Mikhail Bulgakov - Cuore di cane | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/cuoredicane.xml |
| Mikhail Bulgakov - Il maestro e Margherita | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilmaestroemargherita.xml |
| Nikolaj Gogol - Il mantello | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilmantello.xml |
| Nikolaj Gogol - Il ritratto | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilritratto.xml |
| Nikolaj Gogol - Prospettova Nevskij | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/prospettivanevskij.xml |
| Ödön von Horváth - Gioventù senza dio | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/gioventusenzadio.xml |
| Oscar Wilde - Il ritratto di Dorian Gray | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilritrattodidoriangray.xml |
| Paolo Volponi - Il pianeta irritabile | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilpianetairritabile.xml |
| Philip K. Dick - Ma gli androidi sognano le pecore elettriche? | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/magliandroidisognanopecoreelettriche.xml |
| Pier Paolo Pasolini - Ragazzi di vita | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ragazzidivita.xml |
| Pier Paolo Pasolini - Una vita violenta | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/unavitaviolenta.xml |
| Primo Levi - Cristo si è fermato a Eboli | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/cristosiefermatoaeboli.xml |
| Raymond Carver - Dì alle donne che usciamo | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/dialledonnecheusciamo.xml |
| Raymond Carver - Distanza | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/distanza.xml |
| Raymond Carver - Racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/raccontidiraymondcarver.xml |
| Ryunosuke Akutagawa - Racconti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/raccontidiryunosukeakutagawa.xml |
| Salvatore Satta - Il giorno del giudizio | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilgiornodelgiudizio.xml |
| Selma Lagerlöf - L`imperatore di Portugallia | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/limperatorediportugallia.xml |
| Stendahl - Il rosso e il nero | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilrossoeilnero.xml |
| Toni Morrison - Amatissima | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/amatissima.xml |
| Un anno sull`altipiano | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/unannosullaltipiano.xml |
| Vamba - Il giornalino di Gianburrasca | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilgiornalinodigianburrasca.xml |
| Vitaliano Brancati - Gli anni perduti | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/glianniperduti.xml |
| Vitaliano Brancati - Il bell`Antonio | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/ilbellantonio.xml |
| W. M. Thackeray - Le memorie di Barry Lindon | https://stejfen.github.io/raiplaysound-feed/rss/audiolibri/lememoriedibarrylindon.xml |

## Abbonarsi o aggiungere un feed

Per abbonarsi basta copiare l'URL del feed dalla tabella nel lettore podcast.

Per aggiungere programmi o audiolibri puoi forkare il repository e aggiungere manualmente i feed, oppure aprire una Pull Request modificando [static.ts](https://github.com/giuliomagnifico/raiplaysound-feed/blob/main/src/static.ts), esempio:

```ts
{
  title: 'Radio3 Scienza',
  path: 'programmi/radio3scienza'
}
```

oppure per un audiolibro:

```ts
{
  title: 'Arancia meccanica',
  path: 'audiolibri/aranciameccanica'
}
```

> [!NOTE]
> la tabella con i feeds o audiolibri nuovi si aggiorna  automaticamente con il nuovo feed (in ordine alfabetico) quando viene eseguita la Action, non aggiungere o modificare manualmente la tabella.

## Aggiornamento ogni ora

I feed vengono aggiornati automaticamente tramite GitHub Actions ogni ora e viene controllata la validità degli URL vecchi ogni 14 giorni.

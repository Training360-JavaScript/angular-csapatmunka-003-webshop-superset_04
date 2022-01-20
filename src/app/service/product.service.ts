import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private list: Product[] = [
    {
      id: 1,
      catId: "strategy",
      name: "Dune: Imperium",
      description: "Befolyás, intrika és harc a Dűne univerzumában. A Dune: Imperium egy többszörösen ihletett játék, ami legfőbb motívumait és karaktereit a Dűne világából meríti, mind a Legendary Pictures által készített új feldolgozásból, mind Frank Herbert, Brian Herbert és Kevin J. Anderson kultikus irodalmi sorozatából. A Landsraad egyik nagy házának vezetőjeként emeled fel zászlód, és gyűjtöd magad köré erőid és kémeid. Háború közeleg, és a konfliktus középpontjában nem más, mint Arrakis - azaz Dűne, a sivatagbolygó áll. A Dune: Imperium egy hagyományos munkáslehelyezős játék egy kis pakliépítős mechanizmussal fűszerezve. Minden játékos egyedi vezetőkártyával indul, és az ellenfeleivel azonos paklival. A kártyák megszerzése és a paklid építése során a választásaid meghatározzák, hogy mik lesznek az erősségeid és a gyengeségeid. A kártyák lehetővé teszik, hogy ügynököket küldhess ki a játéktábla bizonyos területeire, így a paklid felépítése és fejlődése befolyásolja a stratégiát, amit a játék során alkalmazni tudsz. Lehet, hogy katonai szempontból erősebbé válsz, és több csapatot leszel képes bevetni, mint ellenfeleid, vagy olyan kártyákat is megszerezhetsz, amelyek előnyt nyújtanak számodra a játékban képviselt négy politikai frakcióval (a Császár, a Távközlési Céh, a Bene Gesserit és a Fremenek) kapcsolatban. Sok pakliépítő játékkal ellentétben itt nem játszod ki az összes kezedben levő lapot a körödben. Ehelyett minden kör elején húzol bizonyos számú lapot, és más játékosokkal felváltva lesznek az ügynök fordulóid (egy kártyát kijátszva felteheted az egyik ügynököd a játéktáblára). Amikor rád kerül a sor, és nincs már több ügynök, akit elhelyezhetsz a táblán, fel kell fedned a többi kártyádat, amelyek a Persuasion és Swords kategóriába tartozhatnak. A Persuasion lapok több kártya megszerzésére szolgálnak, a Swords lapok pedig segítenek, hogy csapataiddal megszerezhesd az aktuális kör jutalmait, amiket az érvényben levő Konfliktus kártya határoz meg. Győzd le a riválisaid harcban, lavírozz ravaszul a politikai frakciók között és szerezz értékes The Spice Must Flow kártyákat, hogy győzelemre vezesd a házadat!",
      image: "../../src/assets/image/316554.jpg",
      price: 17990,
      stock: 10,
      feature: false
    },
    {
      id: 2,
      catId: "strategy",
      name: "Arnak Elveszett Romjai",
      description: "Fedezd fel Arnak elveszett romjait! A feltérképezetlen tengerek közepén egy lakatlan szigeten a felfedezők egy ősi civilizáció nyomaira bukkannak. Te vezeted az expedíciót, ami a sziget feltárását tűzte ki céljául, Célod, hogy felfedezd a szigetet, megtaláld az elveszett kincseket és ha kell szembenézz a félelmetes őrzőkkel, mindezt azért, hogy a sziget összes titkát megismerhesd. A Lost Ruins of Arnak ötvözi a pakliépítés és a munkáslehelyezés mechanizmusát egy felfedezős, erőforrás-kezelős játékban. A hagyományos pakliépítő akciók mellett ebben a játékban a kártyákkal is aktiválható a munkáslehelyezés, és ahogy a játék folyamán a játékosok egyre többet fedeznek fel a szigetből, úgy válnak elérhetővé az új munkásakciók is. Ezen akciók némelyike erőforrásokat igényel munkások helyett, ezért nagyon fontos a szilárd erőforrás-bázis kiépítése. Körönként csak egy akciód van, ezért jól fontold meg, hogy mit választasz... minek lenne most a legnagyobb haszna? Mi az, amit később lenne jó végrehajtani? ...feltéve, hogy valaki más nem hajtja végre előtted!",
      image: "../../src/assets/image/316555.jpg",
      price: 16990,
      stock: 5,
      feature: true
    },
    {
      id: 3,
      catId: "family",
      name: "Szellemek Szigete",
      description: "Gyülekeznek a felhők a szigetünk felett; több inváziós hadsereg érkezett partjainkra, hogy meghódítsák a sziget lakosságát, kik mifelénk esedeznek védelemért. Egy igazi Paradicsom volt, ahol ti, a természet szellemei háborítatlanul élhettetek már az idők kezdete óta, de ennek már vége... Idegen földek agresszív hódítói törtek be a szigetre, hogy képükre formálják, és megtörjék évezredes békéjét. Rengessétek meg hát a földet, küldjétek harcba a dzsungel állatait, növényeit, szítsátok fel a tűzhányók lángját vagy az óceán hullámait, mert ez most a végső csata... Meg kell mentenetek a világotokat! Meg kell mentenetek a szellemek szigetét! Hódítóknak kívül tágasabb: A paradicsom meghódítása dicsőséges korszak volt. Hírnév, rabszolgák, föld és minden, amit az adhat – vagy amit el lehet venni tőle. Na, igen, ez egy perspektíva. De vajon a meghódított paradicsom is így élte ezt meg? Mit tennétek, ha egy efféle paradicsom-sziget őrző-védő szellemei lennétek, természetfeletti hatalommal és a felelősséggel, hogy mind az őslakosokat, mind a sziget teljes élővilágát meg kell védenetek? Azé a sziget, aki ezt műveli? A Szellemek szigete egy csodálatos kooperatív társasjáték (mint a Pandemic, játékosok együtt, a játék ellen), amelyben ti, a játékosok egy-egy ősi természeti erő szelleme lesztek egy olyan egzotikus szigeten, amit egyre több és több telepes lep el, nem éppen a jószándékú fajtából: jönnek, mételyezik a földet, pusztítják az őslakos népet, a dahant és a romokra a saját településeiket építsék fel. Mindezek ellen ti villámokkal sújtó viharral, cunamikkal, a vadon fenevadjaival, földindulásokkal és más hasonló apokaliptikus apróságokkal védekezhettek. De ne higgyétek, hogy olyan egyszerű lesz! Menet közben kell felnőnötök a feladathoz. Mondjuk, hogy a sziget szellemei sem töltenek minden hétvégét invazív tömegek kipaterolásával, így a veszély, ami vizeken túlról érkezik, kissé váratlanul éri őket. Aggódni azért nem kell: ha eleinte csak egy-egy kis falut tudtok is megvédeni, vagy alig egy várost árvízzel elsöpörni, szép fokozatosan erősödtök majd, emellett egyre mélyebbre plántáljátok a félelmet a telepesek szívébe, akik ha eleget láttak, bizony elkotródnak maguktól is. A sziget szellemei: Minden szellem kicsit másként működik, másként erősödik, vagyis más akciók közül választhat növekedéskor, más ütemben gyarapodnak a kártyái, vagy szerez több energiát körről körre, vagyis más a dinamikája. Mások az egyedi erő kártyái és az ősi erői, ennek megfelelően másban erős. Van, amelyik támadásban, van amelyik védekezésben, félelem generálásban, irányításban – vagyis a dahanok és telepesek területeken való rendezgetésében –, és persze van amelyik valami más ravaszságban. Vannak komplex és kevésbé komplex szellemek, így azok, akik számára még új a játék, nem lesznek egyből a mélyvízbe dobva, akik viszont ismerik, azoknak az egyébként is zavarba ejtő változatosságon túl a játék nehézségi skálázhatóságot is kínál. Meg aztán ott vannak a játékváltozatok, ellenségek, küldetések, no meg az a gyönyörű tematikus térkép – de ezekbe most nem mennék bele, mert mindaz, amit idáig olvastatok, csak nagyon zanzásított változat volt. Különben is, dolog van: Meg kell védeni a szigetet!",
      image: "../../src/assets/image/316556.jpg",
      price: 20120,
      stock: 5,
      feature: true
    },
    {
      id: 4,
      catId: "strategy",
      name: "A Mars Terraformálása",
      description: "A Mars lakhatóvá tétele: Víz, oxigén, és a megfelelő hőmérséklet...Ez a három dolog, amire biztos, hogy szükség lesz, ha a vörös bolygón képzeljük el a jövőt. Biztosítsd ezekből Te a legtöbbet, és tedd lakhatóvá a Marsot! A kezdetek: Lesznek a kezedben kártyák, amikkel különböző nyersanyagokra és előnyökre tehetsz szert. Ráadásul vannak olyan kártyák, amiknek az akcióját többször is felhasználhatod – néhány jól megválasztott lap a játék végéig nagy segítségedre lesz! Költsd el a már megszerzett MegaKreditjeid (M€)! Ez nem hangzik túl jól, igaz? De hidd el, hosszú távon kifizetődő lesz, ha a rendelkezésedre álló M€-eket hőerőművek építésébe, óceáni területek kialakításába, vagy egy új város alapításába fekteted! Ültess növényeket! Ezzel két legyet ütsz egy csapásra, mert nem csak a Mars felszínét teszed kellemesebbé, de az oxigénszintet is növelni tudod. Ráadásul a nagy metropoliszok lakói mindig örülnek a zöld felületeknek, így ha városok mellé telepíted a növényeid, még plusz pontokat is kaphatsz! A magabiztos játékosok díjakat is alapíthatnak, és ha teljesítik a feltételeket a játék végén, elnyerhetik az értük járó plusz pontokat. Csak rajtad múlik, milyen erőforrások termelését fejleszted, mire költöd a rendelkezésedre álló nyersanyagot, és milyen mérföldköveket sikerül majd elérned. A lehetőségeid száma végtelen! De vajon az előrelátásod és stratégiai érzéked is megvan hozzá, hogy a lehető legjobb döntéseket hozd meg?",
      image: "../../src/assets/image/316557.jpg",
      price: 12590,
      stock: 12,
      feature: true
    },
    {
      id: 5,
      catId: "family",
      name: "Cascadia Vadvilága",
      description: "Hozd létre a legharmonikusabb ökoszisztémát, ahol az élőhelyek és a vadon élő állatok szabadon keverednek, így alkotva egy színes egészet. A Cascadiában a játékosok azon versenyeznek, hogy létrehozzák a legváltozatosabb környezetet az észak-amerikai flóraterületen, oly módon, hogy élőhelylapkákat és vadvilágjelzőket választanak, ezekből pedig egy gyönyörű, mozaikos tájat építenek. Minden Cascadia játékot az öt állatfajhoz tartozó pontozókártyák egyedi kombinációja jellemez. Miközben a játékosok igyekeznek pontot hozó alakzatokba rendezni állataikat, egyúttal a legnagyobb összefüggő élőhelyekért is versenyeznek. Ahogyan formálják környezetüket, figyelniük kell a létrehozott élőhelyekre és az azokat benépesítő állatvilágra is, hogy megalkossák a legharmonikusabb ökoszisztémát. Egy speciális 3 hatszögletű élőhelylapkából álló alappal kezded a játékot, majd egy körben választasz egy új élőhelylapkát, amely egy vadvilágjelzővel van párosítva. Bővítsd az élőhelyedet ezzel a lapkával, és helyezed el a vadjelzőt a megfelelő élőhelye szerint. Minden élőhely lapka 1-3 féle vadvilágot ábrázol (a játékban öt élőhely található), és egy lapkára legfeljebb egy vadjelző helyezhető). A 4 lapkából álló kínálatból bármelyiket választhatod, hogy az ökoszisztémádba melyik élőhely és vadjelző illik a legjobban. Ha van elkölthető természetjelződ, akkor szabadabban választhatsz élőhely és vadjelzőt is. Ideális esetben az élőhelylapkákkal egybefüggő terepet hozhatsz létre, így a játék végi pontozásnál tiéd lehet az adott területből a legnagyobb, így bónusz pontokat kaphatsz. Ezzel egyidejűleg a vadjelzőid elhelyezésére is figyelned kell, mert az egyes vadfajtákhoz tartozó 3 pontozókártya egyike kijelöli az aktuális játék teljesíthető vadjelző mintázatát, szintén bónusz pontokért. Lehet, hogy a sólymok külön akarnak lenni a többi sólyomtól, míg a rókák más állatokat szeretnének körülfogni, a medvék pedig párban szeretnének lenni.",
      image: "../../src/assets/image/316558.jpg",
      price: 11390,
      stock: 3,
      feature: false
    },
    {
      id: 6,
      catId: "strategy",
      name: "Homályrév",
      description: "Gloomhaven egy egyedülálló taktikai, harci stratégiai társasjáték, ami nem mellesleg a legacy típusú játékok sorai között foglal helyet. Kalandorok bőrébe bújva alakítjátok a történetet egyéni képességekkel és célokkal. Együtt kell működnötök, hogy felfedezzétek a világ kazamatáit és elfeledett romjait. A zsákmányok és a tapasztalat növeli majd a képességeiteket (mint egy RPG-ben) és új helyeket jártok majd be úgy, hogy minden döntésetek hatással lesz a játék és a sztori végkimenetelére. Egy hosszú történet… Igen, ez nem az a játék, amit egy este alatt fogtok lejátszani. Több alkalom szükséges, hogy végig játszátok, akár egy év is (ha nem több) mire befejezitek a sztorit. Ez is mutatja, hogy a játék nem áll távol a szerepjátékok világától… De visszatérve a játékidőre, attól függ, hogy meddig tart a játék, hogy ki milyen tempóban halad a társasággal vagy önmagával, mert ezt a játékot is lehet egyedül játszani. Egy biztos, csak kitartó csapattal vágjatok bele és ne sajnáljátok az időt, megéri. Ha a játék újrajátszhatatlansága zavarna, ne aggódj, már erre a problémára is találtak megoldást. A a kulcsa az újrajátszásnak, ezt a szettet kell használni az első játékhoz, mert ezt le tudjátok utána szedni és megint mehet előröl az egész.A Gloomhaven egy nagyon jó szerepjáték jellegű legacy játék. Kell minimum egy angolul jól beszélő ember a csapatba és minimum egy, aki a játékszabályt kívülről tudja, az elakadás elkerülése végett. Ezen felül sok-sok időre lesz szükségetek és kiváló csapatmunkára.",
      image: "../../src/assets/image/316559.jpg",
      price: 46990,
      stock: 4,
      feature: true
    },
    {
      id: 7,
      catId: "strategy",
      name: "Root",
      description: "A Root a kaland és háború játéka 2-4 főre (de a Riverfolk kiegészítővel ez 1-6-ra módosul), melyben a vadon irányításáért küzdhetünk meg. A történet Az aljas Marquise de Cat hatalomra tört az a nagy erdőség felett és folyamatosan kizsákmányolja azt. Az uralma alatt azonban az erdő kis teremtményei összeálltak ellene, hogy felforgassák Cats birodalmát és erőforrásokra tegyenek szert. A nagy harcban az Ellenállás a Vándorok segítségét is kéri, akik a veszélyes erdei útvonalakon is tudnak mozogni. Bár jó néhányuk együttérez a Ellenállás reményeivel és álmaival, ezek a csavargók azért elég öregek hozzá, hogy emlékezzenek a nagy madarakra, akik korábban az erdőt irányították. Időközben a régió élén a büszke Fészeklakók közül kiemelkedett egy új parancsnok, aki elérheti a frakció születési előjogát. A terep előkészült egy olyan versenyhez, ami el fogja dönteni a nagy erdőség sorsát. Csak rajtatok, játékosokon áll hogy döntsetek, melyik frakció fog gyökeret verni.Összegzés Aranyos, izgalmas, innovatív. A Rootban a játékosok vezetik a narratívát, és az egyes szerepek közötti különbségek páratlan szintű interakciót és újrajátszhatóságot eredményeznek. Lehet kemény stratégiaként is játszani, de egy hétvégi családi programnak is tökéletesen megfelel. Öltsd magadra Te is egy frakció szerepét és hódítsd meg az erdőt!",
      image: "../../src/assets/image/316560.jpg",
      price: 17600,
      stock: 12,
      feature: true
    },
    {
      id: 8,
      catId: "family",
      name: "Fesztáv",
      description: "A Fesztáv nem csak szép, hanem okos is! Gyűjtsd te a legtöbb pontot a négy forduló során! Építs fészket - és építsd egymásra a lapokat!Madárbarátok készítették társasjáték-rajongóknak. A madarak kedvelőit a részletes és precíz illusztrációk és adatok, a társasjátékok rajongóit pedig a kiemelkedően igényes komponensek és extra figyelmességek (mint például a praktikus műanyag tárolók és az elpakolási) fogják lenyűgözni. Mivel a játék tervezőjének a madármegfigyelés a hobbija, így a játék kifejezetten tematikus, a 170 különböző madár adatai mind tudományos alapúak, így játék közben, de játékon kívül is, pusztán a kártyákat nézegetve is sok érdekességet tanulhatunk.",
      image: "../../src/assets/image/316561.jpg",
      price: 16990,
      stock: 8,
      feature: false
    },
    {
      id: 9,
      catId: "family",
      name: "Everdell - Az Örökfa Árnyékában",
      description: "Az ősi fa tövében állatok városai épülnek – legyen a tiéd a legsikeresebb! Az Everdell – Az Örökfa árnyékában különleges megjelenésű, összetettebb, „tablóépítő” családi társasjáték. A játékosok egy gyönyörű fa tövében építik erdei birodalmukat: az akciók használatával és az erőforrásaik okos beosztásával otthont teremtenek az állatoknak, akik szakértelmükkel tovább erősítik a városkát... Tablóépítés: a korlátozott számban megszerezhető kártyákból kell, azok egymásra hatásait figyelembe véve, a legértékesebb kombinációkat létrehozni.",
      image: "../../src/assets/image/316562.jpg",
      price: 17490,
      stock: 7,
      feature: false
    },
    {
      id: 10,
      catId: "strategy",
      name: "Nemesis",
      description: "A Nemesis egy űrbéli túlélő játék 1–5 játékos számára, hihetetlen figurákkal, agyafúrt és lebilincselő szabályokkal, melyben megtalálható az együttműködés, a blöffölés, a hátbadöfés, és egy ikonikus tudományos-fantasztikus horror kaland minden egyéb kelléke. A legénység magához tér a hibernációból. Az állapotjelentés kritikus rendszerhibát jelez, és az űrhajó nem képes folytatni az útját. A feladat megtalálni a sérülést, megjavítani, és biztonságban visszatérni a Földre. Csakhogy akad egy probléma: a legénység egyik tagja meghalt. Valaki feltépte a hibernáló kapszuláját, és kirángatta a testét. Tovább rontja a helyzetet, zajokat hallani az űrhajó kiterjedt folyosórendszeréből. Olyanokat, amelyek nem hasonlítanak semmihez, amit azelőtt hallottál. Amikor szembenézel az elképzelhetetlen borzalommal, akkor vajon megbízhatsz-e a társaidban? A Nemesis nem csak a társasjáték kedvelőknek okoz hatalmas élményt, hanem azoknak is, akik szeretik a szépen kidolgozott figurákat kifesteni, hogy a játékélmény még ütősebb legyen, hiszen ebben a dobozban a játékos figurákon kívül aprólékosan kidolgozott szörnyeket is tartalmak köztük a királynőt, ami már önmagában is félelmetes méreteivel képes uralni a játéktáblát.",
      image: "../../src/assets/image/316563.jpg",
      price: 42990,
      stock: 4,
      feature: true
    },
    {
      id: 11,
      catId: "strategy",
      name: "Scythe",
      description: "A Scythe egy versengő típusú 4x játék, mely egy 1920 évekbeli alternatív világban játszódik. Ez a gazdálkodás és háború, a megtört szívek és rozsdás fogaskerekek, az innováció és hősiesség kora. Az I. Világháború sötét fellegei még mindig árnyékot vetnek az 1920-as évek hóval borított Európájára. A kapitalista városállam, melyet egyszerűen csak úgy neveznek, hogy A Gyár, és amely egykor üzemanyaggal látta el a robosztus harci mecheket, most bezárta kapuit, és ez felkeltette számos közeli ország figyelmét. A kicsiny, ám módfelett áhított földdarabra öt frakció vetette ki a hálóját. Vajon kié lesz a dicsőség, a vagyon, és vajon melyik lesz Kelet-Európa vezető birodalma? A tervező megjegyzése: A Scythe (kasza) egyaránt jelent mezőgazdasági szerszámot, illetve háborúban fegyvert, és ez a két jelentés kiválóan ötvözi a játék két alapelemét. A munkásaid legalább annyira szorulnak a katonaságod védelmére, mint amilyen mértékben szükségesek a birodalmad számára az általuk megtermelt nyersanyagok.",
      image: "../../src/assets/image/316564.jpg",
      price: 24990,
      stock: 6,
      feature: true
    },
    {
      id: 12,
      catId: "family",
      name: "Kuruzslók Quedlinburgban",
      description: "A kevesebb néha több! Egy kezdő varázsló sertepertél egy jókora üst körül. Most épp egy üvegcsét nézeget és magában így morfondírozik: - Ugyan mi baj lehet? Legfeljebb nem lesz annyira ízletes... – majd némi teketóriázás után beönti a zöld folyadékot az üstbe. Még három utcával arrébb is hallották a műveletet követő robbanást... Nos kimondhatjuk: ez a hozzávaló most nem jött be. Évente egyszer Quedlinburg városa 9 napos vásárt tart. Az ország legjobb csodadoktorai és kuruzslói gyűlnek össze egy helyen, hogy bemutassák gyógyító tudományukat és gyógyitalaikat. Büdös, izzadó lábak, honvágy, csuklás és szerelmi betegség - mindenre van gyógymódjuk. Minden sarlatán saját gyógyitalt főz. Megkísérted a szerencsédet? A gyógyitalok elkészítéséhez a játékosok összetevőket húznak a saját zsákjukból, amíg úgy nem gondolják, hogy a tökéletes gyógyital elkészült. De csak óvatoson: picivel több ezekből a speciális összetevőkből, és az egész edény felrobbanhat! Szóval meg kell találni a megfelelő időt a megálláshoz, mielőtt túl késő lenne, és talán egy kisebb adagot kell elsőre készíteni, hogy a nyereségből értékesebb összetevőket kereshessenek később. Így a játékos zsákja fokozatosan töltődik fel egyre értékesebb, hasznosabb összetevőkkel, hogy a következő bájital még értékesebb lehessen.",
      image: "../../src/assets/image/316565.jpg",
      price: 9190,
      stock: 12,
      feature: false
    },
    {
      id: 13,
      catId: "family",
      name: "Azul",
      description: "A mórok által Európában elterjesztett azulejókat (eredetileg fehér-kék csempéket) a portugálok nagyon megkedvelték, készítésének módját elsajátították, miután királyuk, I. Mánuel a dél-spanyolországi Alhambra palotában tett látogatásakor elámult a mór díszítőcsempék szembeszökő szépsége láttán. Az Alhambra belsőépítészeti szépségétől elvarázsolt király azonnal elrendelte, hogy saját portugáliai palotáját hasonló fali csempékkel díszítsék ki. Az Azul-ban nincs más dolgotok, mint okosan és időben kiválasztani azokat a csempéket a gyárak kínálatából, amelyekből a legértékesebb helyekre tudsz tartalékolni készletet, majd azokból feltölteni a készülő díszes csempefal sorait és oszlopait. Ehhez nem csak a saját készülő munkádat, hanem a többiekét is figyelned kell! Egy rossz választásnak akár az is lehet a vége, hogy egy akkora csempekészlet jut neked, amelyet nem tudsz beépíteni, így a nyakadon maradó darabok miatt komoly veszteségek érhetnek. Az Azul egy gyönyörű kivitelezésű, absztrakt stratégiai játék az egész család számára!",
      image: "../../src/assets/image/316566.jpg",
      price: 12990,
      stock: 18,
      feature: true
    },
    {
      id: 14,
      catId: "family",
      name: "Viticulture: Esszenciális Kiadás",
      description: "Toszkána történelmi vidéke most próbára teszi a borkészítési tudományodat és a stratégiai érzékedet. Szőlőtőkéket telepítesz, szőlőt szüretelsz, érleled a bort, és teljesíted a kereskedők megrendeléseit, hogy tiéd legyen Olaszország legnagyszerűbb pincészete! A Viticulture egy munkáslehelyezős stratégiai játék, mely lehetőséget teremt a játékosoknak, hogy bárhol kialakíthassák saját toszkán borászatukat, ahol van egy asztal és körülötte barátok. Megérkezel a vidéki, modernizáció előtti Toszkánába, ahol örököltél egy elhanyagolt borászatot. Van némi termőterületed, egy régi présházad, egy aprócska pincéd, 3 munkásod… és az álmod, hogy egyszer tiéd lesz Itália legpompásabb pincészete. Feladatod, hogy egész évben ellásd különféle teendőkkel a munkásaidat és a készséges idénymunkásokat. Egy borászatban minden évszak más és más, a munkásoknak tehát eltérő dolgokkal kell foglalatoskodniuk nyáron és télen. Egyes feladatoknál verseny alakul ki, és gyakorta a feladathoz elsőként érkező munkásnak előnye van a később érkezőkkel szemben. A munkások és idénymunkások segítenek, hogy építményekkel, szőlőtőkék ültetésével és borrendelések teljesítésével gyarapítsd a borászatodat, miközben egyre csak haladsz a célod fel, hogy tiéd legyen Toszkána legsikeresebb pincészete.",
      image: "../../src/assets/image/316567.jpg",
      price: 18190,
      stock: 8,
      feature: false
    },
    {
      id: 15,
      catId: "family",
      name: "The Crew: Küldetés A 9. Bolygóhoz",
      description: "A feladatotok, amennyiben vállaljátok, hogy bebizonyítsátok a 9. bolygó létezését, de az űrutazást csak akkor élitek túl, ha egy csapatként együttműködtök! A The Crew: The Quest for Planet Nine egy kooperatív ütős-vivős játék amelyben a játékosok űrhajósokként indulnak el, hogy részt vegyenek egy bizonytalan űrkalandon. Vajon mi a helyzet az ismeretlen bolygóról szóló pletykákkal? Ezen az űrben játszódó eseménydús utazáson több mint 50 izgalmas küldetésen vehettek részt. De a játékot és kihívásait csak akkor lehet legyőzni, ha minden játékos sikeresen teljesíti az egyéni feladatait is. A változatos kihívások leküzdése érdekében elengedhetetlen a kommunikáció a csapaton belül. Ám az űrben ez a vártnál nehezebb lehet! A játék minden küldetéssel egyre nehezebbé válik. A küldetések során nem a bevetett trükkök mennyisége, hanem a megfelelő trükkök megfelelő időben való használata számít. A csapat csak akkor nyer, ha minden játékos sikeresen teljesíti feladatait.",
      image: "../../src/assets/image/316568.jpg",
      price: 3490,
      stock: 15,
      feature: false
    },
    {
      id: 16,
      catId: "family",
      name: "Kartográfusok",
      description: "Tárd fel a járatlan utak titkait és légy Te a birodalom legjobb kartográfusa! Gimnax királynő elrendelte az északi földterületek birodalmához csatolását. Mivel Nalos Királysága igényt tart e területre, a királynő szolgálatában álló térképészként a te feladatod lesz a táj feltérképezése. A királynő hivatalos rendeletekkel határozza meg, hogy milyen tájat értékel a leginkább, így ha sikerül az igényeit teljesíteni, komoly hírnévre tehetsz szert. Ám vigyázz, nem vagy egyedül a vadonban! A Dragul szembeszáll a területi igényeiddel, és előőrsöket küld, így befolyásuk csökkentésének érdekében körültekintően kell megrajzolnod a határokat. Szerezd meg a királynő által áhított földterületeket, és te lehetsz a királyság legnagyobb térképésze! A Kartográfusok egy flip & write jellegű társasjáték, azaz a játékosok újabb és újabb kártyákat felfordítva és azokhoz alkalmazkodva rajzolnak a saját térképükre. Ez a műfaj alapvetően egy gondolkodós, mégis könnyed, relaxáló játékmenetet biztosít, egy kis egymás-levesébe-köpős csavarral. Minden játékos egyszerre játszik, nincsen saját köre, ezért 1 főtől gyakorlatilag bármekkora társaságig játszható (a szabály tartalmaz leírást az egyszemélyes játékmódhoz). A játék grafikái fantasztikusan megteremtik az alaphangulatot: a középkor jellegzetességeit a fantasy világával vegyítve kísérteties mocsarakat, lombkoronákba épített falvakat, békés, festményi tájakat, elhagyatott romokat, és persze bestiális szörnyeket kapunk. Külön említést érdemel a kétoldalú térkép, ami kvázi a játékosok táblájaként szolgál, amire rajzolni fognak: a játék nulladik lépése ugyanis az, hogy kartográfusként elnevezzük a saját birodalmunkat, megrajzoljuk annak címerét, illetve megadjuk a saját nevünket és titulusunkat. A játék négy évszakon, azaz négy fordulón át tart.",
      image: "../../src/assets/image/316569.jpg",
      price: 4000,
      stock: 18,
      feature: true
    },
    {
      id: 17,
      catId: "family",
      name: "7 Csoda - 7 Wonders",
      description: "A játék összetett, mégis könnyedén bele lehet jönni, könnyű megtanítani másoknak. A játék kiegyensúlyozott, nincsenek túl erős Csodák, valamint a játékosok számától függetlenül élvezhető. Gyors, rövid idő alatt lejátszható egy-egy menet, nincs holtidő és a játék végén megvan a „csak még egyet” érzés. A játékban sok lehetőség van a győzelemre: lehet a tudomány segítségével győzni, esély van katonai módon megragadni a vezető pozíciót, de a Csoda építése is sokat lendít a kultúrádon. Ezt a változatosságot tovább fokozza a Csodák különböző változatai, valamint a Leaders kiegészítő, amely új lapokat és egy új Csodát tesz elérhetővé. Ha szeretitek a civilizációépítő játékokat, de nem akartok órákig ülni az asztalnál, ez a játék tetszeni fog. Kevesen vagy sokan, kicsik vagy nagyok, kevés az idő vagy bőven van néhány partira… a 7 Csoda mindig nyerő választás! Írd be magad a történelemkönyvbe a világ Hét Csodájával!",
      image: "../../src/assets/image/316570.jpg",
      price: 11190,
      stock: 8,
      feature: false
    },
    {
      id: 18,
      catId: "strategy",
      name: "Kifürkészhetetlen",
      description: "1913-at írunk. Az SS Atlantica gőzhajó két napi hajóútra van a kikötőtől, az Atlanti-óceánon. Gyanútlan utasai egy nyugodt utazás reményében szálltak fel a fedélzetre Bostonban, Massachusettsben, semmi különös eseményre nem számítva. Azonban a hajón utazókat minden este furcsa rémálmok gyötrik; pletykák keringenek sötét árnyakról, amelyek a hullámok alatt szorosan a hajó nyomában vannak; és a feszültség csak emelkedik, amikor a hajó kápolnájában egy holttestet fedeznek fel, furcsa rituálé jeleivel körülötte. Az Atlanti-óceán mélyén bujkál az ördögi, kimondhatatlan borzalom: a Mélyek, Hydra anya és Dagon atya vezetésével. Ismeretlen okokból az Atlantica felé vették irányukat, és csatlósaik ember-mély hibridek alakját öltve beszivárogtak a gőzhajóra, hogy belülről segítsenek elsüllyeszteni azt. A Kifürkészhetetlen minden játékában egy vagy több játékos ilyen hibrid szerepébe bújik, és feladatuk, hogy mennyire tudják titokban szabotálni a többi játékos erőfeszítéseit, kihatással lesz a végeredményre: sikeres lesz-e az utazás, vagy épp elsüllyed-e a hajó. Ha nem hibrid, hanem ember vagy, el kell hárítanod a Mélyek fenyegetését, meg kell akadályoznod, hogy az Atlantica-t túl sok sérülés érje, kezelned kell a hajó négy kulcsfontosságú erőforrását, ha sikeresen el akarsz érni Bostonba, miközben megpróbálod kitalálni, melyik játékostársaid jelentenek veszélyt. Mindenkinek ugyanaz az erőforráskészlete, de míg az emberek megpróbálják megóvni azokat, addig az árulók arra törekszenek, hogy kimerítsék. És bizony, nem is olyan egyszerű döntést hoznod, hogy valaki szándékosan meríti-e a csoport erőforrásait vagy sem, különösen, ha válsághelyzet adódik.",
      image: "../../src/assets/image/316571.jpg",
      price: 25500,
      stock: 7,
      feature: false
    },
    {
      id: 19,
      catId: "family",
      name: "Five Tribes – Naqala Dzsinnjei",
      description: "A Five Tribes egy meeple-lepakolós úgynevezett euró-játék, félig-meddig munkáselhelyezős – egy izgalmas csavarral. A munkásokat előbb felvesszük, és nem mindet tesszük vissza. Hogy nyersz, vagy veszítesz, azon múlik, mikor, milyen úton, és honnan mozgatod el a Bérgyilkosok-, Építők-, Öregek-, Kereskedők- és Vizírek törzsének tagjait, ugyanis az egyes törzsek bábuinak levételével eltérő...",
      image: "../../src/assets/image/316572.jpg",
      price: 19990,
      stock: 0,
      feature: false
    },
    {
      id: 20,
      catId: "party",
      name: "Csak Egy",
      description: "Csak egy szót csak egy szóval! A Csak egy zseniális, egyszerű szabályú, Év játéka díjas partijáték. A játékosok közösen, egy-egy szó segítségével próbálják meg egyiküket rávezetni a feladványra – de ha ugyanazt a szót többen is felírják, azt ki kell venni a segítségek közül... A szóasszociációs képességet fejlesztő társasjáték.",
      image: "../../src/assets/image/316573.jpg",
      price: 6190,
      stock: 12,
      feature: true
    },
    {
      id: 21,
      catId: "strategy",
      name: "Tainted Grail: Avalon Bukása",
      description: "A Tainted Grail egy történetgazdag túlélő és felfedező játék 1–4 játékos részére, amelynek zord világa egyedi és kifacsart módon ötvözi az Artúr-legendákat és a kelta mitológiát. Minden játékos egyet irányít a négy, nem kifejezetten hősnek tűnő karakterek közül, akiknek olyan lehetetlen helyzetekkel kell szembenézniük, ahol a náluk erősebb és bölcsebb bajnokok mind elbuktak. Miközben a torz erővel bíró és folyamatosan szétterjedő homály üldözi őket, és egyenlőtlen harcot vívnak a szűkös erőforrásokkal és a kihívást jelentő találkozások alakjaival szemben, a karakterek útnak indulnak, hogy elérjék az elérhetetlent – és mindeközben számos alkalommal meghaljanak. A cselekménykiváltók rendszerén át a játékosok szembesülhetnek a tetteik hosszú távú következményeivel, míg a szerteágazó történetnek köszönhetően különféle módokon oldhatnak meg problémákat, így biztosan nem lesz két egyforma játék. Egy olyan földön, mely lassan a Wyrdness-be süllyed, és melyet konfliktusok marcangolnak; a nap-nap utáni túlélés már önmagában kihívást jelent. Az éhezés, a betegség, a zord időjárás és a véletlenszerű események összeesküvést sugallnak utazásod során. Menhirs, az Őrző, ami a biztonságos utazást biztosította az egész birodalomban, lassan sötétségbe borul, és az egyszerű logisztikát megoldandó feladattá formálja. Hogy ezeket a kihívásokat legyőzhesd, a karaktered több ellentmondó irányban fejlődhet, például brutalitás / empátia vagy gyakorlatiasság / spiritualitás között kell választanod. Ezek a tulajdonságok egymást kizáró képességek gazdag választékát nyitják meg előtted, melyek különböző pakli-építési stratégiákat követelnek, jelentős és mély karakterfejlődést téve lehetővé. Az általad kifejlesztett karakter több tucat harci és nem harci találkozás állítja kihívás elé. Néha kénytelen leszel erőszakot alkalmazni, de gyakran a diplomácia lehet a jobb megoldás. Függetlenül attól, hogy az erődet vagy az eszedet veted be, a játék egyedülálló kocka nélküli rendszere minden konfliktus megoldását szórakoztatóvá és izgalmassá teszi. Avalonban egy legenda vár minden egyes kő és fa mögött! Minden helyszínnek meg van a maga gazdag története és titka. A helyek és a karakterek gyakran sokkal többek, mint amiknek látszanak (lehet, hogy a baglyok is? – DC). Hiába kerül a helyére lassan a kirakós minden darabja, mindig vár rád valami meglepetés. Sok titokra csak több játék derül fény. Az egyik legjobb lengyel fantasy szerző, Krzysztof Piskorski írta a Tainted Grail - Avalon bukása történetét, amely a nemlineáris narratíva határait feszegetni, ami az Awaken Realms pedig gazdag tapasztalataira építve, kiváló társasjáték-mechanikával és szemet gyönyörködtető látványvilággal tár a játékosok elé.",
      image: "../../src/assets/image/316574.jpg",
      price: 42490,
      stock: 3,
      feature: false
    },
    {
      id: 22,
      catId: "strategy",
      name: "Anachrony: A Jövő Útjai",
      description: "A távoli 26. században az emberiséget a kipusztulás veszélye fenyegeti. Egy hatalmas meteorit a Földbe csapódott, és a túlélőknek az utolsó reménysége, ha egyetlen zászló alá egyesülnek. De vajon kinek az útját kövessék? Válj a 4 frakció egyikévé, erősítsd meg hatalmadat, fejleszd a bázisodat, segíts a túlélők evakuálásában, és vezesd az emberiséget egy új ösvényre! A világhírű és népszerű, magyar fejlesztésű Anachrony társasjáték végre magyar nyelven is megérkezett! Vesd bele magad a hatalomért vívott küzdelembe az emberiség jövőjéért ebben az izgalmas, ideológiákkal és időutazással átszőtt stratégiai játékban. Képes leszel biztosítani a túlélést és a te filozófiádat tovább örökíteni? Tedd próbára magad az Anachrony: A jövő útjai társasjátékban!",
      image: "../../src/assets/image/316575.jpg",
      price: 16990,
      stock: 12,
      feature: true
    },
    {
      id: 23,
      catId: "party",
      name: "MicroMacro: Crime City",
      description: "Köszöntünk Crime Cityben – a városban, ahol minden sarkon bűn terem! Vedd kézbe a nagyítódat és eredj a titokzatos bűntények nyomába! Rejtélyre fel, nyomozó! A MicroMacro: Crime City a klasszikus keresős, vagy más néven böngészős játékokat veszi alapul, mint amilyen a világhírű Hol van Wally? (brit) / Hol van Waldo? (amerikai). Azonban csavar egy hatalmasat a zsáneren, és a kutatható rajzon nem csupán térben, de időben is vannak eltérések az egyes események és helyszínek között. Ugyanis ebben a többszörösen díjnyertes társasjátékba nem csupán meg kell találni valamit, vagy valakit, de bűntényeket kell feltárni, nyomozni és szálakat felgöngyölíteni amik térben és időben el vannak szórva Crime City-ben. Ettől olyan izgalmas és forradalmi a játék, ahogyan megoldja a kronológiai eltolódást egy kétdimenziós bohókás rajzolaton, avagy doodle-ön. A játék mechanikája rendkívül egyszerű, és ettől annyira szórakoztató, nem kell hozzá semmi extra előkészületet, nem igényel előzetes tudást. Csak hajtogasd ki a város képét, vedd elő az egy bűntényhez tartozó paklit, és anélkül, hogy átnéznéd annak lapjait, nézd meg az első nyomot, majd próbáld megtalálni a térképen! Sikerült? Nagyszerű, akkor jöhet a második nyom. És ez addig folytatódik, amíg minden szálat sikerül felgöngyölíteni, és megoldod a bűntényt. Az egyes eseteket 1-4 fő számára találták ki, de elméletben semmi akadálya, hogy többen tegyetek próbát vele, és nagyjából 15-45 perc a játékidejük, de ez nagyban függ az észlelőképességedtől is. A játék 16 esetet tartalmaz, amik bár mechanikailag nem bonyolultak, és a játékot akár 8 éves kortól ki lehet próbálni, a későbbi bűntények már esetleg szülői felügyeletet is igényelhetnek, ezért 12 éves kortól javasoljuk. Mit gondolsz? Elég jó megfigyelő vagy, hogy még a legapróbb nyom se kerülje el a figyelmed? Akkor is, ha egy 75 x 110 cm-es képen kell megtalálnod a kis részleteket?Akkor tedd próbára magad és családod, barátaid a MicroMacro: Crime City társasjátékban, és tárd fel a város összes bűnét!",
      image: "../../src/assets/image/316576.jpg",
      price: 7990,
      stock: 12,
      feature: true
    },
    {
      id: 24,
      catId: "strategy",
      name: "Blood Rage",
      description: "A Blood Rage játékban a játékosok erős viking klánokat irányítanak egy dicsőséges küldetésben mielőtt a világ apokaliptikus pusztulása eljönne. Míg a Ragnarök pusztítja a földet, a vikingek azt teszik, amiben a legjobbak: harcolnak és fosztogatnak; epikus csatákban ölnek és meghalnak. Az élet mulandó, de a dicsőség örök! Egy viking számára számos út vezethet a dicsőséghez. Elfoglalhat és kifoszthat területeket a jutalomért, csatában összezúzhatja ellenfeleit, küldetéseket teljesíthet vagy akár dicsőségesen meg is halhat. A játékosok kártyákhoz juthatnak, amik az istenek ajándékának felelnek meg, és segíti őket a küldetésükben. Ezek az ajándékok sokféle stratégiát kínálnak, segítenek a harcban, ravasz taktikákat nyújtanak, vagy megbüntetik a játékost legyőzőket. A játékos fejlesztheti a klánját hatalmas vikingekkel, egyedi képességekkel, vagy akár a skandináv mitológia legendás lényeit is felbérelheti, hogy az oldalán harcoljanak. Amikor a világ véget ér, csak a dicsőségre fognak emlékezni!",
      image: "../../src/assets/image/316577.jpg",
      price: 25990,
      stock: 8,
      feature: false
    },
    {
      id: 25,
      catId: "family",
      name: "Patchwork",
      description: "A Patchwork egy rövid, kétszemélyes absztrakt stratégiai játék Uwe Rosenbergtől, aki olyan híres játékokat tett már a polcainkra, mint az Agricola, Caverna vagy a Le Havre. Ebben a játékban paplanokat kell varrnotok, különböző színű szövetdarabok felhasználásával, úgy, hogy a játék végén a legnagyobb profitra tudjatok szert tenni. Mivel a saját körödben összesen 3 szövetdarab közül tudsz maximum választani, a játék nem torkollik hosszan gondolkodási szünetekbe, ugyan akkor mégis kell hozzá elég stratégia, hogy kiválaszd a megfelelő darabot. Jól kell gazdálkodni a gombokkal, mérlegelni kell, hogy egy-egy szövetdarabot megéri-e megvenni, vissza fogja-e hozni az árát a későbbiekben. A játék körülbelül 20 perc alatt letudható, a szabályok egyszerűek és akár a fiatalabb korosztállyal (~8 éves kortól) is remekül játszható. Ajánljuk kisgyerekes családoknak, vagy a könnyű absztrakt stratégia kedvelőinek.",
      image: "../../src/assets/image/316578.jpg",
      price: 5990,
      stock: 16,
      feature: false
    },
    {
      id: 26,
      catId: "party",
      name: "Dixit",
      description: "Tudod, hogy mikor, mire gondolnak a barátaid? Ha nem, akkor most itt a lehetőség a Dixit játékkal, hogy megtudd. Az 2010-es év játéka egy felhőtlen, vidám szórakozásra invitál, szakítva a korábbi díjazottak stílusával. Alapvetően egy kommunikációs, asszociációs játék, amelyben szépen kidolgozott képekről kell gondolatokat megosztani a többiekkel, úgy hogy lehetőleg ne legyen egyértelmű, de mégis rá lehessen ismerni. Ez most így első olvasásra, gondolom nem feltétlen a legérthetőbb, ezért nézzük is, hogy pontosan miről is van szó. Találj egy megfelelő gondolatot! A játék legnehezebb része. A kezedben lévő hat lap közül ki kell választanod egyet és arról egy gondolatot, idézetet, dalszöveget, vagy bármit mondani. Majd ezt követően képpel lefelé betenni középre. Amint ez megvan, a többieken a sor. A kezükben lévő hat kártya közül ki kell egyet választaniuk, amire nagyjából vagy egészében illik a leírás, majd ugyanúgy képpel lefelé középre betenni. Miután mindenki kiválasztott így egy képet, fogd az összes kártyát és keverd meg őket, majd tedd ki immár arccal felfelé az asztal közepére egymás mellé őket. A többieknek most az a feladatuk, hogy kitalálják melyik volt az amelyiket te raktad be és amelyikről te beszéltél.",
      image: "../../src/assets/image/316579.jpg",
      price: 8990,
      stock: 13,
      feature: true
    },
    {
      id: 27,
      catId: "family",
      name: "Marvel United",
      description: "A főgonoszok új fenyegetést jelentenek világszerte, akik viszályt szítanak, hatalomra törnek és igyekeznek eltiporni a hétköznapi embereket. Vajon milyen remény maradhat egy olyan világban, ahol nyugodtan szövögethetik ármányos terveiket? Ám ahol megjelennek a gonoszok, ott feltűnnek a hősök is! Bejárják a kontinenseket, elkötelezetten védelmezik az ártatlanokat és elhárítják a fenyegetéseket, hogy végül magukkal a főgonoszokkal is leszámolhassanak egyszer és mindenkorra.",
      image: "../../src/assets/image/316580.jpg",
      price: 14990,
      stock: 4,
      feature: false
    },
    {
      id: 28,
      catId: "strategy",
      name: "Star Wars: Lázadás",
      description: "JAVÁBAN DÚL A POLGÁRHÁBORÚ... A Régi Köztársaság utolsó maradványi is eltűntek már, és a Birodalom félelemmel uralja a galaxist. Frissen megépített űrállomásuk, a Halálcsillag, minden ellenállás megsemmisítésére képes. De feltűnt egy új reménysugár. Néhány elszánt lázadó szembeszáll a Birodalommal. Titkos bázisukról terveket szőnek a Birodalom megdöntésére, és a szabadság visszaállítására a galaxisban. A Star Wars: Lázadás társasjátékban újra játszhatod a Galaktikus Birodalom és a Lázadók Szövetségének híres csatáit. Vezesd a Birodalom hatalmas katonai erőit, hogy megtaláld a Lázadók bázisát, vagy vívj gerilla hadviselést és kövess el szabotázs akciókat a nyílt Felkelés nevében. A küzdelem megnyeréséhez nem elég hatalmas fegyverarzenállal rendelkezni, a hőseidre is nagy szükséged lesz. Ezek az ikonikus karakterek titkos küldetésekre indulnak, hogy segítsék ügyedet, vagy aláássák az ellenfeled uralmát. Küldd el Luke Skywalkert a Dagobah rendszerbe Jedi kiképzésre, vagy állíts egy fagyos széncsapdát Darth Vaderrel Han Solónak. Eltiporja-e a Birodalom a Lázadást egy határozott támadással? Csak Te döntheted el a galaxis sorsát.",
      image: "../../src/assets/image/316581.jpg",
      price: 29990,
      stock: 4,
      feature: false
    },
    {
      id: 29,
      catId: "strategy",
      name: "Vadnyugati Legendák",
      description: "Lépj be a Vadnyugati legendák világába, és bújj a westernvilág egyik figurájának bőrébe – de miközben a saját utadat járod, tartsd fél szemed a vetélytársakon, mert csak a leghíresebb – vagy hírhedtebb – válik igazi legendává! A Vadnyugati legendák egy szabadon bejárható kalandvilág, amelyben bárki a vadnyugat egyik híres szereplőjévé válhat! Szereplőjévé, nem feltétlenül hősévé – a klasszikus vadnyugat történelme sok hírességet szült: szerencsejátékosokat, marhapásztorokat, aranybányászokat, bankrablókat, útonállókat – és üldözőiket, a törvény rendíthetetlen őreit. Válassz egy utat, járd be a vidéket, és kockáztass, hogy te legyél a vadnyugat legnagyobb legendája!",
      image: "../../src/assets/image/316582.jpg",
      price: 19990,
      stock: 7,
      feature: false
    },
    {
      id: 30,
      catId: "party",
      name: "Végtelen Kesztyű",
      description: "Thanos, az őrült titán célja, hogy a Végtelen Kövekkel az uralma alá hajtsa az univerzumot, ám a bátor hősök összeállnak, hogy utját állják a végső hatalom felé vezető úton. Az Infinity Gauntlet: A Love Letter Game a híres kártyajáték alapján készült és a Marvel Univerzumban játszódik. A játék megtartotta a hagyományos Love Letter játékok alapját, ám számos csavarral újragondolva izgalmasabb, a csapatjátékot támogató játékmechanizmusokkal bővítve azt. Míg az egyik játékos magára veszi Thanos szerepét, hogy megváltoztassa az általunk ismert univerzumot, addig a maradék 1-5 játékosnak ikonikus hősöket kell megszemélyesítenie, hogy legyőzzék őt, mielőtt eléri célját. A játék során a hősjátékosok felváltva húznak fel és játszanak ki egy-egy kártyát, majd végrehajtják a hatását. A hősjátékosok segítségül hívhatják Vasember, Pókember, Thor, Vörös Boszorkány és további híres hősök képességeit, hogy harcba bocsátkozzanak általuk, vagy hogy kifigyeljék Thanos terveit. Thanos ezzel szemben két kártyával kezd, ami mellé minden körben felhúzhat egy lapot, és a 3 kézben tartott kártyából kell választania, hogy melyiket szeretné kijátszani. A hősök célja, hogy a képességeiket olyan stratégiai kombinációkban használják fel, amelyek segítenek legyőzni Thanost annyiszor, hogy elveszítse az összes életponját, míg Thanos ugyanezt igyekszik elérni a hősök csapatával szemben. Mivel Thanos egyedül játszik, ő akkor is győz, ha megszerzi és ki tudja játszani az összes végtelen követ. Vajon ki nyeri meg ezt a harcot?",
      image: "../../src/assets/image/316583.jpg",
      price: 4990,
      stock: 12,
      feature: false
    },
    {
      id: 31,
      catId: "strategy",
      name: "Cthulhu: A Halandó Halál",
      description: "A H.P Lovecraft inspirálta Cthulhu: Death May Die játékban 1920-s évek nyomozói vagytok, akik ahelyett, hogy próbálnák megállítani a Mérhetetlen Vének eljövetelét, megidézik őket, hogy véglegesen leszámoljanak velük. A játékot már megőrülve kezditek és mivel a hosszú távú célotok, hogy Cthulhut kivégezzétek, így a játék alatt valószínűleg el fogtok bukni néhány kockadobást és az őrület miatt lehet, hogy néhány szörnyű tettet hajtotok végre, de ebből akár előnyt is kovácsolhattok. A játéknak több epizódja van, mindegyik hasonló felépítésű, két akcióval, mielőtt és miután megidéztek bármit is. Ha bármelyik karakter meghal még az idézés előtt, a játéknak vége és vesztettetek. Ha a Mérhetetlen Vén még talpon van és a nyomozók közül is egy még él, van esélyetek a győzelemre.",
      image: "../../src/assets/image/316584.jpg",
      price: 29690,
      stock: 5,
      feature: false
    },
    {
      id: 32,
      catId: "strategy",
      name: "Felkelő Nap",
      description: "A legendás feudális Japánban játszódik a Felkelő Nap, amelyben a játékosok olyan nagy klánokat vezetnek, ame lyeket a hatalmas Kami gyűjtött össze, hogy újraformálja az országot, és visszavezesse a tiszteletre méltó spirituális hagyományokhoz. Minden klán az egyedi képességeit használva terjeszti ki erőit a tartományokra. Erődöket emel, betakarítja a termést – és harcol a többi klán ellen. Ahogy a tavaszt felváltja a nyár, a nyarat pedig az ősz, a játékosok fejleszthetik klánjukat úgy a stratégia, mint az erények terén, és akár még a legendák szörnyeit is segítségül hívhatják az ügyükhöz. A klánok bölcsen tennék, ha imádkoznának az istenekhez, mivel minden kami nagyon erős képességeket adhat nekik. A diplomácia azonban még erősebb eszköz lehet, mivel a klánok kölcsönösen előnyös szövetségeket köthetnek, és egyeztethetik az útjukat a győzelem felé. Ebben a politikai arénában a becsület értékesebb, mint az arany, bár az árulás fordulatot hozhat a háború során. A csatákat nemcsak nyers erővel, hanem stratégiával és ravaszsággal is meg lehet nyerni. Az utadat bölcsen, a szövetségeseidet körültekintően válaszd meg. Mire a tél hava betakarja a földet, eldől, te leszel-e a kiválasztott, aki a Felkelő Nap országát uralja...",
      image: "../../src/assets/image/316585.jpg",
      price: 27260,
      stock: 3,
      feature: false
    },
    {
      id: 33,
      catId: "party",
      name: "Spicy",
      description: "Spicy – csípős, de finom! Legendás idők: három nagymacska klánja legjobbjait új küzdőtérre hívja. Bátorságukat immár nem véres harc bizonyítja. Az igazi hős nem csak erős, de könnyedén fogyasztja a legcsípősebb ételeket is! Lángoló ajkakkal és könnyező szemekkel licitálják túl egymást. Hazugság talán a nagyotmondás, ha vállalod a lelepleződés következményeit? E legendás dilemmából születik meg egy új korszak új harci taktikája, a BLÖFF.",
      image: "../../src/assets/image/316586.jpg",
      price: 4590,
      stock: 18,
      feature: false
    },
    {
      id: 34,
      catId: "family",
      name: "Takenoko",
      description: "Egy zabálnivalóan cuki kombináció: éhes panda menni bambuszkert! A Takenoko egy komoly újrajátszási lehetőséget képviselő társasjáték. A játék célja, hogy a játékosok a különböző (kert, kertész, panda) célkártyák feladatait megoldva minél több pontot gyűjtsenek. A játéknak akkor van vége, ha az egyik játékos sikeresen végrehajt adott számú célkártyát. A játékosok a körüket – az első kör kivételével – azzal kezdik, hogy dobnak az időjárás kockával, különböző bonuszokért; a játékos kaphat plusz egy akciót a körében, növeszthet egy bambuszt egy öntözött mezőn, elvégezhet két egyforma akciót, mozgathatja a pandát, és ehet vele bambuszt, választhat egy fejlesztést (forrás, trágya, kerítés) amit bármikor kijátszhat, vagy ha ügyesen dob, választhat az előbbiek közül.",
      image: "../../src/assets/image/316587.jpg",
      price: 10990,
      stock: 7,
      feature: false
    },
    {
      id: 35,
      catId: "party",
      name: "Kódfejtő",
      description: "Fejtsétek meg a másik csapat kódját, mielőtt ők fejtik meg a tiéteket! A Kódfejtő zseniális szóasszociációs partijáték rutinosabb játékosoknak is. A két csapat feladata, hogy olyan szavakat találjon ki fordulóról fordulóra, amelyekből a saját csapatuk számára egyértelmű lesz, mely szavaikra gondolt, de az ellenfél nem jön rá... A szókincset, a kreativitást és az egymásra figyelést fejlesztő társasjáték.",
      image: "../../src/assets/image/316588.jpg",
      price: 6990,
      stock: 18,
      feature: false
    },
    {
      id: 36,
      catId: "party",
      name: "Camel Up",
      description: "Az „Év játéka” díjjal kitüntetett Camel Up játék tevefuttatása még izgalmasabb és látványosabb lett! A fából faragott tevék és a 3D piramis mellé a játékba bekerült egy hatalmas 3D pálmafa, ami alatt a tevék hűsölnek! A versenybe két új teve szállt be, de azok olyan bolondok, hogy rossz irányba nyargalnak! Új szereplők azok a nézők, akik már nem csak fogadásokat köthetnek, hanem éljenezhetnek, vagy éppen hurroghatnak. A megújult játék új dizájnnal és új alkatrészekkel várja a versenyzőket.",
      image: "../../src/assets/image/316589.jpg",
      price: 12990,
      stock: 12,
      feature: false
    },
    {
      id: 37,
      catId: "family",
      name: "Photosynthesis",
      description: "Hűs szellő fúj, a napsugarak áttörnek a fák lombkoronáján... de kinek a fái élik túl az árnyékot? Ebben a játékban a játékosok igyekeznek fáikat magkoruktól életciklusuk végéig kísérni, hogy azokat győzelmi pontokra váltsák. A játék napfordulókból áll, aminek során a napkorong körbejárja a játékostáblát, a játékosok erdejét. Az elültetett fáid fénypontokat gyűjtenek neked az adott fordulóban, amennyiben vetélytársaid lombkoronái és a napsütés aktuális állása kedvező a számodra. Minden fordulóban a fény máshonnan süt, így a fák árnyéka is mindig máshová vetül. Az a fa, amelyik elé egy másik fa magasodik, nem gyűjt fénypontot. A fénypontok a játék elengedhetetlen, szerves részét képezik. Fénypontokkal tudsz új magot ültetni, fát növeszteni, vagy a talaj minőségétől függően győzelmi pontot begyűjteni, ha a fád életciklusa a végéhez ért. A természet viszont folyamatos körforgásban van, így egy fa kivágása, majd egy új mag elvetése valahol az élet rendje.",
      image: "../../src/assets/image/316590.jpg",
      price: 10990,
      stock: 16,
      feature: false
    },
    {
      id: 38,
      catId: "party",
      name: "Fedőnevek",
      description: "Elsöprő sikerű asszociációs kártyajáték a titkos ügynökök szupertitkos világában! A vezérkar felkészült, hogy megvédje az embereit – de vajon sikerül nekik...? A játékosok két csapatot alkotnak, melyek 1-1 tagja - a kémfőnökök - birtokában vannak a megoldókártyának, a többiek csak az előttük kiterített 25 szókártyát látják. A kémfőnökök feladata, hogy rávezessék társaikat, mely lapok tartoznak hozzájuk, méghozzá úgy, hogy egy-egy szóval megpróbálnak minél több kártyára utalni egyszerre anélkül, hogy megneveznék őket. Egyszerűnek tűnik, és az is – amíg ki nem próbálja az ember! Már egyetlen apró hiba is az ellenfélnek jelenthet pontot, ráadásul egy bérgyilkos is ólálkodik a közelben, aki könnyen véget vethet a szervezkedésnek…! A Fedőnevek egyszerre komoly gondolkodást igénylő társasjáték és könnyed partijáték, amit bárki fél perc alatt megtanulhat. Játszani könnyű, de jól játszani nehéz! Vidám csapatjáték hidegháborús környezetben. Mint minden partijáték, ezt is nagy(obb) társaságokra találták ki. Bár van két- és háromszemélyes verzió is, a játék igazából négy főtől lesz izgalmas. Két csapat játszik egymás ellen, azaz egymással szemben, mert praktikusan a két csapatvezető (kémfőnök) az asztal egyik oldalán van, míg a két csapat a másikon.",
      image: "../../src/assets/image/316591.jpg",
      price: 4990,
      stock: 13,
      feature: true
    },
    {
      id: 39,
      catId: "party",
      name: "Címke",
      description: "Csak 15 másodperc, és lejár az időd! Mondj egy szót a jelölt témában, a megfelelő kezdőbetűvel… …vedd el a pontozó golyóbist… …és már agyalhatsz is a következő válaszodon! Siess, a homokóra gyorsan lepereg. Vajon hány szót lehet összeharácsolni negyed percen belül? A Cimké-ben a játékosoknak egymás után kell öt téma és négy nyelvtani megkötés között szabadon ugrálniuk, a homokóra pedig egyre csak pereg! És az a játékos, aki egy témából az összes szót ki tudja hozni, magához ragadhatja a téma pont-tengert érő Címkéjét!",
      image: "../../src/assets/image/316592.jpg",
      price: 9890,
      stock: 9,
      feature: false
    },
    {
      id: 40,
      catId: "family",
      name: "Tokió Királya",
      description: "Egy állati üvöltés a Tokiói-öböl felől, és a város lakói már tudják is, megkezdődött a harc! A föld is beleremeg, amikor a toronyház méretű szörnyek, mindenen átgázolva ugranak egymás torkának. Pikkelyek, vagy páncélozás? Rakéták, vagy nyers erő? A Föld rejtekéből érkező rettenet, vagy egy idegen létforma? Tokiónak csak egy királya lehet… de vajon ki, vagy MI lesz az? A Golden Geek által 2012-ben legjobb családi és legjobb parti játéknak megválasztott Tokió Királya (King of Tokyo) 2016-ban megújult, és felturbózott grafikájának köszönhetően teljesen új megjelenést kapott. A játék alapvetően a Yahtzee kocka-mechanikát használja, amely a változatos fejlesztés kártyái miatt még a kockacsörgetésnek is képes volt mélységet adni. A játék célja, hogy Tokiót elfoglalva, dicsőséget dicsőségre halmozva, győzelmi pontokat gyűjtsünk, vagy különböző fejlesztésektől megerősödve kiüssük az ellenfeleinket. Könnyű szabályaival, akár 6 fős játékos számával és izgalmas lehetőségeivel a Tokió Királya minden társasjátékos est méltó játéka lesz!",
      image: "../../src/assets/image/316593.jpg",
      price: 8890,
      stock: 10,
      feature: false
    },
    {
      id: 41,
      catId: "party",
      name: "Bűnügyi Krónikák",
      description: "Oldjatok meg szövevényes bűneseteket, járjátok be a tetthelyeket élőben! A Bűnügyi krónikák a nyomozás kooperatív játéka, egy alkalmazás, egy társasjáték és a virtuális valóság tökéletes kombinációjával. Ugyanazokkal a fizikai komponensekkel (táblák, helyek, karakterek és elemek) sokféle forgatókönyvet tudtok lejátszani, és számos különböző bűncselekményt oldhattok meg. Indítsátok el az alkalmazást, válasszátok ki a játszani kívánt forgatókönyvet és kövessétek a történetet! A cél az, hogy a jelenlegi eset gyilkosát a lehető legrövidebb időn belül elkapjátok. A Scan & Play technológiával minden egyes összetevő (hely, karakter, elem stb.) egyedi QR-kóddal rendelkezik, amely a kiválasztott forgatókönyvtől függően aktiválja és kiváltja a különböző nyomokat és történeteket. Ez azt jelenti, hogy új eseteket kaphattok az alkalmazás frissítésével, új fizikai komponensek beszerzése nélkül.",
      image: "../../src/assets/image/316594.jpg",
      price: 9890,
      stock: 7,
      feature: true
    },
    {
      id: 42,
      catId: "party",
      name: "Bűnjelek: Gyilkosság Hongkongban",
      description: "Egy rendkívül pörgős és szórakoztató nyomozós játékot mutathatunk be a Deception: Murder in Hong Kong szerepében. Minden játékos egy nyomozót alakít és a cél az, hogy rá kell jönni ki követte el a gyilkosságot. Természetesen az egyik játékos a bűnös, de ezt az egyszerű koncepciót nehezítik a szerepek, melyeket a játék elején osztunk ki rejtve mindenkitől. (pl. a nyomozó, a tudós, a bűntárs, stb.) Sokszor újrajátszható, garantált élvezet! Tanulmányozzátok a törvényszéki bizonyítékokat és találjátok meg a gyilkost. De vigyázzatok, a tettes köztetek lehet! Rejtélyes gyilkosság történt Hong-Kongban, amit egy csapat nyomozó igyekszik felderíteni - csakhogy közéjük furakodott maga a gyilkos is! Titkos szerepes, megtévesztésen alapuló szociális party játék, amit akár 12-en is játszhatnak!",
      image: "../../src/assets/image/316595.jpg",
      price: 10890,
      stock: 8,
      feature: false
    },
    {
      id: 43,
      catId: "party",
      name: "Hellapagos – Hajótöröttek Szigete",
      description: "Jaj ne, a hurrikán közeledik, és a tutaj csak félig kész! Ráadásul ennivalót és ivóvizet sem sikerült eleget gyűjteni… A Hellapagos egy furcsa partijáték: a játékosok hajótöröttekként összedolgoznak, hogy a hurrikán érkezése előtt el tudjanak menekülni a szigetről, ami mellett a baleset történt, de minden játékos, ha csak teheti, elrejt enni- és innivalót magának, mert ha nem jut elég mindenkinek, valakit éhhalálra ítélnek (sőt akár meg is esznek…). Együttműködés, élelemrejtegetés, reménykedés!",
      image: "../../src/assets/image/316596.jpg",
      price: 5690,
      stock: 9,
      feature: false
    },
    {
      id: 44,
      catId: "family",
      name: "Harry Potter: Roxforti Csata",
      description: "A Roxfort sorsa a Ti kezetekben van! A játékosok a Roxforti csata társasjátékkal a Roxfort Varázsló-és Boszorkányképzőben zajló epikus csatát - és az odáig vezető eseményeket - élhetik át. A gonosz erők visszaverése és az iskola biztonsága négy tanuló együttműködésén múlik - a játékosoknak Harry, Ron, Hermione és Neville szerepébe bújva kell minél jobb paklit építeniük, és a megszerzett kártyák segítségével legyőzni az ellenfeleket.Tanulj új varázslatokat, szerezz mágikus tárgyakat, és közben akadályozd meg, hogy a Halálfalók megerősödjenek! 7 JÁTÉK egy dobozban. A dobozban 7 JÁTÉKot találsz: a Harry Potter sorozat mind a 7 történetét végigjátszhatod, akár az elejétől kezdve, akár tetszőleges sorrendben. A paklidat minden JÁTÉK során újra és újra fel kell építened, így válik a kihívás is egyre nehezebbé - az 1. és 2. JÁTÉKnak akkor is bátran nekivághatsz, ha még soha nem játszottál pakliépítő játékkal (vagy ha egy fiatalabb varázsló is van a csapatban). A 7. JÁTÉK azonban már az edzett játékosokat is kihívás elé állítja: itt már nem csak egy-két gonosztevő legyűrése a cél, hanem magát Voldemortot Tudjukkit is le kell győznötök, persze csak akkor, ha már elpusztítottátok az összes horcruxot. Ha nem sikerül a gonoszok legyőzése, még mielőtt ők az összes, az adott JÁTÉKban szereplő helyszínt irányításuk alá vonnák, akkor sajnos elbuktátok a küzdelmet!",
      image: "../../src/assets/image/316597.jpg",
      price: 15890,
      stock: 6,
      feature: false
    },
    {
      id: 45,
      catId: "party",
      name: "Magic Maze - Fogd És Fuss!",
      description: "Lépj, sürgess, lopj és fuss! Miután minden vagyonuk semmivé lett, a négy hős, kényszerűségből ugyan, de felkerekedett, hogy kirabolja a helyi plázát. A „Magic Maze – Fogd és fuss” egy valós idejű kooperatív játék, amit csendben kell játszani. Közösen kell gondolkodnotok, de nem beszélhettek. Egymásra lesztek utalva. Teljesen. Közösen irányítotok minden bábut, de mindenki csak egy vagy két irányba. Vagyis ha egy játékos észak felé tudja mozgatni a bábukat, akkor észak felé csak ő tudja, senki más. Így neki kell észrevennie azokat a helyzeteket, amikor egy-egy hősnek észak felé kell mozognia, hiszen a többiek nem is szólhatnak hozzá, legfeljebb erős pillantásokkal és a „Csinálj már valamit” bábuval kommunikálhatják felé. És ha le tudtok lépni, mielőtt a riasztó megszólal, nincs megállás: újra meg újra visszatértek, mert a zsákmány sosem elég! Csakhogy az elvarázsolt pláza egyre nehezebben hagyja magát meglopni... Felfedezni a plázát, kirabolni a boltokat és lelécelni. 3 percetek van rá – meg még amennyit szereztek mellé! Vigyázz, kész...fogd és fuss! 3 percetek van, hogy összeszedjétek a szükséges felszerelést egy törpe, egy varázsló, egy íjász és egy barbár számára az elvarázsolt plázában, és juttassátok ki őket, mielőtt lejár az idő és megszólal a riasztó! Az idő rövidsége önmagában is kihívást jelent, ráadásul minden játékos csak egy adott irányban mozgathatja a bábukat! Vajon együtt tudtok működni egyetlen szó nélkül is?",
      image: "../../src/assets/image/316598.jpg",
      price: 6890,
      stock: 12,
      feature: false
    },
    {
      id: 46,
      catId: "party",
      name: "Captain Sonar",
      description: "2048-at írunk. Új gazdasági háború dúl. A ritkaföldfémek kulcsfontosságú szerephez jutottak az új, fejlettebb gépek építése során, és ezért az egész világon meghatározó gazdasági tényezővé váltak. A legújabb tengeralattjáró-prototípusokat magáncégek fegyverzik fel, hogy az óceán mélyére merülhessenek az értékes anyag után kutatva. A tenger békés felszíne alatt csendes háborút vívnak ennek az új, instabil technológiának a segítségével. A legkiválóbb tisztek egy csapatának tagjaiként az egyik legkorszerűbb tengeralattjáróért feleltek. Az ellenfél legyőzéséhez együtt kell működnötök csapattársaitokkal. Csak a legjobb kommunikációval rendelkező, legjobban együttműködő csapat élheti túl a találkozást...",
      image: "../../src/assets/image/316599.jpg",
      price: 11890,
      stock: 8,
      feature: false
    },
    {
      id: 47,
      catId: "family",
      name: "Plüssmesék",
      description: "Szerepjátékos szülők figyelmébe! Már menne veletek a gyerek a kazamatába? Vagy már ti vinnétek magatokkal egy hajmeresztő kalandra a vadak földjére? Eljött az idő, hogy végre együtt kalandozzatok! Ebben a játékban plüssállatok bőrébe bújva szállhattok szembe egy kislány rémálmainak lakóival, egy kissé hátborzongató, de hősökhöz méltó kalandban. Utatok éppen az ágy alatti sötétségtől indul. Készüljetek! Kaland, veszélyek és elképesztően aranyos figurák játéka. Egy szokatlan játék, melyben hősies gyerekjátékokkal vagyunk, akik útnak indulnak, hogy megmentsék szeretett gazdájukat a veszélytől. Játékosként feltárul elöttünk egy csodás, de annál veszélyesebb világ, melyben számtalan új dologra bukkanhatunk. A játékot a választásunk szerinti történeten vezetjük végig. Egy könyv visz végig a kalandokon, melynek egyik oldalon megtaláljuk a színes játéktáblát, a másikon az adott mesére vonatkozó speciális szabályokat. A fejezetek mind egy-egy mérföldkövek a gyerekek életében, szépen és kreatívan elmesélve.",
      image: "../../src/assets/image/316600.jpg",
      price: 21890,
      stock: 8,
      feature: true
    },
    {
      id: 48,
      catId: "party",
      name: "Bang!",
      description: "A Bang! egy egyszerű kártyajáték, ráadásul nagy előnye, hogy kis helyen, akár a zsebünkben is elfér, így könnyed fel-, illetve levezetésnek, utazójátéknak tökéletes. A rejtett szerepek, pörgős játékmenet, valamint a tizenhat választható karakter, melyek mindegyike egy-egy rá jellemző különleges képességgel bír, biztosítják, hogy egyhamar nem fogunk unatkozni a spagetti western és a vad tűzpárbajok világában.",
      image: "../../src/assets/image/316601.jpg",
      price: 5890,
      stock: 13,
      feature: false
    },
    {
      id: 49,
      catId: "party",
      name: "A Rettegés Éjszakája: Vérfarkas",
      description: "Farkasok és falusiak vigyázzatok! Alszik a város... de nem a szokásos módon! A játékosok dönthetik el, milyen karakterekkel szeretnének játszani - és ezek között egészen érdekesek is akadnak, például a Részeg, aki valakivel karaktert cserél, így fogalma sincsen, kicsoda ő. Mivel az asztal közepén is van három karakter, így megeshet, hogy nincs is köztetek a vérfarkas! Ha pedig mégis te lennél a vérfarkas, vajon ki tudod dumálni magadat és rá tudod kenni a gyanút egy ártatlan falusira? Ismét egy pörgős játék, aminek központi témája a vérfarkasok körüli mítoszra épül. Ebben a parti játékban 3-10 játékos élheti át egy vérfarkasok fenyegette falu lakóinak életét, de vigyázat, a játékosok közül néhányan maguk a rejtőzködő farkasok. Az éjszaka folyamán a vérfarkasok garázdálkodnak, reggel viszont a falu lakói meglincselnek valakit maguk közül, akikről gyanítják, hogy likantróp. Lássuk milyen izgalmakat rejt ez a parti játék! Eljött a vérfarkasok éjszakája! A játék tipikusan a „gyilkosos” játékok mechanikájával működik, vagyis a játék elején mindenki kap egy szerepet, majd mindannyian behunyjátok a szemeteket. A játékvezető ez után utasításokat ad arra, hogy bizonyos szerepekkel rendelkező játékosok mit csináljanak.",
      image: "../../src/assets/image/316602.jpg",
      price: 4890,
      stock: 8,
      feature: true
    },
    {
      id: 50,
      catId: "family",
      name: "Canvas: Festői Vásznak",
      description: "Alkoss igazi mesterművet rétegek művészi egymásra helyezésével! A Canvasben festők vagytok, akik egymással versengenek egy tekintélyes művészeti fesztiválon. Gyűjtsetek áttetsző kártyákat, helyezzétek őket egymásra és alkossatok festményeket! Attól függően, hogy milyen kártyákat választotok, és milyen sorrendben teszitek le őket, más-más ikonok fognak látszani, amelyekkel szalagokat szerezhettek. Minden egyes kombináció egyedi illusztrációt és címet ad a festményeteknek. Amikor rád kerül a sor, elvehetsz egy műalkotás kártyát vagy festhetsz egy vászonra. A műalkotás kártyákat a játéktér közepén lévő kártyasorból lehet elvenni. Ezen kártyák mindegyikének költsége van a pozíciójuktól függően. Miután kiválasztottál egy műalkotás kártyát, meg kell fizetned annak költségét úgy, hogy egy-egy inspirációs jelzőt helyezel le a választott kártyától balra lévő kártyákra. Ha nincs elegendő inspirációs jelölőd, akkor nem választhatod azt a kártyát, amit szerettél volna. A bal legszélső kártya mindig ingyenesen elvehető. Ha három vagy több műalkotás kártyád összegyűlt, dönthetsz úgy, hogy festményt készítesz. Válassz ki 3 kártyát, rendezd őket tetszőleges sorrendben, majd pontozd őket a festményen látható ikonok és a pontozási feltételek segítségével.",
      image: "../../src/assets/image/316603.jpg",
      price: 9890,
      stock: 7,
      feature: true
    }
  ];

  constructor() { }
}

import React, { useState,useEffect, useRef } from 'react';
import Keyboard from '../components/keyboard';
import '../components/keyboard.css';
import ReactGA from 'react-ga';



const App = () => {

  const TRACKING_ID = "G-4XYQTGPZ1E";
  
  ReactGA.initialize(TRACKING_ID);

  const wordList = "abaca abaca abace abale abata abate abati abaua abced abces abdic abduc abera abhor abies abila abile abili abjur abneg aboli abona abord abrac abras abrog Abrud abtin abuba abube aburc aburi abuza abuza abzic acaju acana acant acare acari acarp acasa acati acaul acata acced acces acciz aceea aceia acela acela acele acera acera acerb acere acest achii achit achiu acicu acida acide acidu acila acili acine acira acira aciua aciui acizi aclam acmee acnee acolo acont acord acort acqua acrea acrid acrie acrii acris acris acrit acriu acrul acrum acrut actio activ actor actul acuma acuma acupa acusa acusi acuta acute acuti acuza acuza acuze adaos adapa adape adast adaug adaus adapa adapi adast adanc adene adept adera adera adere adese adica adins adjur admir admis admit adnat adopt adora adora adorm adoxa aduca aduce aduci aduct aduga adu-l adula adult aduna aduna adunc adune adusa aduse adusi advon aedic aequo aeraj aerat aerez aerob aeros aerul afara afara afana afect afera afgan afida afide afila afile afili afina afina afine afini afion afipt afirm afisa afise afixe aflai aflam aflat aflau aflam aflia aflui aflux afona afone afoni aftei aftor aftos afuma afuma afume afund afurc agale agama agame agami agapa agape agasa agata agate agata agate agaua agava agave agata agent agera agere ageri agest agiei agila agile agili agita agita agite agnat agnet agnus agoda agodi agona agone agora agrar agrai agrea agric agris agron aguda agude aguti aguzi ahaia ahdel aheii aheul Ahile ahota ahtia ahuri aicea aiept aiest aieve ainte ainus aiori aista aiste aisor aisti aiura aiure aiuri ajuna ajung ajuns ajura ajuta ajuta ajute ajuti akani alace alait alalt alama alama alani alata alaun alami albea albei albet albia albie albii albit albiu alboi albui albul album albus albut alcan alcoo alcor alcov aldan aldin aldol aldui alean aleea alega alege alegi aleii alela alele alena alene alerg alert alese alest alesi aleza aleza aleze algei algia algic algid algie algii algol aliaj alias aliat alibi alica alica alice alici aliem aliez alife alifi alina alina aline alini alint alion alior alios alipi aliud almar almee alnic alnus aloca aloca aloea aloei alosa alota alpax alpii alpin altai altar altei alter altoi altor altui altul altii aluat aluco alumn aluna aluna alune alung aluni alura alura aluri alveo alvin amant amara amara amare amari amagi amara amari amana amana amane amani amant amari ambar ambii ambra ambra ambre ameba ament ameti amiaz amiba amiba amibe amica amice amici amida amide amiez amili amina amina amine amino aminu amnar amoar amont amorf amort amper ampex ampla ampla ample ampli amplu amurg amuse amusi amuta amuta amute amuti amuza amuza amuze amvon Amzei anala anale anali anaua ancia ancie ancii andin Andra anexa anexa anexe angel angiu angli anglo angro anima anima anime anina anina anini anion anita anost anozi ansei anser ansoa antal antet antic anton Anton antre antru antum anual anuar anula anula anume anunt anura anure anzii aoleo aoleu aorta aorta aorte apara apare apari apasa apasi apara apara aparu apasa apela apela apele apere aperi apese apesi apica apica apicu apida apida apide apiol aplec aplic aplit apnee apoda apoda apode apolo aport aposi apoza apozi apret aprig april aprob aprod aprox apter apuca apuca apuce apuli apuna apune apupa apupa apuse apusi araba araba arabe arabi araci arahn arama arama arane arapi arare arata arata arate arati araci aragi arami arata arate arati arbie arbiu arbor arbuz arcan arcas arcat arcei arcer arche archi arcos arcui arcul arcus ardau ardea ardei areal areci areic arena arena arene arest areta areta argat argea arges Arges argol argon argos argou argus argut arhar arheo arheu arhit arhon arian arici arida aride ariei aries arile arima arina arine arini aripa aripa aripi aritm arita arite arizi arman armar armas armat arman armei armez armia armie armig armii arnic aroga aroga aroma aroma arome aromi arpad arsei arsen arsic arsis arsic arsin arsov artei artel artos artag artar arunc arval arvat arz-o asabi asalt asamb asana asara ascei ascet ascut asdic aseca asert asfel asiat asiei Asiei asimi asina asini asist asiza asize aslam aslan asmei asmut asola asoma asper aspic aspid aspir aspra aspre aspri aspru assai astar astea astei aster astma astma astme astra astre astru astup astur asuda asuda asuma asuma asume asumi asa-i asari asasi asaza asaza aseza aseze asezi aspri astri ataca ataca atace ataci atale atare atasa atase atarn atata atata atati ateea ateei ateii atela atele atena Atena atena atent atest atica atica atice atici atije ating atins ativa atlas Atlas atlaz atlet atmos atoli atomi atona atone atoni atrag atras atrii atriu atrop atuul atata atata atate atele atica atina atine atipi atosi audia audio audit augit augur aulei auleu aulic aurar aurea aurei aurel aureo auric aurie aurii aurit auriu auros aurul ausei ausel autor auzea auzim auzit auzul avaet avala avana avand avane avani avans avant avara avare avari avati avand avant aveai aveam aveau avena muist avena avene aveni avenu avere averi avers aveti aviar avida avida avide avion aviva aviza avize avizi avizo avort Avram avuez avuta avute avuti axare axari axata axari axele axial axila axila axile axion axoni axuri azera azere azeri azida azide azima azima azime azina azoic aztec azura azuri alalt aleia alora aluia astei astor astui astia babac baban babas babau babaF babei Babel babit baboi bacal bacau Bacau bacei bacil bacon badeM badea badei badeo bafta bafte bagaj bagea bahar bahic bahna bahne bahno bahti baian baier baieu baion baiti balas balac balei baler balet balia balic balie balii balon balot balsa balta balta balul bambu bamei bamia banal banan banat Banat banca banca banci banda banda bande bandy banei banii banjo banta bantu banul baraj barat barba barba Barbu barca barca barco barda barda barei barej barem bares barez barfi baria baric barie barii baril baris barit bariu barja barje barni baroc baron baros barot barou barza barza barzi basca basca basce basci baset basma basme basna basne basni bason basta basul basca basca basta baste batac bataj batal batat batav batar batar batca batca batce batel batem batic batir batiu bat-o batog baton baune bauzi bavar bavei bazal bazar bazat bazam bazei bazez bazic bazin bazon baboi bacan bacie bacit badai badia badic badie badii bagat bagam baias baiat baies baiet baile baita baite balai balan balai balos balti balta balti balur balut banat banci banea banet bania banie banii banos banui banut barat barbi barci barzi basau basni basca basic basti batai batea batut batea batic batos batos batul bauna baune bauni bauta bauti bacai bacsi bacsi bahla bahli balci balie barai barfa barfe barfi barna barne barsa barsa barse batca batci batut batan batai bavas bazai bazei bazoi bazzz beata bebel becar becer bechi becul bedas behai beica beici belea belfa belgi belic belis belit bemol benei benga bente benti benzi berar berat berce berci berii beril berma berme berna berta berte berus berze bessi besti besli beteg betei betel beton betia betie betii betiv beuca beuci beuta beute bezea bezna bezne biata biban biber bibic bibil bideu bidon biect biela biela biele biesu biete bieti bieul bifer bifez bifid bifor bigam bigii bigla bigot bigue Bihor bihun bijoi bilei bilet biloc bilon biman binar binis binom binta binte bioni bioti biovu bipac bipal biped bipen birar birai birau birja birje birou birui birul bisel bisez bison bisof biter bitul bitum bitii bitos biuta biute bivol bizam bizar bizet bizni bizon bizou bizui Blaga blama blana blana blanc blast blato blaza blaza blagi blani bland bleah bleau bleav blege blegi bleot bleul blide blimp blini blitz bloca bloca blond bluca bluci blufa bluff blugi bluza bluza bluze boaba boaba boabe boaca boace boala boala boale boana boare boari boasa boase boata boate bobea bober bobii boboc bobot bobul bocal bocea bocet bocit bocna bocsa bocse bocsi bodli boema boeme boemi bofte bogat bogza bogze boier boire boiri boita boite boiti bojoc bojog bojti boldi boldo bolea bolet bolfa bolfe bolid bolii bolis bolta bolta bolti bolti bolul bolus bomba bomba bombe bonca bonei bonet bonom bonti bonti bonul bonus bonza bonzi boran borat borax borai borar borat borda bordo boric borna borna borne borod borsi borta borte borti borti borul borza borze bosaj bosco boson bosar botar botas botau botca botce botei botel botez botis botos botul botus botea botit botog bouar bouri bouti bovar bovid bovin bovis boxei boxer boxez boxul bozia bozie bozii bozuc braca braci bradt braga braga braha brain brama brama brame brand brant brant brasa brata brate brava brava brave bravi bravo braza brazi bragi braie brana brane braul breaz brebi breii breji bresa brese breva breve breza breze brice brici brida bride briei briem briez briti briza briza brize broci broda brodi bronz brosa brosa brosa brose brota bruda bruft bruia bruma bruma brume bruna bruna brune bruni bruno brusa brusc brust brusi bruta brute bruto bruti bubai bubal bubat bubei buboi bubon bubos bubui bucal bucar bucea buche buchi bucii bucin bucla bucla bucle bucol bucov bucsa bucse bucsi bucur budai budei budez Budiu bufan bufei bufet bufeu bufna bufne bufni bufon bugat buged buget buggy bugla bugle buhai buhaj buhav buhai buhei buhna buhos buhul buhur buiac buici bujda bujde bujdi bujia bujie bujii bujor bulai bulat bulbi bulca bulci buldo bulei bulet bulin bulon buluc bulzi bumba bumbi bunar bunda bunda bunde bunei bunel bunic bunii bunul bunut burac buraj burat burau burba burbe burca burca burci burei buret burez burfa burgu buric burie burin buriu bursa bursa burse burta burta burti burui busta busca busea busei busel buseu busit busni buson busos butac butan butar butas butas butca butci butea butic butie butii butil butoi buton butuc butul butur butut butii buxus buzat buzar buzau Buzau buzei buzer buzna buzni buzoi buzum Byron cabaz cabla cablu cabra cacao cacic cacio cacom cadea cadet cadii cadiu cadou cadra cadra cadre cadri caduc cadus cafas cafea cafer cafeu cafri cafru cafti cahla cahle caiac caice caier caiet caila Cairo caisa caisa caise caisi Caius caizi calaj calao calca calce calci calda calde calea calei calem calez calfa calfe calic calif calin calit calma calma calme calmi calos calpa calpe calpi calul calup calus calus calut calzi camee camei campa Camus canaf canal canam canar canat canci canea canei canel cange canid canin canis canoe canon canta canto capac capan capat capei caper capes capia capie capii capiu capoc capod capon capot capra capre capsa capsa capse Capsa capta capul carab caras carat carda carda carde caret careu carfa cargo caria caric carie carii carne Carol carou carpi carst carta carta carte carub carul carus casap casat casca casca casei casez casia casiu casta casta caste casei caset caseu casie caste casti casul catar catar catch catod caton catre catul catar catei catie cauce cauda cauna caune cauni causa cauta caute cauti cauza cauza cauze cavaf caval cavas caveu cavia cavou cazac cazah cazan cazez cazic cazma cazna cazne cazon cazul cacat cacai cacau cadea cadem caile caina caini caita caite caius calai calau calai calau calca calci calea calin Calin calit calus calut ca-mi camin canea cangi canii canti capai capau capia capos capui capus caput carat carau carei caria carni caror carti carui carut casar casas casca casoi casai ca-si casti casut catra catre catun catur catai catan catan catea catei catel catui caula caule cause cauta cauta cazii cazni cazut caine caini calci calti campi caner cantn canta cante canti carai carca carca carci carii carja carja carje carji carma carma carme carmi carna carne carni carpa carpe carpi carti carta casti catea cator catul catus catva ceafa ceafa ce-ai ceair ceala ce-am ceapa ceapa ce-ar ceara ceara ce-as ceata ceata ceata ceata ceaun ceaus cecal cecul cecum cedat cedam cedez cedre cedri cedru ceele cefar cefei cefeu cegii cehai cehei cehia Cehia cehii Cehov celar celea celei cella cello celom celon celor celta celta celte celti celui ce-mi centa centr centi cenur cepai cepce cepei cepoi cepse cepul cerat cerbi cerca cerce cerci cerdo cerea cerem cerga cergi cerii cerit ceriu cerne cerni ceroi ceros cersi cersi certa certa certe certi cerui cerul cerut cesiu cesta ceste ce-si cesti cetan cetas cetei ceter cetet ce-ti cetit cetos ce-ti cetii cetos ceuca ceuce ceuci cezar Cezar cheag checi cheia cheie cheii chele cheli chelo chema chema cheme chemi chera chesa chese cheta cheta chete chiag chiar chiau chibz chica chica chici chida chila chila chile chili china China china chior chiot chira chira chist chita chite chiti chiti chiui chiul chiup chulo cicar cicla cicli ciclo ciclu cidru cifos cifra cifra cifre cifru cigla cihac cihai cimei cimen cimex cimol cimos cinae cinai cinas cinat cinci cinei cinel cinem cinez cinge cinic cinie cinul ciobi ciomp cione ciont ciori ciort cipca cipic cipri cipru Cipru cipul cirac circa circa circu cires cirip ciris cirta cirte cirus cisla cisle cisma cista ciste citat citam citea citet citez citim citit citro ciuca ciuci ciuda ciuda ciude ciudi ciufi ciuha ciuin ciula ciule ciuli ciuma ciuma ciume ciump ciune ciung ciunt ciupi ciuta ciute ciuti ciuva civic civie civil civit cizma cizma cizme claca claca clada claia claie clama clama clame clamp clanc clant clapa clapa clapc clape clara clara clarc clare clari clasa clasa clase claun claci cladi claia claii clait clati clazi clean clema cleme cleni clica clica clici clima clima clime clina clinc cline cling clini clint clipa clipa clipe clipi clips clira clira clisa clise clism clisa cliva cloca cloci clock clona clona clonc clone cloni clont clota clota clote clovn cluma clupa clupa clupe cneaz cneji cnezi coaca coace coada coada coafa coafa coafe coagu coaie coaja coaja coala coala coale coama coama coame coana coana coane coasa coasa coase coate cobai cobat cobai cobat cobea cobei cobie coboc cobol cobor cobra cobra cobre cobur cobuz cobza cobza cobze cocal cocar cocai cocat cocea cocei cocia cocie cocii cocis cocli cocon cocor cocos cocos cocot codaj codan codas codat codat codea codex codez codie codit codos codos codri codru codul cofei cofet cofra cohen coine coiot cojar cojea cojii cojit cojoc colac colaj colan colba colea coleg colet colez colic colie colii colin colir colna colne colon color colos colti colun colur colus colva comat combe combi combo comei comet comic comis comit comod comor comos comun comut conac conas conat conca conci conet conex conga conge congo conic conje conta conte conti conul conus conya copac copai copal copan copai copca copca copce copci copia copie copii copil copoi copra copre copta copte copti copuz corai coral coran Coran corbi corci corde coree corei coret coreu corfa corfe coris corla corle corli corni coroi corpi corso corul corup corzi cosac cosar cosas cosas cosea cosei cosia cosie cosii cosit cosoi cosor costa costa cosar cosea coser cosul cotar cotat cotca cotea cotei cotet cotez cotil cotis cotit cotoc cotoi coton cotor cotul cotca covei covit covor covru coxal coxei cozii crabi craca craca craci craii crama crame crant crapa crape crapi crasa crase crasi crata crate craul craun craza craze craci craia craie craii crapa crapi crang crasc cream creat creau curve cream crede credo creek creep creez crema crema creme crene creol creps cresc cresa cresa cresc crese creta creta crete crete creti crezi crida cride crier crila crile crima crima crime crini crita crivi criza crize croat Croce croia croit croma cronc cront crosa crosa crose cross crosa crosa crose crown cruce cruci cruda crude crump crunt crupa crupa crupe crusi cruta cruta cruta crute cruzi cuaca cuaga cuart cuart cubaj cuban cubea cubeb Cubei cuber cubez cubic cubuc cucai cucii cucon cucor cucos cucui cucul cucut cufar cuget cugla cuhar cuhne cuiba cuier cuina cuine cuiul cuiut cuiva cujba cujba cujbe culac culaj culca culca culce culci culee culeg culei cules culex culic culii culma culme culmi culot culpa culpa culpe culta culta culte culti culuc culuf cului cuman cumas cumas cumen cumis cumul cumva cunun cupaj cupal cupar cupea cupei cupet cupeu cupid cupit cupiu cupla cupla cuple cuplu cupon cupra cupru curaj curar curat curat curba curba curbe curbi curca curca curci curea curei curez curga curge curia curie curie curii curiu curma curma curme curry cursa curse curta curte curti curul curut curva curve curvi custa cusui cusur cusut cusac cusaj cusca cuser cusma cusme custe custi cutat cutei cuter cutez cutia cutii cutit cutra cutre cutii cutit cuvei cuvin cvart cvasi dacat dacei dacia Dacia dacic Dacie dacit dadei daduc dafie dafii dafin daiac daica daici daira daire dalac dalaj dalba dalbe dalbi dalei dalez dalia dalie dalii dalta dalta damar damaF damei damit damna danci dandi dandy danei danez danga dania danie danii dansa dansa dante Dante danta dapar darac darak darda darde darea darie darii darul dasem dasia dasie dasii datai datat datei datez dativ dator datul datum dauna dauna daune david David dadea dadui dagii daina dalti da-mi danac danos danui daoli darab darac darab daram darii darma darui da-te da-ti datii daula dauli dauna dacos dalma dalme dansa darai darei darji darza darze darzi de-ai de-al deala deale de-ar deasa deasa de-as debil debit debut decad decan decar decat decat deces decid decil decis decor dedal dedat dedau dedea dedei dedic dedoi dedub deduc dedus defel defer defoc deger deget deism deist dejoc dejug dejun delas delco deleg delfi Delia delii delir deliu deloc delta delta delte delut demis demit demiu demna demne demni demon demos denar dendi deneg denia denie denii densa densa dense densi denum depan depar depil depou depre depui depun depus derbi derby derea dereg deres deriv derma derma derme derny derog desag desec desen deset deseu desfa desis despe despr deste desul desca desce desel deseu de-si desir desoc desti detai detei detun detur de-ti detin deuce de-un dever devia devii devin devir deviz devla devle devon devot dezic dezis di-ac diace diada di-al diamb di-an diana Diana di-ar diata diate dibla dible diblu dibol dibui dicos dicta dieci Diego diena diene dieta dieta diete dieza diezi difan difer difil difuz diger digit dihai dihor di-ii dijma dijma dijme dilii diliu dilua dimer dimia dimie dimii dimon dinam dinar dinas dinee dinei dineu dingo dinos dinre dinte dintr dinta dinti dioda diode dioic di-os dipla dipod dipol direc dires dirty disco disec disti distr ditai diurn divan divei divid divin diviz dixie dizma djawa djinn dlata d-lor D-lor dlrlc d-lui dntre doaga doaga doage doapa doape doara doare dobas dobor dobos dobra docar docil docta docte docti dodii dodoc dodot dogal dogar dogat dogea dogit dogma dogma dogme dohot doica doici doime doimi doina Doina doina doine doini dolap dolar dolaw dolby dolce dolia dolic dolie dolii doliu dolly dolon dolor domin domle domni domnu domol domra domre donat donax donez donga dongi donor dopaj dopez dopul dorat dorea doric dorim Dorin dorit dormi dorna dorne dorul dorut dosar dosea dosit dospi dosul dotal dotat dotam dotei dotez doyle doyum dozaj dozat dozei dozez draba draca drace draci draco dracu draga draga drage dragi dragu draiv drama drama drame drami drapa drati drang drege drela drele drena drena drept dresa dresi drete dreve drift dripi drive drobi droga dronc drops druga druga drugi druid drumu drupa drupa drupe drusa druse druta druza druze druzu dryas duala duale duant dubas dubat dubea dubei dubii dubit dubiu dubla dubla duble dubli dublu ducal ducat ducai ducea ducem ducos dudau dudei dudui duela duete dugos duhan duhli duhni duhul duios duium duker dulap dulai dulau dulce dulci dulia dulie dulii dului dumei dumic dunaj dunei dunga dunga dungi dunit dunst duoul dupac dupai dupca dupre durai dural duran durat durau durai durat durda durde durea duree durei durez durif durit durmi durox durui durum durut durzi dusei dusen dus-o dusca dusii duste dusul dutca dutce dutch du-te duzei dvori eanca eapta earpa easca easca ebosa ebosa ebosa ebose ecart eceni echea echei echer echin echit echiv eclat ecler ecoul ecran ectip ector ecvin edace edeme edere edeta edict edili edita educa educa educe efebi efect efeti efila eflux efori efort egala egala egale egali egida egida egide egipt Egipt egira egres eider elani elbei elbet eleat elece elect eleea elele ele-n Elena elena elene eleni eleva eleva eleve elevi elice elida elile elina eline elita elite Eliza eloxa eluda eluta Emacs emaia email emana emana emane embol emden Emden emerg emeri emers emiri emisa emise emisi emita emite emula emuli emusa enara endri enesc enfeu enorm enoti entom enunt enunt eocen eolit epata epava epave epica epice epici epila epiul epoca epoca epoci epoda epode epoha eponj epops epopt epsom epura epura epure erasm erata erate erati erbiu erect erede erele erete ereti erezi ergan ergol ergot erica eriga erige erija ermit eroda eroic eroii erori eroul erupa erupe erzat esces esela eseta eseul esnaf ester estet estic estiv eston estre estru estul esula esapa esnic estri esuaj esuat esuau esuam esuez etaja etaje etala etala etale etans etans etapa etape etate etena etene eteri etern etero ethos etiaj etica etica etice etici etila etili etira etnic etnie etnii etola etole etufa etuva etuva etuve eturi eugen Eugen eulan eului eunuc eurip euxin evada evaza event evida evier eving evira evita evita evite eviti evoca evoca evoce evrei evreu evuri exact exala exala exale exalt exarh exced exces excit exeat exert exige exila exila exima exina exine exist exita expia expir expre expui expun expus extaz extrs exult eyrir ezari ezita ezita ezite faber facej facem faceo facil facla facle facto fagie fagot fagul fagur fagus faima faima faime faina faine faini falca falca falce falco falei faler falet falia falic falie falii falit falsa falsa false falso falsi falun falus famat faman famen fanal fanar Fanar fanat fanda fanez fango fanon fanta fanta fante fanti fanum fapta fapta fapte fapti farad faras farba farda farin fario farsa farsa farse farta fasie fason fasta faste fasti fatal fatic fatum fatza fault fauna fauna faune fauni fauri faust Faust fauve favor favus fazan fazat fazaF fazei fazic fazie fazor facau facea facui facut fagas faget faina faina faini falce falci falea falim falos fa-mi fapta faras fa-ra faram farma fasie fatat fatoi fatul fa-ti fatis fatis fatui fauri fanar fanat fanul fasai fasai fasei fasie fasai fasai fasia fasie fasii fatai fatei febra febra febre febri fecal feder feidj feigl felah felei felia felid felie felii felin felis felix felon felos felui felul femei femel femur fenat fenec fener fenic fenil fenix fenol fenta fenta fente ferat ferea ferec feric ferim ferin ferit ferma ferma ferme fermi feros ferov ferox ferta ferte ferzo fesei festa festa feste fesul fesii festi fetal fetea fetei fetia fetid fetie fetii fetis fetor fetru fetus fe-te fetei fetii feuda feude fiala fiale fiara fiare fiber fibra fibra fibre fibri fibro ficat fiche ficsi ficus fidea fidel fider fides fiece fie-i field fi-em fierb fiere fiert fiesc fight fiica fiica fiice fiind filaj filar filee filei filer filet fileu filez filie filit filix filma filma filme filmo filol filon filoz filtn filum final finei finet finez finic finis finit finta finul finut fiola fiola fiole fiong fiord fiore fiori firav firea fires firet firez firii firiz firma firme firos first firta firul firut fisch fisei fisic fisio fisam fisai fisca fisei fisek fiset fisez fisic fisie fisiu fisti fiteu fitil fitop fitui fiuti fixai fixaj fixat fixau fixam fixez fizic fizie fizio flage flama flame flana flanc flane flaps flasc flash flata flati flaus flaut flava fleac fleas fleci fleos flesa flesa flese fleti fleur flexa flind flint flirt flisc floci floem flora flora flore flori flota flota flote fluaj fluat fluda flude flu-e fluid fluor foaci foaia foaie foale foame foarc foare foasa foate fobia fobic fobie fobii focal focar focii focos focsi focul focus fodor fodra fodre foehn fogel fohoi foile foina foios foire foiri foita foita foite folia folic folie folii folio foliu folos fomes fonce fonda fondu fonem fonet fonfi fongi fonia fonic fonie fonii fonon fonta fonta fonte foraj foras forat forai forez forin forja forja forje forma forma forme formu forte forta forta forte forul forum fosai fosei fosil fosta fosta foste fosai fosni fosti fotel fotic foton fract fraga fraga fragi fraht frana frana franc franj frank frans frapa frati fraza fraze fraie frana frana franc frane frang frant fraul freca freca Frege freon freta freta frete Freud freza freza freze frica frica frici friga frige frigo fript frita frita friza friza frize front frota froti fruct frupt frust fruze fucus fudul fufei fugar fugau fugea fugii fugim fugit fuglu fugos fugui fuior fular fulee fuleu fulez fulgi fulia fulie fulii fulva fulya fumar fumat fumez fumir fumui fumul fumur funda funda funde funga fungi funia funii funta fuoco furai furaj furan furat furau furam furca furca furci furda furia furie furii furis furor furou fusar fusca fusei fusel fusit fusta fusta fuste fusul fuste fusti futil fuxie fuzee fuzel fuzen fuzeu fuzit fuzzy gabia gabie gabii gabja gabje gabji gablu gabon gabro gabui gadus gaeli gafai gafei gafez ga-ga gagat gagic gagii gagiu gaiac gaial gaibe gaica gaida gaide gaina gaini gaita gaita gaita gaite gaiza gaize gajul galad galba galbe galei gales galet galez galia galic galie galii galis galiu galon galop galos gamar gamat gamaF gamba gamba gambe gamei gamet ganas gance gancs gandi ganga gange gante garaj garat garda garda gardh garet garez garou gasca gasca gater gatit gatui gaura gaura gausi gavaj gavat gavia gazat gazda gazda gazde gazel gazeu gazez gazon gazos gazul gabji gabui gagai gaici gaina gaina gaini gaman ganci gaoci garii garzi gasea gasim gasit gasti gatat gatea gatej gatez gatit gauna gauni gauri gavan gazar gadea gadei gadil gafai gagai gajai galca galca galci gal-g galma galme gamfa gamfa ganci gandi ganji garla garle gasca gasca gaste gatar gatos gatui gatul gavur gazei geaba geaca geala geale geama geana geana gebea gecko geena gelep geliv gelos gelui gemat gemat gemea gemei gemen gemet gemin gemma gemut genat genei genet genic genii geniu genol genom genti genul genus geoda geode geogr geoid gepid gerah gerar geret gerez gerid geros gerui gerul gesta gesta geste getic Ghana gheba ghebe gheim gheme ghena ghete gheto ghi-a ghica ghici ghida ghida ghide ghidi ghili ghilt ghina ghint ghint ghiob ghioc ghiol ghios ghips Ghita ghiuj ghiul ghizd ghizi ghupa giaca giace gibon gibos gigas gigea gimie gimii ginea ginta ginta ginti gioar girat girez girul girus gitan glaja glaja gland glant glasa glasu glauc glava glava glave glaji glasi gleba glebe gleic glena glenc glera glere glial gliei glifa glife gliom glisa globa globi glodi glont glosa glosa glose glota glota glote gluda gluga glugi gluma gluma glume glumi glumu glutu gnais gnome gnomi gnoza gnuul goala goale goana goana goane goata goban gobai gobie gobio godac Gödel goden godeu godia godie godii godin gofra gofra gofre gogea goger gogol gogon golan golas golas golea golgi golie golim golit golul golut gomaj gombo gomei gomma gomme gomon gomos gomot gonas gonea gonio gonit gopac gorun gotca gotca gotce gotic gotka gotii govie graaf graba graba grabi grada grade gradu grafe grafi grajd grama grame grand grant granu grapa grapa grape grasa grase grasi grata graur grava grava grave gravi grabi gradi graia grait grapa graie grane graul great grece greci greco greez grefa grefa grefe grefi grele grena greoi gresa gresi greul greva greva greve griez grifa grifa grife grija grija griji grila grile grilu grima grima grime grind griot gripa gripa gripe griul griva griva grive grivi griza grizu grlit grnac groba grobe grobi grofi gromi groom gropa gropi grosi grota grote Groza gruia gruie gruma grumb grund grunz grupa grupa grupe guano guara guard guasa guasa guase gubav gubei gudur guelf guera gugut guide guita guita guita gujba gujon gulag gulas guler gulet gulia gulie gulii gumaj gumat gumbo gumei gumez gumos gunoi gupei guran gurar gurav gurai gures gurii gurma gurme gurna gurne gurui gurut gusee guseu gusle gusta gusta guste gusat gusii gusti gutei gutos gutui gutus guvid guyot guzla guzla guzle haban habar hadal Hades hadim hagii hagiu ha-ha haham hahau haida haide haiku haina haina haine haini haios haita haite haiti hajme hajto halai halaj halal halat halau halba halbe halca halca halda halde halea halei haler halfi halin halit halom halon halor halou halta halte halub halul halux halva hamac hamal hamei hamis hamit hamul hamur hamut hanap hanat hanci hands hangu hansa hanse hanta hanta hante hapax hapca hapca hapsi hapuc hapul harac harag haral haram harap harar harem hares haret harfa harfe harpa harpa harpe harsa harta harta harta harta harti harul harum hasca hasis hasca haseu hasis hasma hasme hatar hatar hatia hatie hatii hatir hateg hauca haute havaj havan havat Havel havez havra havra havre havuz haydi Hayek hayon hazna hazna hazne hazul habuc hacai hacui ha-ha haini haire hairi haisa haita haiti halci hamai hamei hamui hapai hapci harai harau harti hasti hatea hatas hatea hatis hatui hauia hauie hauit hauli hauri hazos hacai haiti halbe halja hamai hancu harai harau harai harca harci harei hargi harsi harsi harti harta harti hasai hasai hasti hatra hatre hatri hatru hatai hatan hazea hecht heder Hegel helge helgi heliu helix hemul henri hepar hepta herme hersa herse hertz herul hevea hexan hiada hiade Hiade hibaF hibei hicai hidos hidra hidre hiena hiene hierb hifei hifen hi-fi hihai hihot hi-ii hilar hilea hiler himen hindi hinta hioid hiola hiper hipic hippy hires hirta hirta hirte hitit hiton hleab hliza hlizi hoala hoata hoate hoban hobai hobac hobby hobot hocus hodac hogas hogea hogii hoher hohot hoina hojma hojma holba holca holci holda holde holer holie holka holub holul homar homer Homer homoc honui hopai hopul horai horda horda horde hordo horea horei horet horeu Horia horst horti horti horum hosta hotar hotel hotru hotea hotia hotie hotii hotis hotit hotul hrama hrame hramu hrana hrana hrane hrani hrani hrapi hrean hriba hribi hrist hruba hruba hrube hucho hudei huhai huhog huhur huiet huila huila huile huita huita huium hulea hulei hulit hulpe hulpi hulub hului humei humic humor humos humui humus hunie hural hurca hurci hurez huria hurie hurii huron hurta hurta hurui husar husas husca husei husit husos huste husti hutan hutul hutut huzur Iacob iacsi iades iamac iambi ianus iarba iarba iarna iarna iarta iarzi iasac iasac iasca iasca iasta iasta iaste Iasii iatac ia-ti iaurt iavas iazma ibero ibisi ibric ibrid icesc icica icios icnea icnet icose icter ictus icuri idaea ideal ideat ideea ideez ideii idele idila idile idiom idiot idoli idolu iedei iedul iedut ie-ie ience iepei ieram ierei iereu ierha ierme ierna ierni ierta ierta ierte ierti iesit iesle iespe iesta ieste iesea iesim iesit ieste iesti ietac ieura iezea iezer iezme ifica ifica ifose igapo iglou ignam ignar ignat Ignat ignee ignei igneu ignor igrec igret iguan iilor Iisus iitor ijuda ijuli ijuni ikona ilaie ilara ilare ilari ilaul ileie ilene ileon ileum ileus ilfov iliac ilice ilion ilira ilire iliri ilita iloti imacu imago imala imami imens imera imerg imers imide imine imita imite imnic imnul imola imosi impar impas imper impie impii impiu impun impur impus imput imrec imula imuna imund imune imuni imuri inapt inari incas incas incit incot incub indan India indic Indie indii Indii indiu indol induc indus indut inela inele inema inept ineri inerm inert inete infam infig infim infix infra infuz inhib inica inice inici iniei inima inimi inion inita inocu inova input insul insii inter intim intor intra intra intre intri intru intui inula inund inuri invar invit invoc ioaba ioabe ioaca ioace ioage Ioana ioane ioapa ioape ioara ioare ioasa ioase iobag iodat iodic iodul iofca io-la iolei Ionel ionia Ionia ionic ionii ionit ioniu ionul Iorga Iorgu Iosif iosul iotac ipeca ipsos irani irato irbis ireal iriga iriga irina Irina irish irisi irita irita irite iriza irmos irodu irosi irozi irupe iruri Isaia iscat iscol islam Islam islaz isnaf isopi isopu ispas Ispas ispol istea istei istet istet istic istor istov istro istui isala islic istia itate iteaz itemi iteza itreg itura itura itani itare itari itele itesc itiiu ititi iubea iubet iubiV iubim iubit iudei iudeu iugar iugar iulia Iulia iulie Iuliu iunea iunie iuras iures iurta iurte iurus iusca iusni iuste iusti iutei iutar iutea iutit iuxta ivare iveau ivesc ivira ivire ivita ivite iviti ivoar ixozi ix-xi izant izare izbea izbei izbit izbuc izdat izina izini izlaz izmei izola izuri izvar izvod izvor imbat imbia imbib imbie imbii imbin imbla imbuc imbun impac imple impre imput inalt inalt incai incap incat incep incet incoa incot incui incur indes indoi indop indur ineca inece ineci infas infat infia infig infir infoc infoi ingan inger inham inhap inhat injug injur inmia inmii inmoi innod innoi inota inrai inreg insai insei insor inste insul insel insii insir intai intin int-o intra intre intru intep intes intig invar invat invia invie invii invoi irlan jabia jabie jabii jabou jabra jabre jacas jaful jalba jalba jalbe jalea jalei jaleo jales jalet jalon jamba jambe James jamna jamne janta janta jante japca japca japei japiu japon japsa japsa japse jarca jarda jarde jaret jarul jasli javei javel Javel javra javre jazul jacas jacii jalbi japsi jarci jarea jarui jderi jecui jefui jegos jegul jejun jelea jeler jeleu jelit jelui jenat jenei jenez jerba jerba jerbe jerse jerui jetaj jeteu jeton jetul jiana jiana jicni jidan jidov jiene jieni jigla jigle jigni jigou jihad jilav jilip jimba jimbi jimui jinna jipan jipat jitar jitia jitie jitii joaca joaca joace joasa joase joben jobin jocot jocul jocut jodel jofra jofre joian Joian joile joina jojei joker jolca jolna jonca jonci jonct josul joule jouli jubeu jucat jucau jucam judec judet judet jugal jugan jugar jugul juisa jujau jujeu jujub julea julep juleu julfa julfe julio julit jumbo junca junca junci junei junel junia junie junii junta junte jupan jupan jupea jupei jupit jupoi jupon jupui jurai jurat jurii juriu jurui jurul justa justa juste justi juvat juxta juxte kadin kafes kahve kaisi kakim kakiu kalam kalap kalfa kalip kaliu kaoni kappa karma kazah kebab kediv kendo Kenya khmer Knuth koala Kodak kohol koine krill kurda kurde kurzi laban labei label labia labie labii labil labiu labos labri labru lacat lachs lacom lacra lacsi lacto lacul ladin lagar lager lagon lahar laica laice laici laies laird laita lakas lakat lakni lalea lamba lamba lambe lamei lamez lampa lampa lance landa lande langa langa lange lanka lansa lanul lapin lapis lapit lapon lappa lapte lapti lapuc larga larga large largi largo larin larix larma larma larme larus larva larve lasau lasca laser lasou laste lates latex latin latir latra latre latru latul latum la-ti latia latul lauda lauda laude Laura lauri lauzi lavaj lavei laviu lavra lavra lavre lazar labos lacar lacas lacat lacui ladoi lafai laies laiet lalai lalai lalau lamai lampi lanci langa laori lapai lapus largi lasat lasau lasam latoc latra latea latis latit latos lauda lauta lauta laute lauza lauze lauzi lazii lazui lamba lanar lanei langa langa lanii lanos lauta lcool leaca leafa leaga leaha leala leale leali le-am le-ar leasa leasa leasa le-au lebes lecit lectu lecui lefii lefti legai legal legat legau legam legan legea leghe legic legii lehau lehai lehau lehia leica leice leici leita leite leita leite leiti lejer lejon lelei lelii lelja lemei lemna lemne lenaj lenea lenei lenes leniv lenos lenta lente lento lenti lepad lepai lepra lepra lepre lepse lepsi lepta lepui lepus leroi lerui lesei lesne lesta lesia lesie lesii lesin leste lesui letal letca letci letiu leton letui leuas leuca leuca leuci leuna leuti levei levis levit lewis lexem lexic lexie lexii leyda lezat lezez liage li-al li-an liana liane liant li-ar liaze liban libel liber Libia libov libra libre libut licai licar licee liceu licit licur lider lidia li-ef li-er lifta lifta lifte ligav ligii lihai lihni lihod lilie liman limax limba limba limbi limen limes limfa limfa limfe limon limpi limul linca liner linge lingi linia linie linii links linne linon linos linou linsa linse linsa linsi linte linti linul linum linux li-on liota liote lipan lipai lipca lipea lipen lipia lipie lipii lipit lipom lipos lipsa lipsa lipse lipsi lipso lirat lirei liric lisei lisez lista lista liste litca litho litia litic litie litii litiu litor litou litra litra litre litri litru litva litei liude liuzi livan livid livra livra livre lizei lizol loaza loaze lobar lobat lobby lobda lobde lobez lobii lobul local locas locei Locke locma locui locul locut lodba lodbe loden loess logic logor logos logos lohii loial lojii lombe longa lonja lonje lonka loran lorar loria lorii loris lorzi lotca lotca lotci lotok loton lotri lotru lotul lotus lovea lovim lovit loxia loxos loyal lozia lozie lozii luara luare luase luata luate luati lu-am luari luand luban lubit lucea lucid lucie lucii luciu lucra lucsi ludic ludus lueta luete lufar lufei luffa lufta lugoj lugol lugul luica luigi luiza lujer lulea lului lumea lumen lumet lumii lunar lunca lunca lunci lunea lunec lunga lungi lunia lunic lunie lunii lupan lupei lupic lupie lupii lupin lupiu lupla lupoi lupom lupon lupta lupte lupti lupul lupus lurex lusin lusca lusce lusez lutea lutos lutra lutra lutre lutru lutui lutul luxat luxez luxon luxos luxul lying lynch lypky macac macat macaz maced mache machi macho macin macis macla macla macle macra macre macri macro macru macul macun madam madea madem mafia mafie mafii magan magia magic magii magla magma magma magme magna magno magot mahar mahar mahit mahla mahna mahon mahun maial maian maica Maica maica maici maier maieu maimu maina maior maios maiou maisa maisa maise maiul major majur majus makas makat malac malad malar malax malic malin malta malul malus malva mamar mamaF mambo mamei mamii mamon mamos mamut manaf manav manaf manca manca mance manco mande manea manei manej maner manga mango mania manii manin manis manna manos mansa mansa manse manta manta mante manus maori mapar mapei maram marat maraz marca marca marda mardi mardo marea maree marfa marfa marga marha marha maria Maria marie marii marin Marin marja marja marje marka marna marne maroc marod maron marsa marsa marse marte Marte martu marti maruf masai masaj masat masca masca masei maser masez masic masiv masla masle maslo maslu mason masor masta maste masut masez masir matca matca match Matei mateo mater matez matol mator matuf matur mauar maura maure mauri maxim maxit mazac mazga mazil mazlu mazul mazur mazut macar macai macau macel maces maces macut magan magar maiag maica maiet maiug maiut majar majer majii malai malai malin malut mamie mamos mamuc manat manos marar maraz marci marea maret maret marfi marge maria Maria marie marii marim marit maroi maros marul marun marut ma-sa masai masar masca masea masei masoi masor masua masti matci matur matar mazga mache magla magle mahni maind maine maini malci malea malit malos malul manar manas manat manca manca manea manec manei manel maner mania manie manii manji manui manzM manza manze marai marli marsa masai matca matci matuh matan matei matoc matoi matos matuc matus matut mazda mazdi mazga mdenc mecai mecca mecet mecit media medic medie medii mediu medoc mefia mehai mejda mejda mejde melci meles meleu melez melic melit melod meloe melon melos menaj menea menek menit meniu menou mense menta menta mente mento merar merci merei merem mereu mergi merii merit merop mersi merso mesaj mesas mesei mesel mesia Mesia messa messe mesca mesei mesii metah metal metan metec meteo metil metis metoc metod metoh metol metra metre metri metro metru Mexic mezat mezel mezii mezin mezis mezon mezzo mi-ai miala mi-am mi-an mi-ar miare mi-au miaua miaul miaun miaut miaza miaza miaze micea micel micie micii Micle micos micro micul micut midia Midia midie midii mieii miele miere mieru miezi migai migda migma migme migra Mihai mihei mihoc miile miime miimi mijea mijit milei miler milet mileu milog milos milot milui mimat mimet mimez mimic minai minaj minat minei miner minez minge mingi minia minim miniu minix minor minta minta minte minti minur minus minut mi-oi mioni miopi miorc miori mioza mirac miraj miram miras mirat miraz miram mirei miret mirez mirie mirii Miron miros mirti mirui mirul misar misei Mises misia misie misii misir misit misca misca misea misei misel miste misti misto misui misun mitan mitar mitel mitic mitoc mitol mitra mitra mitre mitui mitul mitei mitos mitui miuon mixaj mixer mixez mixom mixta mixta mixte mizat mizam mizei mizer mizez mjloc mlaca mlaci mlada mladu mlaja mlaja mlaci mladi mlaji mlazi mleci moaca moaca moace moaie moale moara moara moare moasa moasa moase moata moate moaza moaza moaze mobil mocan mocai mocni modal modei model modem moder modic modre modru modul modus mogul mohar mohor moima moime moina moina moine moira moira moire moise moita mojar mojic molal molan molar molas molau molai molau molda molde molet molez molia molid molie molii moloh moloi molon molos moloz molto molva momai momea momic momit momuc monac monah monde monem mongo monka monoc monom monta monta monte moore moped mopsi moral morar morav morei morfo morga morgi moria moric morii morio morna morne morni moroc moroi moron moros morsa morsa morse morti morua morua morue morun morus morva morva morve mosor mosur mosan mosea mosia mosic mosie mosii mosit mosoi mosti mosuc mosul mosut motan motel motet motiv motoc motor motov motto motat motai motez motoc motul mouse mreja mreja mreje mreji mrene mucar mucea muced muche muchi mucii mucor mucos mucul mucus mudir mufei muffe mufla mufle mugea muget mugil mugit mugur muhur muiaj muiat muica muici muiem muind muite mujdi mujic mulaj mulat mulde mulez mulge mulgi mulse mulsi multa multe multi multi mumia mumie mumii mu-mu mumur munca munca munci munda mungo munte munti murai mural murar murat murea murei mures murex murez murga murga murge murgi murid murim murin muris murit muriu muroi mursa murse murui musai musca musca muscu musez musiu musli muson musta musti musul musat musca musca musir musta muste musti mutac mutai mutam mutat mutau mutam mutic muton mutra mutra mutre mutul mutus mutea mutia mutie mutii mutiu muzee muzei muzeu muzic muzuc nabab nacru nadaz nadei nadir nadra nafta nafto nagat Nagel nahut naiba naica naimu naist naiva naive naivi najas nalba nalba nalbe namaz namil nandu nanei napul naras n-are narez narui nasca nasol naste nasul nasus nasei nasii naste nasti nasul natal nativ natra natra natre natul natur natia natie natii nauru naval navei navlu navod nazal nazar nazar nazir naboi nabuc nabus nacaz nadai naduf naduh nahui nahut naias naiem naier naimi najit nalbi nalta namol nanas nanai narav narii narod narui nasip nasli nasoi nasos nasuc nasut nasut nasea nasei nasel nasia nasic nasie nasii nasit nauca nauce nauci navod nazar nazii nazui nanas neaga ne-ai ne-am neamt neant neaos neaos neapt ne-ar nears neart ne-au neaua neaua nebun necaz necum nedei neder neega neerl nefer nefla nefle negai negat negau negei negel negos negot negre negri negro negru negus nehot nehru neica neios nemes nemet nemti nenem nenea nenic nenie nenul ne-or nepal neper nepot nepus neras nereg nereu nerod nervi nesat nespa neste neted netot neuku neuma neumb neume neuro neveu nevie nevio neviu nevoa nevod nevoi ngele niche nicol nicta nicti nicto nidus niela niela niele ni-em ni-er Niger nigma nigra nigro nihil nilug nilul nimba nimfa nimfa nimfe nimic ninga ninge ninja ninsa ninsi ni-ol ni-or niper niplu nipon nipru nisip niste nisus nisei niste nitra nitri nitro nitui nitei nitel nival nivea nivel nixis nizam noada noade Nobel nobil nociv nodal nodos nodul noema noeme noeza nogai nohot nohud nohut noian Noica noile noima noima noime noimi noita noite nomad nomei nomic nomie nomol nonei nonet noneu nopal nopeu nopez nopti norea noria noric norie norii norit norma norma norme noroc norod noroi noros norul norut notai notar notat notau no-ta notam notei notes notez nouar nouri nouta noute nouti Novac novat novei novez noxei nubil nubuc nucar nucet nucii nucle nucul nucut nudli nufar nugat nulei numai numar numar numea numen nu-mi numim numit nunei nunta nunta nunti nunti nu-os nurca nurca nurci nurka nurlu nursa nurse nu-si nusul nu-si nutra nutri nutui nutul nu-ti nvata ny-an nyaya nylon oabla oable oacar oache oaica oaice oajda oalei oalta oalte oange oante oapta oapte oarba oarbe oarda oarde oarea oarei oarsa oarse oarte oarze oaspe oaste oazei obada obada obaht obada obada obedu obela obele oberi obeza obeze obezi obida obida obide obidi oblet oblic oblig oblon oboli obosi obote obrat obraz obroc obste obsti obtuz obtii obtin obuze ocale ocara ocari ocaua ocaie ocait ocara ocari ocari ocean oceli ocelu ochea ochet ochii ochit ocina ocini ocitu oclus ocnas ocnei ocoli ocrul octal octan octet oculo ocult ocupa ocupa ocupe ocupi odaia odaie odaja odata odaii odeji odeon Odesa odgon odina odine odini odios odiul odont odora odyne oedip oesar ofera ofere oferi ofili ofism ofiur ofset oftat oftez oftic ofuri ogari ogari ogeac ogiva ogiva ogive ogodi ogoia ogoit ogora ogori ohaba ohabe ohmic ohree oidie oieri oiesc oilor oinei oinic oiste oisti oituz oitei ojina ojine ojogi okapi okume olace olaci olana olane olani olari olari oleab oleat oleia oleic olete oleul oleum olimp olita olite oliva olive olmaz olnic ologi oloia Olsen Olson oltar oltul oluri olute omana ombra omega omeni oment ometu ometi omiat omida omida omisa omise omisi omita omite omizi omnem omnia omoii omora omora omori omule om-zi onest onico oniro onora onora ontic oocit oofag oofit oofor oogon oolit opaca opace opaci opait opale opaci opari opera opera opere opiat opina opise opiul opium opoza oprea opreg oprim oprit opsas optar optat optez optic optim opuna opune opuri opusa opuse opust opusi oraje orala orale orali oranj orant oranz orara orare orari orase orand orbea orbec orbet orbia orbie orbii orbis orbit orbul orcan orcic ordia ordie ordii ordin ordon oreav orele orfan orfeu orfic organ orgar orgia orgie orgii orias orice oriei orier orile orion Orion oriso orita orlon orman ornat ornez ornic ornit ornus orori orpie ortac ortak ortan ortic ortit ortul oruri Oryza orzar orzul osana oscar oscei oscul osebi osiac osiei osman osmiu osmol ososi ospat ospel osram ossia ostas ostas ostia ostic ostie ostii ostil ostoi osuar osute osean osene oseni ostea ostii ostit otace otaje otava otavi otcos otcup otele otfel otgon other otice otici otinc otita otite otova otroc oturi otara otari otari otele oteli oteri oteri oteti oteti otios ouale oua-n ouand oulet oului ousor ovala ovala ovale ovali ovare ovata ovata ovate ovati ovesu oveze ovili ovina ovina ovine ovini ovism ovoid ovrei ovreu ovula ovule oxida oxido oxiur oxizi ozena ozene ozide ozona pacat pacea pacol pacos pacte padja padoc padre padus pafta pagai pagel pagur pagus pahar pahna paian paici paiei paiet paine paing paiol paion paios pairi paisa paiul pajii palan palas palat palca palce palee palei paler palha palia palid palie palii palio paliu palma palma palme palmi palos palpa palpa palpe palux pamet pamez pampa panas panax panda panel paner panez panic panik panou pansa panta panta pante panus panza papal papat papei papii papir Papua papuc papus parai parat parca parca parce Parce parei parez parfe paria paric parie parii parij parip Paris pariu parod paroh paroi paroj parol parom paros parsi parte parti party parti parul parus parus pasaj pasat pasca pasei pasez pasiv pasla pasta pasta paste pasti pasul pasca pasei pasii pasli pasol paste Paste pasti Pasti pasus pater pateu patio patos patra patru patul pauca pauce pauen pauza pauza pauze pavaj pavat pavea Pavel pavez pavio pavor pazar pazei pazia pazie pazii pabai pacat pacii padai pafug pagan pahar paier paios paius paiut palai palea palis palit palmi panar papie papuc paras parat parea parem paros parti parti parui parul parut parut pasat pasui pasar pasea pasim pasit pasoi pasti patat patez patic patie patuc patui patul patut patau patea patim patit paula pauna paune pauni pauri pauza pazea pazim pazit pacai pacai pacla pacla pacle paine paini panda pande pandi panii panza panza panze parai parau parai paras parat parau parei parga parli parrr parsi parte pasla pasla pasle pasli pasim pasin patoc peana peane pecar pecia pecie pecii peciu pedea pedel pedig pedon pedri pegas pegra pehar peior pejma pejme pelaj pelda Peles pelin pelit pelte pelur pembe penaj penal penar penat pence penei penel penet penez pengo penin penis penis penni penny penon penru pensa pensa pense pentu penus peoni pepit peplu pepsi perca perch perde peree perei peren pereu peria perie perii peris perit perja perje perji perla perla perle perna perna perne peron perse persi pertu perus pesac pesar pesce pesos Pesta pesta peste pesti pesim pesin peste pesti petas petec petei petic petit Petre Petru petun petea petio petit pexie pfund piafe piane piano piara piata piata piaza piaza picai picaj picat picam picea picii piclu picni picno picol picon picot picou picro picsa picta picto picui picup picur picus picus picut pieha pieii piele pielm pielo pi-em piemn piept pierd piere pieri piesa piese pieta piete pieze piezi piezo pifan pifei piklu pilaf pilar pilav pilda pilda pilde pilea pilei pilit pilon pilor pilos pilot pilug pilum pinax pinea pinel pinen pinet pingo pinin pinot pinta pinte pinul pinus pinut pioci pi-on pioni piosi piota pipas pipat pipai pipei piper pipez pipit pipoc pirat pirau pireu pirex piric pirol piron pirop pirui pirus pisar pisat pisci piser pisez pisic pisoc pisoi pista piste pisum pisat pisam pisca pisca pista piste pisti pitac pitar pitea pitec pitei pitic pitie pitis pitit pitoi piton pitig pitur pi-ua piuar piuam piuez piuia piuie piuit piure piuta piuuu pivei pivot pixel pixul pizda pizde pizdi pizma pizma pizme pizmi pizza pizza pizze placa placa place placi plaga plaga plagi plaja plaja plaje plaki plana plana plane plani plano plasa plasa plase plasm plast plata plata plate plati plati plaur plava plave plavi playa placi plagi plasa plasi plati plati plang plans plean plebe plebi pleca pleca plece pleci pleda pleda pleni plese plese plesi pletc plete pleti pletu pleul pleur pli-a pliaj pliat plica plice plici plico pliem pliez plimb plina plina pline plini plior plisa plisc plita plita plite pliul plivi plodi plodu ploii plonj plopi ploua ploua plozi plugu pluku plumb pluri plusa plusa pluta pluta plute pluti pluto pneul poala poala poale poama poama poame poara poata poate pocal pocai pocea pocia pocie pocii pocit pocni pocoi podan podar podea podei podet podis podit podit podiu podul podut poema poeme poena poeni poetM poeta poete poeti pofil pofta pofte pofti pogan pogon pogor pohar pohod pohoi pohot pohta pohti po-ie pojar polan polar polca polci polei polen polii polip polis polis polit polje polog polon polua polul polux polza pomai pombe pomet pomii pompa pompa pompe pomul ponce ponei pongo ponit poniv ponor ponos ponov ponta ponta ponte ponti popas popaz popac popea popia popic popie popii popol popor popou popri popsi popul porav porai porci porii porni porno porob poroi poros poros porta porta porte porto porti posac posai posed posib posip posma posta posta posti postu posat posez posta posta poste potai potca potce potea poten potir potol potop potou potoc povod povoi poxie pozai pozar pozat pozau pozei pozez pozna pozne prada prada prade Praga prahu prais praji prana prane prasa prase prawn praxa praxi prazi praci prada praji prasi prasi prava prazi pranz preda preda preia preot presa presa prese preta preti pri-a prian priap price prici prier priit prima prime primi primo prind prins print print prinz prior pripa pripi priti priva privi priza priza prize proba proba probe probi proci proct profa profi proin promt prono proor prora prora prore prost prota proti proto prova prova prove proza proza proze pruda prude pruga pruja pruja pruje pruji pruna pruna prunc prund prune pruni prutu pruzi psalm psalt psamo psela pseud psi-e psiho psili psilo psoas psofo pteri ptero ptoza ptoze puber pubes pubis puchi pucul pudel pudic pudla pudli pudra pudra pudre pueri pufai pufai pufar pufna pufni pufos puful puhav puhai puhoi puiac puica puici puiet puiet puios puire puiri puiti puiuc puiul puiut pujla pulex pulia pulie pulii pulma pulpa pulpa pulpe pulsa pulsi pulso pumni punch punci punct punea punem punga punga punge pungi punic punta punte punti pupat pupai pupam pupei pupic pupil pupos pupui purde purec purga puric purim Purim puriu purja purja purje puroi purta purta purul pusei puseu pusta puste pustu pusca pusca pusit puste pusti putea putem Putin putna putui putut putar putar putca putea putin putoi putui putul puvoi Qatar quale quarc quarz Quine rabat rabda rabde rabel rabia rabic rabie rabii rabin rabit rabla rable rabzi racem racii racla racla racle racul radar radas radei radem radia radic radio radiu radix radom radon radou radub rafeu rafia rafie rafii ragea ragie ragil ragut rahat rahat rahis rahna raiba raibe raina raion raita raita raite raiul rajah rajta ralea ralia ralid raliu ramca ramce ramei ramer ramez ramia ramie ramii ramon ramos rampa rampe ranca ranch randa rande ranga ranzi rapax rapag rapan rapel rapid rapin rapor rasad rasat rasei rashi rasol rastu rasca rasel raspa ratai rataj ratat ratam ratei rates rateu ratez ratio raton ratos ratca ratce ratei ratia ratie ratii ravac ravaj ravak razam razei razia razie razii razna razna razne rabda raboj rabui rabus racan racar racea racit racni racut radiu rafui ragaz ragea raget ragoz raime raire ramas ramas ramai raman ranea rangi ranii ranit rapai rapea rapit rapun rapus rarea raret raris rarit rasad rasar rascu rasei rasol rasti rasuc rasuf rasci ratez ratui ratoi ravar ravas razbi razda razes razni razor razui razus rabar racai racii radea radem ragai rahna raiat raiei raios ramat ramei ramni ramui ranca ranci ranea ranel ranji ransa ranza ranze rapat rapca rapei rapii rapit rapos rasei raset rasul rasni ratan ratos ratui ratul raura rauri ravna ravne ravni razar razna razne re-ad reala reale reali re-ar reaua rebab rebat rebec rebel rebus rebut recad recal recea recel recep reces recic recif recit recoc recta recte recti recto recul recum recuz redan redat redau redea redia redie redii redis rediu redor redox reduc redus refac refec refer refuz regal regat regea reger regia regii regim regiu regla regur reiat reiau reich reici reide reiei reivi rejet relas relax relee releg reles releu relev relin relon relua remic remis remit remor remuu renal renan renci reneg renet renia renie renii renis reniu renta renta rente renul repar reped reper repet repez repic repun repus resac resit resol resta reste resto restr resul resca resce resou retea retes retes retez retiv retom retor retro retur retus retea retin reuda reuma reume reuni reura reuri reusi revad rever revif revin revoc rezec rezil rezit rezol rezon rezum rheno rheum ri-al riali ri-an ri-as ri-at ribes ricin ricsa ricsa ricse ridat ridda ridez ridic ri-em riflu rigai right rigid rigla rigla rigle rimat rimei rimel rimez rinei ri-or ri-os ripez ripos risca risca risma risca risni riste risti ritma riton ritor ritos ritul ritui ri-us rival riyal rizak rizat rizez rizic rizie rizil rizin rizom roaba roaba roabe roada roade roaga roage roasa roase roast roata roata roate robea robei robia robie robii robit robot robul rocca roche rocii rociu rocos rodaj rodan rodat rodea rodeo rodez rodhi rodia rodie rodii rodin rodit rodiu rodor rodos rodul rofii rogoz roiau roiba roiba roibe roibi roire roiri rolan rolei rolul roman rombo romei Romei romeu ronda ronda ronde rondo roneo ronin ronja ropai ropan ropai ropot rosei rosti rosaj rosca rosea rosia rosie rosii rosit rosiu rosul rotan rotar rotas rotat rotca rotea rotil rotim rotis rotit rotog rotor rotii rouai roura roura rozei rozeu rozie rozii roziu ruada ruaje rubai ruban rubat ruber rubia rubil rubin rubla ruble rubra rubus rucar rudar rudas rudea rudei rueni rufar rufei rufet rufos rugat rugam rugbi rugby rugea ruget rugii rugos rugul rugus rugut ruina ruina ruine ruini rujan rujar rujda rujdi rujei rujet rujez rujul rulaj rulat rulam rulez ruliu rulou ruman ruman rumba rumba rumbe rumeg rumen rumex rummy rumpe runda runde runic runza rupea rupia rupie rupii rupse rupta rupta rupte rupti rural rusav rusca rusei Rusia Rusie rusca ruset rusii ruste rusui rutaF rutea ruter rutes rutez rutil sabar sabat sabau sabia sabie sabin sabir sabla sable sabot sabur sacaz sacii sacom sacos sacou sacra sacra sacre sacri sacru sacul sadea sadei sadic sadno safen safeu safic safir safte sagen sagna sagne sagum sahan sahel sahib saiac saiga saila salam salar salau salba salba salbe salca salce salep saleu salic salii salin salip saliu salol salon salop salsa salta salta salte salto salta salte salut salva salva salve samar samba samba sambe sambo samca samce samei sames samka samoa samur sanct sanda sandr sange sania sanie sankt santo sapan sapei sapid sapir sapro sarac sarai sarce sarco sarda sarda sarde sarea sarga saric sarii sarik sarja sarma saros sarpe sarta sarzi sasca sasiu saseu sa-si sasie sasii sasiu satan satar saten satin satir satul satur sa-ti satiu satul sauce saula saule sauna sauna saune savar savat savon savur saxon sazan sabas sabai sabau sabia sabii sabui sacoi sacui sacut sadea sadit sagar saget sagni salaj salas salci salie salii salta salui sa-mi sania sanii sapas sapat sapie sapii sapoi sapun sarac sarad sarar sarat sarea sarez sarii sarim sarin sarit saros sarut sa-si satic satuc satui satul satut sa-ti satui savai sacai salta samce sanet sange sangi sanii santa sante santi sanul sarba sarba sarbe sarbi sarma sarma sarme sasai scada scade scafa scafe scaie scaii scala scala scald scale scalp scama scama scame scana scapa scapa scape scapi scara scara scarp scart scaun Scaun scazi scaci scafa scama scapa scari sca-u scart scena scene schia schie schif schin schip schir schit scioi scita scite sciti sclai sclav sclip scobi scoci scoli scomi scont scopi scops scopt scosi scota scote scoth scoti scrab screm scria scrib scrii scrin scris scriu scrob scrot scrub scrum scuar scufa scufe scuip scula scula scule sculi scump scunc scund scura scure scurg scurm scurs scurt scusa scuti scuza scuza scuze scuzi seaca seama seama seara seara sebum secat secco secer seche sechs secol secta secta secte secui secul secur sedan sedat sedef sedez sedii sediu seduc sedum sedus sefer seger seiga seige seima seime seina seine seini se-is seism seisa seise seizi sejur selba selbe selem seler seltz selva selve seman sembe semem semen semet semic semit semna semna semne semui senar senat senei senet senic senil senin separ sepet sepia sepie sepii sepoy serac seraf serai seral serat serba serba sereg serei seria seric serie serii seros serul serva serve servi servo sesam sesia sesie sesii sesil setca setca setci setea setei seter seton setos setui setul seuri sevai sevas sevei seven sever sexta sexte sexul sezon sface sfada sfant sfant sfara sfarc sfare sfadi sfant sfarc sfera sfere sfert sfeti sfezi sfida sfiet sfiit sfinx sfios sfita sfite sfora sfori shake siaje si-an sibie sibir Sibiu sicar sicii sicni sicra sidef sidei sider siena si-er siesi sifon sigii sigil sigla sigla sigle sigma sigur sihla sihle silan silca silce silea silei silen silex silfa silfe silfi silha silit silon silos siloz silta silui silur silva silve simei simen simia simie simit Simon simta simte simti simun Sinai sinea sinec sines sinet sinet sinia sinie sinii sinod sinua sinus sioux sipca sipci sipet sirec sirep siret sirex siria sirma sirop sirut sisal Sisif sista sitar sitav sitei situa situl sixta sixte slaba slabe slabi slabu slama slana slane slang slava slava slave slavi slabi slaji slavi sleau sledi sleia sleit slini sloop slops slota slova slove sluga sluga slugi sluis sluji sluta sluta slute sluti sluti smalt smalt smash smaci smarc smard smead smeci smede smedu smeri smesa smeur smezi smian smida smide Smith smola smoli smomi smuci smuga smuge smulg smuls smult snack snaga snaga snaip snama sname snipe snoav snoba snobi snopi snopu soage soaie soane soare soata bingo soate sobar sobei sobol sobor sobra sobre sobri sobru socac socio soclu socot socri socru socul sodal sodar sodat sodas sodei sodic sodiu sodom Sofia sofra so-ia soiei soili soios soiul soiuz solan solar solba solbe solda solda solde soldu solea solei solen solia solid solie solii Solon solul solva solve solvi solzi soman somat somes somez somna somni somon somot sonar sonat sonda sonda sonde sonet sonez sonic sonka sonne sonor sopor sopti sorab sorbi sorea sorei sorel sorex Sorin sorit soroc soros Soros sorta sorti sorti sosea sosie sosii sosit sosma sosul sotea soteu sotez sotho sotie sotia sotie sotii sotuc sotul sovon spada spada spade spaga spala sparg spart spasm spata spata spate spatu spala spasi spasi spana spane spani spant spanz sparc speie spelb spele spera spera spere speri spesa spese spete speti speta speta spete speze spice spici spicu spina spina spine spini spion spira spira spire spirt spita spita spita spite spiza splai splau splin split spo-i spoia spoit spori sport sporu spray sprit sprit spuma spuma spume spuna spune spurc spusa spusc spuse spusi sputa spute spuza spuza spuze spuzi stada stade staff stana stana stand stane stang stani stanu stare stari start state stati staul stava stave stavi staza staze staci stari statu staur stavi stalp stana stana stand stane stang starc starv ste-a steag steak stean steji stela stele stema stema steme steni stepa stepa stepe steri stern sterp steze stidi sti-e stihu stila stilb stile stima stima stime stimu sting stins stipa stipu stire stiva stiva stive stoca stoca stoci stofa stofa stofe stogu stoic stola stole stoli stone stopa stopa stope storc stors story strai stras strat strei stres stria stric strie strig strii striu strix stroh stroi strop struc strug strup strut stupa stupa stupe stupi stura sturz suava suave suavi suber subit subst sucas sucea sucie sucit suciu sucon sucub sucui sucul sudac sudaj sudan sudat sudez sudic sudit sudor suduc sudui sudul sufar sufit sufix sufla sufla sufle suflu sufoc sugar sugei sugel sugem sugiu sugus suhat suian suide suina suine suini suire suiri suita suita suite suiti suiuz sujet sulac sular sulei sulen sulfs sulky suloi sulta sulte sulul sumac suman sumar su-ma sumca sumec sumei sumer sumes sumet sumet sumez sumut sunai sunat sunau sunam sunet sunii sunna su-oa supat supar supei super supeu supez supie supin supla suple supli suplu supra supta supti supui supun supus sural surad suras surda surda surde surdo surea surec suret surie surii surit suriu surla surle surma surma surou surpa surpa surpe sursa sursa surse surzi susai susam susan susik susul susur susei susni sutar sutas su-ta sutei sutra suvac suvai suvoi svada svada svelt swing sabac sabar sacal safar safer saiba saibe saica saida saier salai salau salet saliu salma saman samoa samot sanal sanja sansa sansa sanse santa sapca sapca sapei sapou sapte saran sarba sarga sarge sargi sarja sarja sarje sarla sarle sarpe sasea sasiu sasla sasiu sasma saten satra satra satre sauca savus sayak sagii sagui saici salut sapca sarui sauas sasai scoli scort seasa sedea sedem sefei sefia sefie sefii seful seged seiac seici selac selar senaj senal sepci septe serbe serbi serif serin serit serpe serpi serui sesar sesos setre seuas sever sevro sezau sezut sfant sfara sfart sfeii sfert si-ac siace si-ar si-au siboi sicui sifon siism siita siite siiti silor si-mi sinar sinei sinor sinui sipca sipca sipci sipot sipul sirag sirei siret siric siroi sirui sirul sirut sisai sisca si-si sisti sitar sitar sitei si-ti situi si-un sivoi slaif slapi slarf sleah sleau sleii slipa slire sliri sloag smale snala snaps sneap soada soade soala soana soara soava soave socat socul sodos sodou sofaj sofat sofei sofel sofer sofez sogor sohan soimi soiog soldi solna somaj somac somer somez sonti sopai sopot sopru sopti soric sosea soset sosoi soson sosot sosta sotca sotia sotie sotii sovai sovar sovai sovai sovin sozie spaga spais spalt spani spagi spert spiti split spori sprat sprit sprot stabi staif stair stamp stand starb steah steap stepi sterc stere sterg sters stert steta steze stiai stiam stiau stift stima stime stimi stiob stiol stirb stire stiri stiti stiui stiup stiut stofa straf stram stras strec stric strol sturm sturt subei suber sucar sucar sueta suete sufan sufla sugar sugui suier suiet suiet suios suita suite sular suler sumar sumbi sumen sunar sunca sunci suner sunet sunta supar surii suriu surub surui surup susta suste susni susoi susop susta susui sutat sutau suter suteu sutez sutic sutit sutor suvar suvei suvoi svaba svabe svabi svart sveda svede svezi tabac tabak taban tabar tabar tabel tabes tabia tabie tabii tabla tabla table tabun tacam tacet tacit tacla tacoz tacta tacte tacul tafta tafta tagma tagma tagme tahan tahin taiat taica taica taier taiga taina taina taine taior tajna takar takim takke takla takos talaj talam talan talar talas talaz talam talei taler talia talie talii talim taliu talon talpa talpa talul talus taluz tamam taman tamar tamas tamba tamja tamus tanaj tanat tanat tanau tanca tanea tanga tanic tanin tanti taola taole tapaj tapat tapei tapet tapez tapir tapsa tarab tarac taraf taraj tarak tarar taras taras tarat tarda tarei targa targa tarif tarka tarla taroc tarod taros tarta tarte tarta tasat taseu tasez taska tasma tason tasta tasta taste tasca tatal Tatal tatei tatin tatua tatut ta-ti tatii taula tauri tavan tavla tavli taxai taxam taxei taxer taxez taxid taxim taxon taxus tayin tabii tacai tacea tacem tacut tagii taiat taiau taiem taier taind taini taios taius talpi tapsi taram tarca targi taria tarie tarii tarim tasca tasti tatar tatan tatic tatuc tatut tauia taune tauni tauri tausi tavii tacai talni talos talvi tampa tampe tampi tanar tanga tanji tarau tarai taram taras tarat tarfa tarfe tarla tarle tarli tarna tarne tarpi tarsa tarse tarsa tarsi tarta tarte tarti tasni tatoi teaca teaca te-ai te-am teama teama teanc teapa te-ar teara teasc teatr tebei tecii tecui teflu tefui tegel tegla tehip tehna tehno tehui teica teica teici teier teina teios teism teist teiul telal telec telef telev telex telos telul telur temea temei temem tempo temui temut tenda tenda tende tenia tenie tenii tenis tenno tenor tenta tenta tente tenue tenul te-oi tepei tepih tepsi teras teraz terci teren terfe terii terme termo terna terne terni terom teros terra terta terte terti terza tesac tesis tesla tesla tesle testa testa teste tesut tesea tesit tesos tetea tetei tetra teuca teuga teuge teuri texan texas texte texts tezei tezek theta tiara tiara tiare tibet Tibet tibia tibii tical ticai ticna ticni ticsi tidva ti-er tifan tific tifla tifla tifle tifon tifos tigan tigai tigra tigri tigru tigva tigve tihna tihne tihni tijei tilda tilde tilia timar timfi timid timie timii timin timis timol timpi timus tinca tinda tinda tinde tinea tinei tinge tinos tinov tinta tinta tinta tinut tinzi tioli tipaj tipar tipai tipia tipic tipie tipii tipla tiplu tipos tipsa tipul tiraj tiran tirol tirul tisar tisau tisei tisca tisri tisti titan title titlu titra titre titru tiuca tiuia tiute tivea tivga tivic tivit tivul tizei tizic tmeza tmeze tmuri toaca toaca toace toaie toana toana toane toare toast toata toata toate toato tobar tobas tobei tobla tocat tocea tocii tocit tocma tocma tocmi tocso tocul tofus togii toiag toiet toiul tokio tokma tolba tolbe tolei tomat tomba Tomis tomna tomos tomul tonaj tonal tonca tondo tonea tonei tonga tonic tonii tonos tonou tonpu tonti tonti tonul tonus topaz topea topic topit topor topos topul topuz torba torba torid torit toriu toron torri torsi torta torta torte torti total totem totul totum totii toval toxic traca trace traci tract trafa trafe traga trage tragi trama trame tranc tranz trapa trapa trape trasa trasa trase trass trasi trata trata trate traul trawl trada traia traim trair trait trand tranz treaz trebi trece treci trefi treia treie treji trele trema treme trena trena trend trene trent tresa trese treti treze trezi triac triaj trial trias triat trice trici trico triez triod trior trisa trist trisa troia trona tronc tropa tropi trosc trota truba truca truca truda truda trude trudi trufa trufa trufe trufi trugu tr-un trunu trupa trupa trupe trupu trusa truse trust tubaj tubar tubei tuber tubez tubul tucan tudor Tudor tufan tufar tufei tufis tufit tufli tufos tuiei tuies tuior tuiul tulai tulea tulei tuleu tuliu tulti tuluc tului tumba tumba tumbe tumid tumul tunar tunat tunda tunde tunel tuner tunet tunis tunsa tunse tunsi tunul tupai tupeu turan turba turba turbe turbo turca turca turce turci turdi turei turla turla turle turma turma turme turna turna turnu turta turta turte turti turui turul tusea tusei tuset tusor tusat tusam tusea tusei tuseu tusez tusii tusit tutca tutea tutor tu-tu tutuc tutui tutum tutun tutie tutii tweed twist tagar tagla tagle tagra taica taice tamti tanta tapap tapin tapos tapul Țapul tarat tarca tarca tarna tarus ta-ta tatei tacan tahni tapoi tapuc taran tarca tarci tarii tarna tarus tasni tafna tafna tafne tafni tahla talea tanas tanca tance tanci tarau tarai tarfa tasni tasti tatai tatei tatos teapa teara teasa teava teava teche telep teler telui telul tepei tepii tepos tesal tesal te-se tesem teste tesui tesut tevar tevii tevos tevui ti-ai ti-al ti-am ti-an ti-ar ti-as ticla ticle ticni ticui tigan tigai tigai tigla tigle tilai tilor timet timir tinca tinea tinem tinta tinta tinte tinti tinti tinut ti-oa ti-oi ti-os tipar tipat tipau tipat tipau tipet tipis tipla tiple tipot titei tiuia tiuie tiuit tiuri tivil tivli tlanu toaba toabe toala toale toapa toape toata tobak tobac tocai toiul tokan tolet tolut topai topar tosca toste tucal tucat tucai tucar tugui tuhal tuhai tuica tuica tuici tuluc tuluf tupai turca turca turci turka turui tusca tuste tusti tutui tutul tutur ucida ucide ucisa ucise ucisi uclei udare udata udari udand udele udeli udite uduri ugere ugili uguia uguie uguit uiaga uideo uimea uimei uimit uiski uitai uitat uitau uitam uitit uituc uiuiu ujbei ujina ujine ujuie ulani ulcea ulcer ulcus uleia uleie ulema ulica ulica ulies uliii ulise Ulise ulita ulite uliti uliul uliut ulmul ulric ultim ultra ultur uluba uluca uluca uluce uluci ulufe uluia uluit umana umane umani umbal umbla umbla umble umbli umblu umbon umbra umbra umbre umbri umeda umede u-men umere umeri umezi umfla umfla umfle umfli umflu umila umile umili umori umple umpli umplu una-n unchi uncia uncie uncii uncle undea undei undez undit undoi undos undui uneau uneia uneie unele unesc ungar ungem unghi ungii ungur uniat uniax unica unica unice unici unime unimi unind unire uniri unita unita unite uniti unora unora unsei unsul unspe untar untos untul unuia unuie urale urare urati urari urasc urand urata urate urati urban urbea urbei urcai urcat urcau urcam urceo urcus urdar urdei urdin urduc urech ureea ureei ureii urens urgia urgie urgii urias urias urice urile urina urina urine urisa urlat urlet urlii urloi urlui urlup urmai urmas urmat urmau urmam urmei urmez urnea urnei ursar ursea ursin ursit ursoi urson ursul ursus ursuz ursii uruit urzea urzic urzit urzoi urzuz uscat uscam usnea usnei ustas ustav usuca usuce usuci uschi useri usier usile usita usite usori usuia usura usure usuta usute utere utila utila utile utili uvala uveei uviol uvraj uvula uvula uvule uzare uzata uzate uzati uzari uzand uzbec uzeze uzina uzina uzine uzita uzual uzuor uzura uzura uzuri uzurp vacat vacii vadea vadra vadra vafei vagas vagil vagin vagon vague vaier vaiet vaita vaita vaite valah valea valet valeu valex valid valii valiu valma valma valon valsa valtn valul valva valva valve vamal vames vamos vampa vampe Vanda vanei vapor varan varda varec varga varga varia varie varii variu varos varsa varul varus varva varza varza vasal vasca vasel vasla vasta vaste vasul vasti vataf vatam vatei vates vatir vatos vatra vatra v-ati vazei vazon vacar vadan vadea vadit vaduv vagas vaile vaina vaita valau valeu valmi valug valui valul valus vamii vamui vapai vapsi varar varat varez varga vargi varos varsa varui varul vasar vasla vasle vasut vataf vatas vatav vatui vazul vazut vajai vajii valca valfa valva valva valve vanar vanat vanat vanda vanez vanji vanos varam varat varca varci varfn varsa varsa varse varsi varti vasla vasla vasle vasli vasca vasca vaste veaca veche vechi vecia vecie vecii vecin vecui vedda vedea vedem vedic vedre veget veghe veghi vejie vekil velar velei velic velin velit velur venal venea venei venet venie venii venim venin venit venos venus Venus verbe verde verei verga verga verge vergi veric verif verii veris verna veros verse verso versi verum verva verva verze verzi vesca vesea vesel veslo vespa vesta vesta veste vesti vesca vesca veste vesti vetre vetri vexat vexez vexil vezet vezir Vianu viata viata viata vibra vicar vicia vicii viciu vidaj vidam vidat video videz vidma vidma vidme vidra vidra vidre vidul vieko viela viele vi-em viena Viena vieri viers vieru vi-et vieti vieze vifel vifor vigan vigie vigii vigil vigla vigle viile viind vilan vilei vilit vilos vinar vinat vinca vince vinci vinde vinei vinii vinil viniu vinos vinui vinul vinut viola viola viole viori vipia vipie vipii vipla viraj viral viran virat vires virez virga virid viril virus visai visat visau visee visez vison visul viseu visin visla vitae vital vitis vitre vitro vitea vitei vitel vitiu vitos vivat vizai vizat vizau vizei vizez vizir vizon vizor vlaga vlaga v-lea voala voava vocab vocal vocea vocii vocot vodca vodca voder voiaj voiam voiau voile voind voios voire voiri voita voiti volan volar volei volet voleu Volga volga voloc volog volsc volta volta volte volti volum volve vomat vomei vomer vomez vomic vomit vopsi vorba vorba vorbe voret vosca votat votau votca votca votci votez votiv votri votru votul votum vraci vraja vraja vrana vrane vraji vrand vream vreau vreji vreme vremi vrere vreri vreti vreun vrevi vriei vrila vrila vrile vroia vrsta vrura vruta vrute vruti vuiet vuire vuiri vulpe vulpi vulva vulva vulve vurta vutca vuvar vuvei vuvui v-vii vydra wafer wagen walon wattM weber Weber widia wolof Wotan xanth xanto xenia Xenia xenie xenii Xenii xenon xenos xeres Xeres xeric xerom xerox xifie xifos xilan xilem xilen xilit xilol xilon xipho xisma x-lea xu-al x-uri xviii xylol xylon xysme xyste yacht yades yahni yalei yarzi yatak yavas yedek yemen ye-ye yogin yo-yo ytrit ytriu yuani yucca yufka yunga yuppi y-uri zabet zabit zabra zabre zabun zacas zacea zacon zadar zadei zadia zadie zadii zadra zaduf zafir zafla zaflu zagan zager zahar zahar zaica zaici zaifa zaife zaifi zaimf zaimi zairi zakon zalau zalei zalog zalta zamac zaman zamba zambi zambo zamca zanat zanca zanci zapaj zapat zapca zapez zapis zapor zaraf zarba zarea zarei zarif zarja zarna zarpa zarul zarva zatca zatul za-ur zavod zabic zabig zabon zabun zacas zacea zacem zacut zadar zaduf zaduh zaduv zagan zagas zagaz zahar zahat zahai zalar zalog zalud zalug zaman zamci zamos zanat zapai zapci zapor zapri zapsi zapuc zapuh zarar zarea zarii zarit zarvi zasti zatci zatie zatii zaton zator zatri zauit zavat zavai zavod zavoi zavor zamba zambi zanei zarna zarne zarni zatie zatii zazai zbalt zbant zbata zbate zbati zbant zbarn zbeau zbeng zbice zbici zbier zbilt zbiri zbjeg zbori zbori zbors zbura zburd zdrob zeada zeale zeama zeama zeaza zebra zebra zebre zecea zecer zeche zefir zeghe zeghi zeiei zeina zeine zeire zeita zeita zeita zeite zelar zelos zelot zelul zemii zemos zemui zenda zenit Zenon zeppa zeppa zerar zerda zerea zerna zerne zeros zerul zetaj zetar zetui zgalt zgalt zgaul zgaur zgaia zgait zgalt zgamb zgarc zgoda zgodi zgoni zguli zgura zgura zguri zi-an ziare zicas zicea zicem zicii zidar zidea zidit zidui zidul zigag zigot zilas zilei ziler zilia zilos zimbi zimte zimta zimti zinca zi-on zisei zisul zisii zitat zitia zitie zitii zitum ziuca ziuci zizai zlace zloba zloty zloti zmeie zmeii zmeoi zmeul zmeur zmulg znama zname zoaba zoaia zoaie zoala zoale zoana zoane zoarh zoava zoave zobea zobit zobon zodia zodie zodii zoile zoios zoiti zolea zolga zolit zolza zolza zolze zombi zonaj zonal zonar zonbu zonei zooid zoose zooza zopai zoppa zorba zorea zorei zorel zorii zoril zorit zoriu zorli zorul zotca zovon zuavi zulia zulie zulii zuluf zulum zummm zupai zurai zurba zurba zurbe dildo zurna zurrr zurui zurul zuzai zuzet zuzui zuzur zvant zvarl zvarr zvelt zvoni zymol melca coios";

  const wordsArray = wordList.split(" ");



  const [word, setWord] = useState('SUPER');


  const [selectedLetters, setSelectedLetters] = useState([]);

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];


  const [firstRowColor, setFirstRowColor] = useState(Array(firstRow.length).fill(''));
  const [secondRowColor, setSecondRowColor] = useState(Array(secondRow.length).fill(''));
  const [thirdRowColor, setThirdRowColor] = useState(Array(thirdRow.length).fill(''));




  const WORD_LENGTH = 5;

  const [modifiedRowIndex, setModifiedRowIndex] = useState(-1);
  const [animatingSquareIndex, setAnimatingSquareIndex] = useState(-1);

  const [errorWordNotExist, setErrorWordNotExist]=useState(false);
  useEffect(() => {
    let timeoutId;
    if (errorWordNotExist) {
      timeoutId = setTimeout(() => {
        setErrorWordNotExist(0);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [errorWordNotExist]);
  const [matrix, setMatrix] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);

  const [wordToGuess, setWordToGuess] = useState('');

  const [Win, setWin] = useState(false);
  const[Lose, setLose]=useState(false);

  const [showOverlay, setShowOverlay] = useState(false);




  const handleClose = () => {
    setShowOverlay(false);
  };

  const emojiRef = useRef(null);


  const [c, setC] = useState(0);

  const [colors, setColors] = useState([
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']]);


  const renderEmoji = (color) => {
    switch (color) {
      case 'correct':
        return '🟩';
      case 'exists':
        return '🟨';
      case 'grey':
        return '⬛';
      default:
        return '';
    }
  };
  const [mode, setMode] = useState();

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? "dark" : "light";
        console.log(colorScheme); // "dark" or "light"
        setMode(colorScheme);
      });
  }, []);


  const hasPlayerFinishedToday = () => {
    const lastPlayDate = localStorage.getItem('finishedToday');
    if (lastPlayDate) {
      const today = new Date().toDateString();
      return lastPlayDate === today;
    }
    return false;
  };


  const hasPlayerLoggedToday = () => {
    if(!localStorage.getItem('lastLogDay')){
      const lastPlayDate = '0';
    }else{
    const lastPlayDate = localStorage.getItem('lastLogDay');
    if (lastPlayDate) {
      const today = new Date().toDateString();
      return lastPlayDate === today;
    }}
    return false;
  
  };

  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);
 
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    if(localStorage.getItem('win') === 'true'){
      setShowOverlay(true);
    }else if (localStorage.getItem('lost') === 'true'){
      setShowOverlay(true);
    }
    const savedMatrix = localStorage.getItem('matrix');
    const savedColors = localStorage.getItem('colors');
    const firstRowColorSaved = localStorage.getItem('FirstRowColor');
    const secondRowColorSaved = localStorage.getItem('SecondRowColor');
    const thirdRowColorSaved = localStorage.getItem('ThirdRowColor');

    if (savedMatrix && colors) {
      setMatrix(JSON.parse(savedMatrix));
      setColors(JSON.parse(savedColors));
      setFirstRowColor(JSON.parse(firstRowColorSaved))
      setSecondRowColor(JSON.parse(secondRowColorSaved))
      setThirdRowColor(JSON.parse(thirdRowColorSaved))
      setCurrentColumn(0);
      setCurrentRow(parseInt(localStorage.getItem('row'))+1);
    }
    if(!hasPlayerLoggedToday()){
      localStorage.clear();
      localStorage.setItem('lastLogDay', new Date().toDateString());
      window.location.reload(true)
    }
  }, []);

  const[numarare, setNumarare]=useState(false);

  const handleCopy = () => {
    const emojis = colors
    .filter((row) => row.some((color) => color !== ''))
    .map((row) => row.map((color) => renderEmoji(color)).join(''))
    .join('\n');
      if (emojis) {
      navigator.clipboard.writeText("Wordle Baban" + '\n' + emojis + '\n' + '\n' +  "https://apollootty.github.io/romanian-wordle");
    }
  };

  const [keyboardButtonPressed, setKeyboardButtonPressed] = useState(false);
  const [zoomedRowIndex, setZoomedRowIndex] = useState(null);
  const [zoomedColumnIndex, setZoomedColumnIndex] = useState(null);


  const handleLetterClick = (letter) => {
    if (!validKeys.includes(letter)) return;
    if (!hasPlayerFinishedToday()){
    if (!Win && !Lose) {

      if(c<5 && letter==="Enter"){
        setNumarare(true);
      }else{
        setNumarare(false);
      }

      if (letter === "Delete" && c > 0) {
        console.log("Del", letter);
        setC(c - 1);
        const updatedMatrix = [...matrix];
        updatedMatrix[currentRow][currentColumn - 1] = '';
        setMatrix(updatedMatrix);
        setWordToGuess((prevWord) => prevWord.slice(0, -1));
        if (currentColumn > 0) setCurrentColumn(currentColumn - 1);
  
    }
     else if (letter === 'Enter' && c === 5) {
        if (word === wordToGuess.toUpperCase()) {
        }
        // Check if the word exists in the text file
        const wordToCheck = wordToGuess.toLowerCase();
        let found = wordsArray.includes(wordToCheck.trim());
        if (found) {
          setC(0);
          setCurrentColumn(0);
          setCurrentRow(currentRow + 1);
          const updatedMatrix = [...matrix];
          setMatrix(updatedMatrix);
          checkWord();
          setWordToGuess(''); // Reset the word variable
          setErrorWordNotExist(false); // Reset error state since the word exists
        } else {
          setErrorWordNotExist(true); // Set error state if the word doesn't exist
        }
      } else if (letter !== "Enter" && c !== 5 && letter !== "Delete") {
        if (currentColumn < 5) {
          setC(c + 1);
          setWordToGuess((prevWord) => prevWord + letter); // Append the letter to the word
          const updatedMatrix = [...matrix];
          updatedMatrix[currentRow][currentColumn] = letter;
          setMatrix(updatedMatrix);
          setCurrentColumn(currentColumn + 1);
          setZoomedRowIndex(currentRow); // Set the zoomedRowIndex to the current row
          setZoomedColumnIndex(currentColumn);
          console.log(letter, currentColumn, currentRow, c);
        } else {
          setZoomedRowIndex(null); // Reset the zoomedRowIndex if it's not needed
          setZoomedColumnIndex(null); // Reset the zoomedColumnIndex if it's not needed
        }
      }
    }}
  };
  
  const validKeys = [
    ...firstRow,
    ...secondRow,
    ...thirdRow,
    'Enter',
    'Delete'
  ];

  const handleKeyPress = (event) => {
    let letter = event.key.toUpperCase();
    // Convert 'Backspace' to 'Delete' as per your handler requirements
    if (letter === 'BACKSPACE') {
      letter = 'Delete';
    }
    if (letter === 'ENTER') {
      letter = 'Enter';
    }
    console.log(letter);

    if (validKeys.includes(letter)) {
      handleLetterClick(letter);
    }
  };
  
  useEffect(() => {
    // Function to handle actual key press event
 
  
    // Add the event listener
    window.addEventListener('keydown', handleKeyPress);
  
    // Return a cleanup function that will be run when the component is unmounting.
    return () => {
      // Remove the event listener
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]); // Empty dependency array means this effect runs once when the component mounts, and cleanup
  


  


  function computeColors(targetWord, guess) {
    const colors = Array(WORD_LENGTH).fill(null);
    const indicesOfIncorrectLettersInGuess = [];
    const targetLetters = {};
  
    for (let i = 0; i < WORD_LENGTH; ++i) {
      let targetLetter = targetWord[i];
  
      if (targetLetter in targetLetters) {
        targetLetters[targetLetter]++;
      } else {
        targetLetters[targetLetter] = 1;
      }
  
      if (guess[i] === targetLetter) {
        colors[i] = "correct";
        targetLetters[targetLetter]--;
      } else {
        indicesOfIncorrectLettersInGuess.push(i);
      }
    }
  
    const updatedFirstRowColor = [...firstRowColor];
    const updatedSecondRowColor = [...secondRowColor];
    const updatedThirdRowColor = [...thirdRowColor];
  
    for (const i of indicesOfIncorrectLettersInGuess) {
      let guessLetter = guess[i];
  
      if (guessLetter in targetLetters && targetLetters[guessLetter] > 0) {
        colors[i] = "exists";
        targetLetters[guessLetter]--;
      } else if (colors[i] !== "correct") {
        colors[i] = "grey";
      }
    }
  
    for (let j = 0; j < firstRow.length; j++) {
      for (let k = 0; k < firstRow.length; k++) {
        if (firstRow[k] === guess[j] && updatedFirstRowColor[k] !== "correct") {
          if (updatedFirstRowColor[k] !== "exists" || colors[j] !== "grey") {
            updatedFirstRowColor[k] = colors[j];
          }
        }
      }
    }
    
  
    for (let j = 0; j < secondRow.length; j++) {
      for (let k = 0; k < secondRow.length; k++) {
        if (secondRow[k] === guess[j] && updatedSecondRowColor[k] !== "correct") {
          if (updatedSecondRowColor[k] !== "exists" || colors[j] !== "grey") {
          updatedSecondRowColor[k] = colors[j];
          }
        }
      }
    }
  
    for (let j = 0; j < thirdRow.length; j++) {
      for (let k = 0; k < thirdRow.length; k++) {
        if (thirdRow[k] === guess[j] && updatedThirdRowColor[k] !== "correct") {
          if (updatedThirdRowColor[k] !== "exists" || colors[j] !== "grey") {
          updatedThirdRowColor[k] = colors[j];
          }
        }
      }
    }
  
    setFirstRowColor(updatedFirstRowColor);
    setSecondRowColor(updatedSecondRowColor);
    setThirdRowColor(updatedThirdRowColor);
  
    localStorage.setItem('FirstRowColor', JSON.stringify(updatedFirstRowColor));
    localStorage.setItem('SecondRowColor', JSON.stringify(updatedSecondRowColor));
    localStorage.setItem('ThirdRowColor', JSON.stringify(updatedThirdRowColor));

    localStorage.setItem('column', currentColumn);
    localStorage.setItem('row', currentRow);

    localStorage.setItem('matrix', JSON.stringify(matrix));
    localStorage.setItem('colors', JSON.stringify(colors));

    return colors;
  }
  
  
  const checkWord = () => {
    const guessedWord = matrix[currentRow].join('');
    const updatedMatrix = [...matrix];
    const colorsCopy = [...colors];
  
    const computedColors = computeColors(word, guessedWord);
  
    const updateColors = (index) => {
      if (index >= updatedMatrix[currentRow].length) return;
  
      updatedMatrix[currentRow][index] = guessedWord[index];
      if (!colorsCopy[currentRow]) {
        colorsCopy[currentRow] = [];
      }
      colorsCopy[currentRow][index] = computedColors[index];
      localStorage.setItem('colors', JSON.stringify(colorsCopy));
      setMatrix(updatedMatrix);
      setColors(colorsCopy);
  
      setTimeout(() => {
        updateColors(index + 1);
      }, 200);
    };

    updateColors(0);
    setModifiedRowIndex(currentRow);
    setAnimatingSquareIndex(0);
    if(word === wordToGuess.toUpperCase()){
      setWin(true);
      localStorage.setItem('finishedToday', new Date().toDateString());
      localStorage.setItem('win', 'true');
      const delay = 1700; // Delay in milliseconds (e.g., 2000ms = 2 seconds)

    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, delay);
      return // Set Win to true if the word is guessed correctly
    }
    if(currentRow===5){
      setLose(true);
      localStorage.setItem('finishedToday', new Date().toDateString());
      localStorage.setItem('lost', 'true');
      const delay = 1700; // Delay in milliseconds (e.g., 2000ms = 2 seconds)

    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, delay);
      return // Set Win to true if the word is guessed correctly
    }
  };
  
  
  useEffect(() => {
    if (animatingSquareIndex !== -1) {
      const timer = setTimeout(() => {
        setAnimatingSquareIndex((prevIndex) => prevIndex + 1);
      }, 200); // Adjust the delay duration (in milliseconds) as needed
  
      return () => clearTimeout(timer);
    }
  }, [animatingSquareIndex]);
  


  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    if (currentRow > 0) {
      const timeout = setTimeout(() => {
        setAnimationIndex(animationIndex + 1);
      }, 200);
  
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentRow, animationIndex]);

  const [lightdark, setLightDark] = useState(false);

const handleThemeChange = () => {
  setLightDark((prevState) => !prevState);
};

  return (
<div>
    <div className={`error-message ${errorWordNotExist ? 'show' : ''}`}>
      Acest cuvant nu exista.
        </div>

        <div className={`error-message ${numarare ? 'show' : ''}`}>
          Trebuie sa introduci 5 litere!
        </div>

      <div className={`win ${Win ? 'show' : ''}`}>
       Noa
      </div>
      
      {showOverlay && localStorage.getItem('win') ? (
        <><div className="blur-background"></div>
    <div className={`overlay ${showOverlay ? 'show' : ''}`}>
      <button className="close-button" onClick={handleClose}>
        X
      </button>
      <h2>Bravo</h2>
      <h3>Share your result!</h3>
      {Lose && (
        <>
          <h3 className='pierd'>Cuvantul era: {word}</h3>
          <h3 className='pierd'>Atat s-a putut.</h3>
        </>
      )}
      {colors.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((color, columnIndex) => (
            <span key={columnIndex}>{renderEmoji(color)}</span>
          ))}
        </div>
      ))}

      <button className='buton_copy' onClick={handleCopy}>
        Copiază să trimiți pe grup (ăsta e un buton in caz ca nu ți-ai dat seama)
      </button>
      <textarea ref={emojiRef} style={{ position: 'absolute', top: -9999, left: -9999 }} />
    </div>
    </>
  ) : null}

{showOverlay && localStorage.getItem('lost') ? (
          <><div className="blur-background"></div>
        <div className={`overlay ${showOverlay ? 'show' : ''}`}>
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
            {Lose && (
              <>
                <h3 className='pierd'>Cuvantul era: {word}</h3>
                <h3  className='pierd'>Atat s-a putut.</h3>
            </>
          )}
          {colors.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((color, columnIndex) => (
            <span key={columnIndex}>{renderEmoji(color)}</span>
          ))}
        </div>
      ))}
      <button className='buton_copy' onClick={handleCopy}>Copiaza sa trimiti pe grup (asta e un buton in caz ca nu ti-ai dat seama)</button>
      <textarea ref={emojiRef} style={{ position: 'absolute', top: -9999, left: -9999 }} />
        </div>
        </>
      ) : null}

      <div className="content">
       
      </div>

<div className="matrix-container">
  <div className="matrix">
    {matrix.map((row, rowIndex) => (
      <div key={rowIndex} className={`row ${rowIndex === currentRow ? 'current-row' : ''}`}>
        {row.map((letter, columnIndex) => (
          <div
            key={columnIndex}
            className={`square ${colors[rowIndex][columnIndex]} ${rowIndex === modifiedRowIndex && columnIndex <= animatingSquareIndex ? 'animate' : ''} ${zoomedRowIndex !== null && zoomedRowIndex === rowIndex && zoomedColumnIndex !== null && zoomedColumnIndex === columnIndex ? 'expand' : ''} ${matrix[rowIndex][columnIndex] ? 'has-letter' : ''}`}
            >
            <span>{letter}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
<div>
      
    </div>
    <div className='keyboard-container'>
      <div id="keyboard" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Keyboard alphabet={firstRow} onClick={handleLetterClick} color={firstRowColor} lightdarkmode={lightdark}/>
      </div>
      <div id="keyboard" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Keyboard alphabet={secondRow} onClick={handleLetterClick} color={secondRowColor} lightdarkmode={lightdark}/>
      </div>

      <div id="keyboard" style={{ display: 'flex', flexDirection: '', alignItems: 'center', justifyContent: 'center' }}>
        <Keyboard alphabet={['Enter']} onClick={handleLetterClick} className=".keyboard-button.enter_delete" />
        <Keyboard alphabet={thirdRow} onClick={handleLetterClick} color={thirdRowColor} lightdarkmode={lightdark}/>
        <Keyboard alphabet={['Delete']} onClick={handleLetterClick} />
      </div>
      <p>{selectedLetters.join('')}</p>
      <div  style={{ display: 'flex',flexDirection: '', alignItems: 'center', justifyContent: 'center' }}>
      <button id='lightdarkmode' onClick={handleThemeChange}>
        Pentru cei care folosesc forced dark mode
      </button>
        </div>
      
      </div>
      
    </div>
  );
};

export default App;

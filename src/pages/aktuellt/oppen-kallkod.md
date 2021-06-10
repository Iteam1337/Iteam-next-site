---
title: "Vad är öppen källkod och varför ska du bry dig?"
date: "2021-06-10"
image: "/images/fsfe.jpeg"
intro: "Öppen källkod är mycket mer än bara gratis programvara. Det är en ideologi som rimmar väl med Sveriges och Europas värderingar"
---

Många konsultfirmor har som affärsidé att låsa in sina kunder, både genom att låsa in data och låsa in källkod. Våra värderingar på Iteam är att Skapa värde, Ha kul och Göra något bra - och de värderingarna leder oss fram till att vi hellre hjälper våra kunder att få mer värde genom att bygga vidare på tidigare arbete - än att göra om samma jobb om och om igen. Det blir billigare, snabbare och bättre helt enkelt. Och vi kommer vidare i digitaliseringen istället för att stå kvar och stampa.

## Så, vad är då öppen källkod?

Grunden är att källkoden är tillgänglig och att du får ändra i och dela med dig av den, d.v.s. att den är släppt under en licens som tillåter det. I princip räcker det att publicera koden under en sådan licens för att säga att projektet är öppen källkod, men det skapar inte så mycket värde om ingen kan bygga vidare på koden.
Öppen källkod används i nästan allt du använder till vardags. Oavsett om du slår på TV:n, mobilen eller kör din bil så använder du digital mjukvara som har sin källkod publicerad öppet med en licens som gör att du kan hämta den, förändra den och ibland även sälja en produkt med källkoden inbyggd.
Klassiska exempel på projekt med öppen källkod är: Linux, Wordpress, MySQL, Android (till största delen), Elasticsearch, Kubernetes, Docker, Node.js, PHP. Som användare är några av projekten troligtvis okända för dig men de lägger grunden till allt från nyhetssajter och sociala medier till dina vanligaste appar för att resa kollektivt, beställa mat eller hitta vägen till badstranden.

## Engagemang gör hela skillnaden

Ett vanligt misstag många gör är att man väntar med att publicera källkoden tills man är klar. Det brukar oftast inte bli så bra. Om någon annan ska ha nytta av projektet måste de hitta det, förstå vad det är bra för och hur man använder det, men kanske också känna sig delaktig, då behöver man publicera koden tidigt och innan den är klar.
För att det ska vara värt något att ha tillgång till källkoden behöver den gå att förstå, och då måste den kanske vara välskriven och ha dokumentation och tester.

Och för att någon ska uppleva att de kan delta i projektet på ett meningsfullt sätt behöver det kanske ta emot pull requests, issues och feature requests.
Alla dessa extra grejer strävar efter att förstärka fördelarna med open source, att göra det lätt att ta del av projektet och påverka det. Men vad som är bäst beror på projektet; Vilka är målgruppen är, hur de använder koden och hur de skulle vara intresserade av att påverka projektet.
Måste man publicera all källkod bara för att man använder öppen källkod?
Vissa licenser kräver att du också öppnar din kod för att använda deras öppna källkod, den vanligaste av dessa är GPL. Nu för tiden är däremot licenser som MIT, Apache 2.0 eller ISC vanligare och de kräver inte att du publicerar källkoden.
Vill du lära dig skillnaden mellan olika licenser är den här sajten en jättebra start: https://choosealicense.com/
Blir det inte enormt osäkert att ha all källkod öppet?
Det är faktiskt en myt att ett system skulle bli mer säkert om man håller all källkod gömd. Det finns nämligen alltid buggar i kod och om det är få personer som tittar på koden så är risken större att ingen hittar buggarna. Det finns självklart delar av ett system som man vill hålla stängd, t ex nycklar, lösenord och interna IP-adresser osv bör man aldrig publicera som del av källkoden utan hålla i separata stängda system.

## Är all öppen källkod gratis?

För att programvara ska vara “Open Source” måste användare av programvaran vara fria att dela med sig av den hur de vill utan extra kostnader. Det betyder inte att du inte kan ta betalt för att få tillgång till programvaran och källkoden, eller ta betalt för paketerade versioner på exempelvis App Store samtidigt som källkoden är fritt tillgänglig.
En relaterad modell som inte är öppen källkod är att göra källkoden tillgänglig under en licens som begränsar dess användning. Exempelvis är källkoden till Unreal Engine tillgänglig att användas av vem som helst men de måste betala royalties på de intäkter den genererar.

## Hur tar man betalt för öppen källkod?

Vanliga affärsmodeller är att sälja kompetens kring programvaran, utbildning och certifiering inom den eller hosting av den. Fråga dig om tillgång till mjukvaran verkligen är det mest värdefulla ni levererar, och hur värdet av det ni levererar hade påverkats om programvaran började användas av fler.
Här är anledningarna till att du ska börja med öppen källkod
Delad kostnad. Om någon annan hjälper dig att vidareutveckla din källkod delar ni på kostnaden för vidareutvecklingen.
Ökad innovation. När fler hjärnor hjälps åt blir den totala intelligensen större i att lösa problemen. Kanske sitter någon där ute på precis svaret på det problem du sitter med just nu.
Minskad inlåsning. Med öppen källkod är ni fria att göra ändringar och vidareutveckla för all framtid och är inte bundna till någon specifik leverantör eller licensavtal.

Ökad säkerhet. Finns det buggar i din kod är chansen större att ni upptäcker den om fler har möjlighet att se hur din produkt är uppbyggd.
Större delaktighet. En demokrati är beroende av transparens för att förstå hur världen är uppbyggd. I en digital demokrati med större och större del av verksamheten som sker med hjälp av mjukvara så blir också behovet av insyn i dessa programvaror större. Lägger man till AI till denna mix så är det ännu svårare att få insyn i den komplexa process som sker och kraven ökar mer på öppen källkod. Att ha varit med och skrivit en liten liten del av något som blir stort är en väldigt stor drivkraft för många som jobbar med utveckling. Det skapar en delaktighet och ambassadörer för ditt projekt.
Lättare onboarding. När ett projekt utvecklas med målet att källkoden ska vara öppen blir oftast kraven större på att det ska vara enkelt att kunna få igång koden på sin egen dator. Det gör faktiskt det lättare även för teamet självt när det kommer nya personer som ansluter till teamet. Det paketeras helt enkelt lite smidigare så att man inte behöver veta exakt allt om hur allt fungerar men ändå kan hjälpa till.
Påverkar arbetsprocessen. När ett projekt utvecklas i det öppna så kommer även fler personer engagera sig tidigt (om det är ett projekt som engagerar). Denna typ av kontinuerligt samarbete ökar intelligensen i den totala gruppen och möjliggör mer specialiserad kunskap att bidra. Det kan till exempel handla om översättningar, exempeltexter, illustrationer som kan läggas in direkt i koden utan att behöva hamna i backlogs eller annan projekthantering.
Kontakta gärna oss på Iteam om du är nyfiken på öppen källkod och digital innovation. Vi hjälper dig både med tekniken, skapa engagemang/community kring din tjänst och att hitta fram till en kultur av action, öppenhet och lärande i ditt team.

## Vill du lära dig mer om öppen källkod? 

<a href="/mvp">Boka ett MVP team</a> som hjälper dig att komma igång

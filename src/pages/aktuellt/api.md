---
title: "Vad är ett API?"
date: "2021-06-16"
image: "/images/api1.png"
intro: "De flesta vet vad BNP är men få vet vad ett API är. Båda är komplicerade frågor som hjälper att känna till om man ska förstå hur samhället utvecklas."
---

## Introduktion

Ett API är en strukturerad, dokumenterad och säker **anslutningspunkt till ett system som är avsett för andra system**. På samma sätt som en människa kommunicerar med ett system via ett grafiskt gränssnitt som har vyer, listor och, knappar så kommunicerar ett system med ett annat via ett API som har anrop och bestämda dataformat. Förkortningen API betyder Application Programming Interface, vilket också visar på släktskapet med UI - User Interface (d.v.s. det grafiska gränssnittet avsett för människor).

### Olika sorters API:er

Ordet API används för relativt många olika sorters gränssnitt mellan applikationer, system och plattformar. Bluetooth är en sorts API som beskriver hur mobila enheter ska kommunicera med varandra, ett annat API är det som en dator använder för att kommunicera med sitt grafikkort.

När man pratar om API I dagligt tal och i media menar man dock nästan alltid ett **API till en applikation eller ett system som nås via internet**. Det är också den sortens API som den här texten handlar om. Ett sådant API kan erbjuda funktioner för att hämta information, men också för att utföra aktiviteter - t.ex. beställa en tjänst eller vara, skicka in en anmälan, ändra uppgifter för en användare eller starta en process av något slag.

Ett API är en del av ett system. Även om det kan upplevas som att ett API är något som ligger mellan olika system så är det en del av något av de system som är ihopkopplade. Den som äger systemet som har API:et äger och kontrollerar alltså också API:et och hur det får användas. Ibland har består en hopkoppling av system av flera API:er där de olika systemen har varsitt API.

## Öppna och stängda API:er

Vissa API:er är stängda, vilket innebär att de bara är avsedda för användning av en organisations egna system. Exempel på det är när man har specialbyggt ett API för bara en webbtjänst. Ett sånt API har väldigt specialiserade funktioner som är helt anpassade för att leverera just den information och de anrop som webbtjänsten behöver.

Andra API:er är **generella och erbjuder åtkomst till tjänster och datamängder som kan användas av en mängd andra system**. Detta brukar kallas för ett **öppet API**. Att API:et är öppet betyder inte att alla har rätt att använda det eller komma åt all information i det, eller att det är gratis att använda. Ett öppet API kan t.ex. ha en licens där man behöver teckna ett avtal med den som äger API:et och få en nyckel för att kunna anropa det. Ett öppet API betyder inte heller att informationen i det är öppen - ett öppet API kan ha inloggning som gör att den som använder det bara kan hämta information och anropa funktioner som är knutna till en specifik användare.

Definitionen av öppna och stängda API:er är inte entydig, och vissa menar att ett öppet API innebär att det är öppet för alla att använda och enbart innehåller publik information. Det vi menar med öppet API i den här texten är dock ett **API som är generellt och som är möjligt att använda utanför API:ets egen organisation**, oavsett om det innehåller publik information, kostar pengar, kräver licensnycklar eller inloggning för åtkomst till användarinformation.

### Exempel på öppna API:er

API:er kan vara stora och små, sammanslagna eller uppdelade. Här är några exempel på öppna API:er från myndigheter och företag:

- [Skatteverket](https://www.skatteverket.se/apierochoppnadata) har en mängd API:er både för att hämta statistik och för att genomföra olika ärenden som att ändra folkbokföringsadress och lämna in skattedeklarationer.
- Flera kollektivtrafikbolag erbjuder tillsammans API:er via [Trafiklab](https://www.trafiklab.se/) för hållplatser, tidtabeller, realtidsinformation för alla och för att köpa biljetter.
- [Google](https://developers.google.com/apis-explorer) har mängder av API:er, t.ex. Maps som gör att man kan använda Google Maps i sin egen webbtjänst.
- [Facebook](https://developers.facebook.com/docs/apis-and-sdks/) har ett API som bland annat gör att man kan bygga in delning och skapande av inlägg från andra appar.
- [Bolagsverket](https://bolagsverket.se/om/oss/api-pa-bolagsverket/api-1.11642) har ett API för att registrera ändringar i bostadsrättsföreningars styrelser
- [Stripe](https://stripe.com/docs/api) har ett API för kortbetalningar som man kan använda när man bygger en webbshop.

## Vad kan man göra med ett API?

Med ett API kan man koppla ihop ett system med ett annat. Det kan låta som något tekniskt och inte särskilt relevant för en vanlig användare. Men API:er är grunden för automatisering. Ett sätt att tänka på kraften i API:er är genom tänka på mashups - kombinationer av tjänster som redan finns.

Om Försäkringskassan och din kommuns skolförvaltning hade öppna API:er skulle man kunna bygga en app som samtidigt sjukanmäler ditt barn i skolan och anmäler VAB till Försäkringskassan i ett och samma moment, kanske via telefonens röstassistent. Varken Försäkringskassan eller kommunen skulle behöva leda ett sånt projekt eller ens vara inblandade utöver att godkänna användning av API:erna.

Mindre spektakulära tillämpningar som skulle vara omöjliga utan API:er är t.ex. automatisk avprickning av fakturabetalningar i bokföringsprogram, ehandel med frakt och spårning av paketleveranser, Swish och bokning av resor online. När man skrapar lite på ytan blir det snabbt nästan omöjligt att hitta digitala lösningar som inte använder ett API någonstans.

## Varför är API:er viktiga?

API:er är en förutsättning för att bygga digitala plattformar. I moderna organisationer vill man att de olika system och applikationer som man använder ska kopplas samman, både så att informationen kan delas mellan dem och så att man kan skapa mer komplexa digitala processer som kräver att funktioner i olika system anropas i rätt ordning. Om de olika delsystemen inte har API:er blir en sån sammankoppling både svår och instabil. När systemen är sammankopplade på rätt sätt kan du bygga ett eget API till din plattform där dina kunder, leverantörer, användare eller medborgare kan använda dina tjänster via olika appar och webbtjänster.

Samhället kan spara enorma resurser genom att system kan kommunicera med varandra och automatiskt låta data flöda istället för att gå via människor. Med öppna API:er kan dessutom invånare och företag hjälpa till att driva utvecklingen genom att skapa nya tjänster och automatiseringar. Man kan enkelt koppla samman tjänster från det offentliga med tjänster från näringslivet på ett sätt som t.ex. en myndighet skulle ha svårt att göra.

Inom det offentliga har t.ex. Helsingborg kommun och Sundsvall kommun har valt att tillämpa öppna principer på sin utveckling. Deras öppna API:er möjliggör maximering av medborgarnytta till minimal peng. Tyvärr är detta undantag - Sverige ligger tyvärr sist i OECDs lista över digital mognad inom offentlig förvaltning. Om fler myndigheter och offentliga förvaltningar öppnade sina API:er skulle det snabbt kunna ändras.

Inom delar av näringslivet kan idén om ett API verka hotfullt. Vid första anblick verkar det lättare att behålla sina kunder om man kan se till att de måste använda ens tjänster via ens eget system och gränssnitt. I själva verket kan ett öppet API vara en automatisk säljkanal där andra aktörer kan hitta på nya applikationer som inkluderar dina tjänster utan att du behöver lyfta ett finger. Tack vare att Interflora hade ett API så kunde hitta.se skapa en knapp för att skicka blommor på födelsedagen till en person man sökt fram - Interflora fick nya beställningar, hitta.se en kickback på varje försäljning och användaren behövde inte fylla i adressen på beställningen.

I takt med kundernas digitaliseringsmognad så ökar också förväntningarna på att alla system ska kunna fungera som byggblock i en organisations digitala plattform. System utan ett API kan inte spela den rollen. Utan ett API kan plötsligt den som ville låsa in sina kunder istället själv bli utelåst, med ett API kan man bli en ovärderlig kugge i de större hjul som utgörs av kundernas digitala plattformar.

![](/images/apiplattform.png)

Licens: [CC-BY](https://creativecommons.org/licenses/by/4.0/)

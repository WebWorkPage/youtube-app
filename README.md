# Youtube Clone

Live chat >>>> InfiniteScroll >>>> Pagination
Challenges in Live Chat
- DL-> Get live Data
- UI -> Update UI efficiently without crashing the page/app - because every time a new chat is added by user, a new <div> gets added to the page, so
  the page size increases more nd more, - this will cause page get freezed or blank - SO GIVE BETTER UX FOR USERS

HOW TO GET DATA LIVE 
SYSTEM DESIGN INTERVIEW
 - Web Sockets connection - Bidirectional data (can pass data from UI to Server (or) pass data from server to UI) - no interval - once connection established ,immediately can send data from any direction(UI -> Server || Server -> UI) & can send data whenever u want to
   (Live chat app always need to have webSockets bcos order of chat changes btwm 2 ppl- whatsapp, Trading apps - stock market, cryptoCurrency) 
 - API Polling - Unidirectional data (UI <- Server) with intervals (ie polling data(api call) to UI from Server with intervals in btwn to give new data) -ie checking/making api call to see new data comes in after every 10s
   (Gmail, YT live chat, crickbuzz - In 25s there will be no update abt nxt ball, nothing will change in every 10s, so api polling need for cricket score app)
   less time interval btwn api call eg: 1.5s - for better UX
   API Polling - achieved by setInterval(()=>{},2000)

how app crash when many people join live stream - based on no of ppl watching -> if 10 million ppl watching live stream, for each every live chat, api call is made to get data of chat made by every ppl
EG: for 1 person - in their browser, 15,16 nd goes on api call made on anyone send msg live-> Then in 10 million ppl's browser also there will be 15,16 etc api call made, so its huge num of calls made to server which might cause app crash
In this case how backend eng handle this much api calls ? - DOUBT CHECK IN GOOGLE 

How UI/page is not freezed in YT live stream, when live chat is going on nd on?
if u keep on pushing data (<div>) inside DOM - u will explode DOM, so page size increases which will cause app freeze/page freeze - SO YT DELETES CERTAIN NUMBER OF LIVE CHATS FROM TOP AFTER IT REACHED THE CERTAIN LIMIT




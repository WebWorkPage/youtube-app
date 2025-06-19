# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



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




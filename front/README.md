## Start and build

npm start
"start": "set PORT=3001 && react-scripts start",

npm run build
"build": "react-scripts build && cp -r build/* ../back/client/",
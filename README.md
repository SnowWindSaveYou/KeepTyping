## KeepTyping

This application is a website for users to communicate with people who have similar interests.  
Try our demo [here](http://35.189.39.184) (previous version updated at 11/10/2018)

## Purpose of this Project

This project was inspired by reddit, we are trying to provide a space for users to discuss their interests and share their thoughts. We hope user can find new friends and get more interests from here.

## Instructions to start this application

Install required modules:

```bash
npm install
```

Start the database server:

```
mongod
```

Start the backend server:

```
node ./servers
```

Start the project:

```
npm start
```

## Instructions to use this website

1.Register a new account or Login if you already have one.
2.Search your desired topic in the search bar on home page  
3.If this topic does not exist currently, you could create a new topic  
4.After you have created the topic, you could create new post with in that topic  
5.When you get a 'Post Successful' prompt, you need to refresh the page to see your new post
6.If you want to reply to a particular post, you could click on the post name and enter a reply with at least 15 characters
7.Refresh the page again and you will see your reply  
8.The search bar on the top right corner supports search for Topic, Post and User

## Dependency

```json
"dependencies": {
    "autoprefixer": "7.1.6",
    "axios": "^0.18.0",
    "babel-core": "6.26.0",
    "babel-eslint": "7.2.3",
    "babel-jest": "20.0.3",
    "babel-loader": "7.1.2",
    "babel-preset-react-app": "^3.1.2",
    "babel-runtime": "6.26.0",
    "body-parser": "^1.18.3",
    "case-sensitive-paths-webpack-plugin": "2.1.1",
    "chalk": "1.1.3",
    "config": "^2.0.1",
    "css-loader": "0.28.7",
    "dotenv": "4.0.0",
    "dotenv-expand": "4.2.0",
    "eslint": "4.10.0",
    "eslint-config-react-app": "^2.1.0",
    "eslint-loader": "1.9.0",
    "eslint-plugin-flowtype": "2.39.1",
    "eslint-plugin-import": "2.8.0",
    "eslint-plugin-jsx-a11y": "5.1.1",
    "eslint-plugin-react": "7.4.0",
    "express": "~4.16.3",
    "express-session": "^1.15.6",
    "extract-text-webpack-plugin": "3.0.2",
    "file-loader": "1.1.5",
    "fs-extra": "3.0.1",
    "html-webpack-plugin": "2.29.0",
    "jest": "20.0.4",
    "mongodb": "^3.1.4",
    "mongoose": "^5.2.13",
    "object-assign": "4.1.1",
    "postcss-flexbugs-fixes": "3.2.0",
    "postcss-loader": "2.0.8",
    "promise": "8.0.1",
    "raf": "3.4.0",
    "react": "^16.4.2",
    "react-cookie": "^3.0.4",
    "react-dev-utils": "^5.0.2",
    "react-dom": "^16.4.2",
    "react-router": "^4.3.1",
    "react-router-dom": "^4.3.1",
    "react-svg": "^6.0.15",
    "resolve": "1.6.0",
    "style-loader": "0.19.0",
    "sw-precache-webpack-plugin": "0.11.4",
    "url-loader": "0.6.2",
    "webpack": "3.8.1",
    "webpack-dev-server": "2.11.3",
    "webpack-manifest-plugin": "1.3.2",
    "whatwg-fetch": "2.0.3"
  }
```

For more details please check `package.json` file.s

## Resource File Structure

### Front End:

```
|- asset [image resource folder]
|- components
    |-- layout_components [the components only for UI structure]
    |-- container_components [for obtaining & processing data & business logic, return display components]
    |-- display_components [interface UI of app]
    |-- dialog_components [interface for dialogs]
    |-- ui_components [reusable UI components, stateless components]
|- configs [global config data]
|- scripts
    |-- controllers [handle request and control page state]
    |-- utils [utilities to support functions]
    ]
|- page_templates [templates for each page]
```

### Back End:

```
|- models [database model]
|- routers [receive and redirect requests]
|- schemas [database object document mapping]
|- scripts
    |-- controllers [handle request]
    |-- utils [support functions]
```

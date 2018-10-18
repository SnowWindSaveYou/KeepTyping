## KeepTyping 
This appliction is a website for user communicate with the prople who have samilar interast.

## To Start Web App
`npm install` to update dependency first
Looking `package.json` file for more detail 
* To start MongoDB: `mongod --dbpath ./data/db`
* To start Server: `node ./servers`
* To start Web: `npm start`


## Structure of App Resouse File
```
|- components
    |-- layout_components [the components only for UI structure] 
    |-- container_components [for obtaining & processing data & business logic, return display components]   
    |-- display_components [interface UI of app]
    |-- ui_components [reusable UI components, stateless components]
|- config [global config data]
|- constants [global constants]
|- helper [tool / help functions]
|- img
|- page_templates
|- styles 
```


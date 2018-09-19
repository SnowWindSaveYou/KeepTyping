## KeepTyping 
This appliction is a website for user communicate with the prople who have samilar interast.
* To be start: `npm start`

## Dependency
``` json
"dependencies": {
  "react": "^16.4.2",
  "react-dom": "^16.4.2",
  "react-router": "^4.3.1",
  "react-router-dom": "^4.3.1",
  "react-scripts": "1.1.4"
}
```
Looking `package.json` file for more detail`npm install -d`
Looking `http://localhost:3000/#/test` for overview of all components

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


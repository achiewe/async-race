# Async Race

![183302986-cd82d7cb-3f7a-4f93-8cc3-557d3719ec9f](https://user-images.githubusercontent.com/39487464/209480592-ae3179fc-377a-4954-852c-b783160de4c5.jpg)

### Description
The task is to create SPA to manage the collection of the cars, operate its engines, and show races statistics. Task link [here](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/async-race.md). 

### Backend
Use custom API from [this repo](https://github.com/PesukarhuTG/async-race-api). **So, before watching the project you need to setup and running Backend**:
- Use node 14.x or higher
- Clone this repo: `$ git clone https://github.com/PesukarhuTG/async-race-api`
- Go to downloaded folder: `$ cd async-race-api`
- Install dependencies: `$ npm install`
- Start server: `$ npm start`
- Now you can send requests to the address: `http://127.0.0.1:3000`

### Frontend
<h2 align="center"><a href="https://pesukarhutg-async-race.netlify.app/" target="_blank">Deploy link</a></h2>

**Basic structure:**
- There are two views on the site: "Garage" and "Winners".
- "Garage" view contains its name, page number, and the full amount of items in the database (how many car user has in his garage).
- "Winners" view contains its name, page number, and the full amount of items in the database (how many records the winners table contains).
- View state is saved when user switches from one view to another. For example, page number shouldn't be reset, input controls should contain that they contained before switching, etc.

**"Garage" view:**
- User can create, update, delete a car, and see the list of the cars. Car has only two attributes: "name" and "color".
- User can select any color from an RGB-Palete like here and see the picture of the car colored with the color selected and car's name.
- Near the car's picture there are buttons to update its attributes or delete it.
- There is a pagination on the "Garage" view (7 cars per one page).
- There is a button to create random cars (100 cars per click).
- Near the car's picture there are buttons for starting / stoping the car engine.
- User clicks to the engine **start button** -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.
- User clicks to the engine **stop button** -> UI is waiting for answer for stopping engine -> car returned to it's initial place.
- Start engine button is disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it's initial place.

**Race animation:**
- There is a button to start race. After user clicks this button all the cars on the current page start driving.
- There is a button to reset race. After user clicks this button all the cars return to it's initial places.
- After some car finishes first user will see the message contains car's name that shows which one has won.

**"Winners" view:**
- After some car wins its data is displayed at the "Winners view" table.
- There is a pagination (10 winners per one page).
- User can sort cars by wins number and by best time (ASC, DESC).

### Key skills
- Сommunication with a server (fetch, REST API)
- Async coding / Promises
- JS Animations
- DOM Api


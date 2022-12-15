import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           React Learning React
        </a>
      </header>
    </div>
  );
}

export default App;

//COPY package.json .- docker will watch package.json and install node modules only when package.json changes

//not using volumes

//docker build -f Dockerfile.dev .
// docker run -p 3000:3000 <imagename>
//if we use node_modules inside our pwd then image building will take lot of time

//docker volumes- mapping of folders inside a container to folder outside(local)
//docker  run -p 3000:3000 -v $(pwd):/app 72b055c15322ae030 ---- maps all the contents inside pwd to app folder inside container -- get al changes in our local to reflect on react server

//docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app cb4e4f90ed6e --- will not map nodemodules folder in container
//docker run -it <id from docker build -f Dockerfile.dev . command> npm run test  --- run tests inside container, overrides the command

//to get live updates for tests-- this is not the best solution
//first run (docker compose --build) up to build image, because yml has volumes setup so we use that to watch changes
//docker exec -it <container id from docker compose> npm run test -- run tests inside existing containers with volumes setup to get live updates

//better solution -- run tests services seperately in yml file-- will make a test container -- specify command: ["npm","run","test"]
//downside - cannot get stdin o/p
//docker attach <container id> - get handle on primary process not secondary one i.e npm not start.js

//multi step process- when working with two base images
//Dockerfile
// FROM node:16-alpine as builder

// WORKDIR  "/app"
// COPY package.json .
// RUN npm install

// COPY . .

// RUN npm run build

// FROM nginx
// COPY --from=builder /app/build /usr/share/nginx/html




// /app/build will have all file and folders
# Dockerized React Hooks Application Boilerplate in Typescript

A **React Boilerplate** that implements **hooks** and is written in **Typescript**.
Application is configured with **docker** and is setup ready for production use.

### Setup includes:

- React Router
- Webpack
- Typescript
- Eslint
- Prettier
- Docker

### Required Setup

Create file `.env` file then add variable:

```
# Use ENV=prod for production
ENV=dev
PORT=3000
```

### Running docker in daemon

Note: `docker` && `docker-compose` should be installed on your machine.
Also, set `ENV=prod` from `.env` file.

```
docker-compose up --build -d
```

### Build nginx dockerfile manually

```
docker build -t client-nginx . --file config/nginx/Dockerfile
```

### Running application in development

```
npm run dev
```

### Running application for production using npm

```
npm run build && npm run start
```

### Example command for creating a docker image and pushing it to your AWS ECS (Amazon Container Service) Repository

```
docker login -u AWS -p $(aws ecr get-login-password --region ap-southeast-1) 873301793325.dkr.ecr.ap-southeast-1.amazonaws.com/deejaygeroso
docker build --no-cache -t deejaygeroso . --file ./config/docker/Dockerfile.prod
docker tag deejaygeroso:latest 873301793325.dkr.ecr.ap-southeast-1.amazonaws.com/deejaygeroso:latest
docker push 873301793325.dkr.ecr.ap-southeast-1.amazonaws.com/deejaygeroso:latest

# updating cluster and service
aws ecs update-service --region ap-southeast-1 --cluster deejaygeroso-cluster --service deejaygeroso-service --force-new-deployment
```

### Running linting and tests
```
npm run test
```

## Project Files and Directory structure
```
adally-server
    - config
        - bash
        - docker
        - eslint
        - html
        - k8s
        - prettier
        - webpack
    - dist
    - node_modules
    - public
    - src
        - apollo
            - local
            - mutations
            - queries
        - common
            - components
            - images
            - interfaces
            - styles
        - modules
            ...
            - Home
                - Home.tsx
                - index.ts
                - styles.css
            ...
        - App.tsx
        - declaration.d.ts
        - index.tsx
    - .dockerignore
    - .env
    - .gitignore
    - .prettierignore
    - .prettierrc.js
    - .travis.yml
    - docker-compose.yml
    - INFO.md
    - package.json
    - package-lock.json
    - README.md
    - service-account.json.enc
    - tsconfig.json
```

##### Directory Structure Definition
  
| Core Directories | Definition  |
| :--------------- | :---------- |
| /config          | project configuration directory |
| /dist            | Contains the build directory of the project |
| /node_modules    | Contains the libraries used by the project |
| /public          | Contains the public html file (react lib included) and assets that will be rendered to the browse |
| /src             | Contains the project source code |
| .dockerignore    | Files that docker will ignore |
| .env             | Environment variables needed to run the application |
| .gitignore       | Files that git will ignore |
| .prettierignore  | Files that prettier will ignore |
| .prettierrc      | Prettier configuration. It was intentinally placed here instead under config directory since VSCode is configured to find prettier configuration on the project root directory | 
| .travis.yml      | travis config |
| INFO.md          | Contains more information about the project |
| RELEASE.md       | Release Notes |
| docker-compose.yml | Docker configuratoin to run application. Used in production application |
| package.json     | Holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project’s dependencies |
| README.md        | Welcome note for github profile. Moved the README information to INFO.md instead  |
| service-account.json.enc | Allows the project to be authenticated for GCP deployment  |
| tsconfig.json    | Typescript configuration. It's currently located in the root and not on config directory since it allows typescript mode for cypress to work |

##### Config Directory
| Config Directory | Definition   |
| :--------------- | :----------  |
| /bash            | Script that allows docker to have access to environment variables in gitlab |
| /docker          | Docker configuration for stage and prod |
| /eslint          | Linting rules and configuration |
| /htlm            | React's HTML entry point used and configured for production only |
| /k8s             | Kubernetes configuration |
| /prettier        | Prettier configuration |
| /webpack         | Webpack configuration |

##### Source (src) Directory

| Source Directory | Definition  |
| :--------------- | :---------- |
| /common          | Contains global variables, methods, interfaces, styles and custom libraries and components used by the project. |
| /modules         | react components |
| App.tsx          | Main parent component |
| declaration.d.ts | Currently used to allow images to be imported without warnings and errors on VSCODE |
| index.ts         | Application entry point |


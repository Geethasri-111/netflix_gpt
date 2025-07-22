#Netflix clone

- npm init react-app netflix

- tailwind install 
    - npm install -D tailwindcss@3
    - npx tailwindcss init

- add in tailwind.config
    - content: ["./src/**/*.{js,jsx,ts,tsx}",],

- in index.css add
    - @tailwind base;
    - @tailwind components;
    - @tailwind utilities;

- npm start

#project
- react-app
-   tailwind
-   header
-   Login
-   SignupForm
-   Routing
-   Formvalidation
-   useRef
-   firebase setup
-   deploy appto production
-   create signup user account
-   implement signin userapi
-   created redux store with userSlice
-   signou impl
-   update profile
-   Bugfix:Signupuser name display & if user not logged in redirect toLogin/Browse & viceversa
- unsubscribed to onauthstatechange callback
-   TMDB create an account subscribe and get accesstoekn
-   get data from TMDB nowplaying aPI for movies list 
- created custom hooks for nowplayingmoviesList & trailervideo
-   craete movieSlice and updated the storewith the data
-   created trailer and titleofvideo components
    - fetch data title & trailer,updated store with data acquired
    - embedded youtube autoplay video for trailer with tailwind
-   secondary components -contains collection of movies set
-   created a movieList and mpviecard components for sections of movies
-   create popular movies customHook  and display on the page
-   building GPtsearch feature
-   multi language page for search
-   gpt APIsintegration



#Tasks for Netflix
- without auth
    - Login/Signup page (signin/signup form after login reirect to browse)

- Browse after auth
    - Header
    - Main movie
        - Trailer in bg
        - description on top
        - Suggestions
            - Title with img
- NetflixGPT
    - SearchBar
    - Suggestions
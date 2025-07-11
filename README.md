#Netflix clone

- npm init react-app netflix

-tailwind install 
    npm install -D tailwindcss@3
    npx tailwindcss init

-add in tailwind.config
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],

- in index.css add
     @tailwind base;
    @tailwind components;
    @tailwind utilities;

- npm start



#tasks for Netflix
-without auth
    - Login/Signup page (signin/signup form after login reirect to browse)

-Browse after auth
    -Header
    -Main movie
        -Trailer in bg
        -description on top
        -Suggestions
            -Title with img
-NetflixGPT
    -SearchBar
    -Suggestions
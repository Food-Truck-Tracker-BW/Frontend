This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


http://food-truck-tracker-be.herokuapp.com/

Endpoints:

API main: http://food-truck-tracker-be.herokuapp.com

AUTH(POSTS): /api/register

{ "username": “testUser”, "email": “user@gmail.com", "password": "password123", "is_operator": true }

OR

{ "username": “testUser”, "email": “user@gmail.com", "password": "password123", "is_operator": false }

/api/login

{ "username": “testUser”, "password": "password123" }


(POST):

ADD TRUCK:

/api/user/:id/trucks

{ "name": string, "image": string", "cuisine_type": string, "location": {"long": string (EXAMPLE: "27.255710"), "lat": string (EXAMPLE: "-80.200195")}, "departure": "HH:MM:SS" }

(DELETE):

DELETE USER:

/api/user/:id

TRUCKS(GET):

GET ALL TRUCKS: /api/truck/

GET ALL TRUCK BY ID: /api/truck/:id

GET MENUS: /api/truck/:id/menus

GET LOCATION: /api/truck/:id/location

GET RATING: /api/truck/:id/avgRating

GET MENU ITEM: /api/truck/menu/:itemId

GET MENU ITEM RATING: /api/truck/menu/:itemId/itemAvgRatings

(POST):

POST MENU ITEM(S): /api/truck/:id

[ { item_name: string, item_description: string, item_image: string(link), item_price: string, truck_id: integer }, { item_name: string, item_description: string, item_image: string(link), item_price: string, truck_id: integer } ]

(PUT):

UPDATE TRUCK:

/api/truck/:id

{ "name": string, "image": string", "cuisine_type": string, "location": {"long": string (EXAMPLE: "27.255710"), "lat": string (EXAMPLE: "-80.200195")}, "departure": "HH:MM:SS" }

(DELETE):

/api/truck/:id
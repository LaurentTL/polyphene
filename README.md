> ⚠️ Make sure to properly read this README before starting your work for the test!

# Croco: Front-end test project

👋 Welcome to the Croco front-end test project. This repository contains the source files to assess
your skills for a front-end developer position 🐊

## Run the base project

The project is composed as so:
- `src`: contains all the front-end materials like styling sheets, React components, etc.
  - `components`: contains the React components.
- `server`: contains our mock server built with GraphQL Yoga. **During the test you are not expected
to edit the code of the GraphQL server**.
  - `prisma`: contains database schemas and assets.
- `public`: contains static assets for our front-end.
  - `images`: contains images used to show examples in our tests.

First, install the dependencies.

```bash
npm install
```

Then, the development environment can be launched by running:
```bash
npm run dev
```

With this command, the backend server and the react front-end will both be served. The backend server#
runs on `http://localhost:4000` while the React app runs on `http://localhost:3000`.

> Note: You can access the GraphQL playground on `http://localhost:4000/graphql`

## Test process

The process to conduct the test is the following:
1. Once a proper date and time have been found, you will receive the source files composing
this project.
2. You will then have **one hour** to try and achieve as much of the tests as you can. The tests
   descriptions can be found on the main page of the React app and in this README.
3. We expect to receive an email answering to the one received for step 1, containing the entirety of the project 
files in a zip format, from you once the hour is passed.

> **⚠️ Any delay in the delivery of the work will be taken into account in the evaluation.**

## Exercises

### 1. Styling

The first test is designed to show your skills in using React and styling components.

The goal is to reproduce the checkboard presented in the picture below with HTML elements, and
SCSS or Tailwind styling.

The checkboard layout can be found in `./public/images/styling-test` or on the main page of the React
app. The shape to reproduce is the one below:

![styling-test](public/images/styling-test.png?raw=true "Title")


Here are a few directions to consider when implementing this test:
1. Respect the proportions of the drawing. The cells of the checkerboard have different widths and 
heights on purpose, their differences should appear in the deliverable. Nonetheless, the widths 
and heights values in pixels can differ from the picture.
2. Respect the color that are given on the picture.
3. **A specific styling rule should be added**: on `hover`, a cell styling should change. The colors
used for the cell and the alignment of the text should change to the styling of the other cell 
(e.g.: Bottom-right text should be found in the center of the cell).

### 2. GraphQL API calls and JS scripting

The second test is dedicated to show your skills in using GraphQL API calls and JS scripting.

We have a list of cakes in our backend that we wish to show-off in a table. We want our users to be able
to filter the displayed cakes in the table based on their names thanks to a text input.

Your goal is to:
1. Use the [Apollo Client library](https://www.apollographql.com/docs/) to fetch the cake list in the front-end. The cakes list
can be fetched through the `cakes` query:
```gql
query GetCakes {
  cakes {
    description
    id
    image
    title
  }
}
```

The structure for the cake list looks like this:
```js
[
  {
    "id": 1,
    "title":"Lemon cheesecake",
    "description":"A cheesecake made of lemon",
    "image":"https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg"
  },
  /* .... */ 
  {
    "id": 16,
    "title":"Strawberry cake",
    "description":"Strawberry cake is a crumbly bread made by strawberry.",
    "image":"https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/strawberry_cake.jpg"
  }
]
```
2. Show the received data in the dedicated table in the `GraphQLAssessmentTable` component.
3. Add a text input in the component to filter the table entries based on the name of the cakes and the user input.

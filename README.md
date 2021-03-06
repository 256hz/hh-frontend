[![Netlify Status](https://api.netlify.com/api/v1/badges/8663d87b-0587-427c-90f9-6213a6d78f70/deploy-status)](https://app.netlify.com/sites/abes-helpful-demo/deploys)

### [Live link](http://abes-helpful-demo.netlify.com)

This was written with React 16.9 in ES6 JS.  CSS was styled by hand using flexbox.

### INSTALLATION

```yarn #``` or ```npm i```

In src/App.js, the state 'apiUrl' points to the [rails API](https://abes-helpful-demo.herokuapp.com) from [this repo](https://github.com/256hz/hh-backend).  App fetches from the API on the initial page load.

### FUNCTIONS
- Click on a swatch to see an enlarged (hero) view.
- Click on a hero swatch to go back to the page you were on.
- Navigate pages below using numbers or arrows.
- Click on the Random button to get a hero view of a random color.
- Filter colors using sidebar menu.  Deactivate filter by clicking on the same filter again, or on the logo in the top left.  See the [backend repo's readme](https://github.com/256hz/hh-backend/blob/master/README.md) for more on color filtering.
- Site is minimally responsive, although the hero color looks pretty silly on mobile.  If I was to make a really responsive design, the Sidebar would take up the full screen width, and the page of colors would stack underneath it.
- You can type in the search bar, but it won't do anything.

### STRUCTURE
- App (colors and filtering live here)
  - Header
  - Content (most state and methods live here)
    - Sidebar
      - RandomButton
      - ColorFilters
    - Viewport
      - HeroColor
        - Swatch
      - ColorPage
        - Swatch
        - Pagination

### TESTING
Some preliminary unit and integration tests have been added with Jest and Puppeteer.  These can be run with ```yarn test``` or ```npm run test```.  Tests are run on the remote servers.  To test the local servers, host the Rails server on port 3000 and the npm server on 3001, and change `apiUrl` and `siteUrl` in the test.js files to `apiTestUrl` and `siteTestUrl`, respectively.

Tests are:
- App.test.js
  - Does the API return something not falsy?
  - Does the first record the API returns have all the proper keys?
  - Navigate to the page and click Random.  Does a hero swatch show?
  - Click the Red filter.  Are all the swatches in the red family?
  - Click the Red filter again to disable.  Is each swatch red?  (Hopefully not.)
- constants.test.js
  - Is the filter list an object?
  - Is the filter list not a string?
  - Is the filter list correct?
  
### TO DO
To make this really production ready, I'd create react-router routes for at least the filters, and maybe for each color.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8663d87b-0587-427c-90f9-6213a6d78f70/deploy-status)](https://app.netlify.com/sites/abes-helpful-demo/deploys)

### [Live link](http://abes-helpful-demo.netlify.com)

Code challenge accepted.

### INSTALLATION

```yarn #``` or ```npm i```

In src/App.js, the state 'apiUrl' points to the [rails API](https://abes-helpful-demo.herokuapp.com) from [this repo](https://github.com/256hz/hh-backend).  App fetches from the API on the initial page load.

### FUNCTIONS
- Click on a swatch to see an enlarged (hero) view.
- Click on a hero swatch to go back to the page you were on.
- Navigate pages below using numbers or arrows.
- Click on the Random button to get a hero view of a random color.
- Filter colors using sidebar menu.  Deactivate filter by clicking on the same filter again, or on the logo in the top left.
- Site is minimally responsive, although the hero color looks pretty silly on mobile.  If I was to make a really responsive design, the Sidebar would take up the full screen width, and the page of colors would stack underneath it.

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
Some preliminary unit and integration tests have been added.  These can be run with ```yarn test``` or ```npm run test```.  Tests are run on the local servers, so host the Rails server on port 3000 and the npm server on 3001.  

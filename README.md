## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

## Project challenges

- [React-Media Component](###-react-media-component)
- [Animated Hamburger Menu](###-animated-hamburger-menu)
- [DATA - Display local images from a JSON array of objects](###-data---display-local-images-from-a-json-array-of-objects)
- [Slider](###-slider)
- [FORM - Reset the automatic background color in inputs when using autofill text](###-form---reset-the-automatic-background-color-in-inputs-when-using-autofill-text)
- [STICKERS PARALLAX EFFECT](###-stickers-parallax-effect)

### REACT-MEDIA COMPONENT

`react-media` is a CSS media query component for React.
The `<Media>` has a `query` prop that will determine which component should be redeemed, based on whether the query matches or not (using a ternary).
On this project, this made it possible having a menu with the options displayed at the upper right corner of the page if the page was checked from a tablet or desktop, but just displaying a hamburger icon in case it was checked from a smaller device.

Installation and usage:

1. Install `$ npm install --save react-media`
2. Import and implement in component
   `import Media from 'react-media';`

```<Media query="(max-width: 768px)">
   {(matches) => {
      return matches ?
      (option A)
      :
      (option B)
   }}
</Media>
```

Full documentation: https://www.npmjs.com/package/react-media

### ANIMATED HAMBURGER MENU

Hamburger menu icon for React with CSS-driven transitions.

Installation and usage:

1. Install `npm install hamburger-react`
2. Import and implement in component
   `import Hamburger from 'hamburger-react';`
   `<Hamburger size={20} color="#23a79f" />`

Full documentation: https://hamburger-react.netlify.app/

### DATA - Display local images from a JSON array of objects

1. Change the .JSON file into a .js file.
2. Store the array of objects in a variable:
   `export const myVariable`.
3. Use `require`function on the path of the image:
   `require('../images/logo.png')`
4. Import the variable in the Component the image will be used:
   `import {myVariable} from './folder/file.js'`

### SLIDER

1. Define a container (slider). This Component will hold:
   - the slides
   - the going-left/going-right buttons

### SLIDER 2

When the page loads, the slider has the same margin at the left as the rest of the sections have.However, when we click on the right arrow to check more projects (which are hidden on the right side of the screen), the whole slider is moved to the left, leaving no margin at all.

### FORM - Reset the automatic background color in inputs when using autofill text

When selecting any of the suggestions shown from the autofill option list, the text selected is automatically entered in the input area, however the background color is also automatically set to white. This might be inconvenient if we are building a dark theme design website.
To solve this, the `-webkit-autofill` pseudo class will come in handy! In this project, the solution is not as straightforward as changing the background color to transparent, but the following alternative can be used instead:
`input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active { transition: all 10000s ease-in-out; }`
A transition with a long duration can be set so that the changes are not visible immediately. The duration has been set to 10000 seconds, which should be long enough so that the user can send the form before the color change can even be perceived.

###### Alternatives
There is a different solution so that the color of the area inside the input can actually be changed. It could be solved by setting an inset box-shadow property of the preferred color:
`input:-webkit-autofill { -webkit-box-shadow:0 0 0 50px black inset; -webkit-text-fill-color: white; }`
If the color of the input was the same as the background color (i.e. transparent), we could set the color in the background of the input to transparent as well by setting the property `-webkit-background-clip: text` to the input on the CSS file.
`input { -webkit-background-clip: text; }`

### STICKERS PARALLAX EFFECT

In this project, there is a layer with stickers that slightly change their position when the cursor is moved. To create this effect:

1. All the stickers must have a `data-speed` attribute, which will contain different numbers.
2. Select all the stickers and apply a translation in the main and cross axis that is calculated from

- the current position of the cursor (`e.pageX` and `e.pageY`)
- and the `data-speed` of each of the stickers.

```

```

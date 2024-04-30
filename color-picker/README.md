## Color Picker React Component

This is a simple React color picker component that allows users to select two colors and set the gradient degree to create a linear gradient background. The gradient updates dynamically as the user changes the color values or degree input.

### Usage

#### Installation

Clone the repository:

```
git clone https://github.com/your-username/color-picker.git
```

Install dependencies:

```
cd color-picker
npm install
```
#### Running the App

Run the development server:

```
npm start
```


#### Using the ColorPicker Component

The `ColorPicker` component is located in `src/components/ColorPicker.jsx`. You can use this component in your own React projects as follows:

```jsx
import React from 'react';
import ColorPicker from './components/ColorPicker';

const App = () => {
  return (
    <div>
      <h1>Color Picker App</h1>
      <ColorPicker />
    </div>
  );
};

export default App;
```

### Features
- Select two colors using color input fields.
- Adjust the degree (angle) of the gradient using a number input field.
- The gradient background updates dynamically as the user changes color values or the degree input.
- Supports a custom font for the heading.

### Notes
- Ensure that the degree input field is not empty to update the gradient background.
- The updateBackgroundGradient function handles background updates based on user input.
- CSS styles are managed using CSS modules (ColorPicker.module.css).

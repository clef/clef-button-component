# clef-button-component

![Build Status](https://img.shields.io/travis/clef/clef-button-component.svg)
![Downloads](https://img.shields.io/npm/dm/.svg)
![Downloads](https://img.shields.io/npm/dt/.svg)
![npm version](https://img.shields.io/npm/v/.svg)
![dependencies](https://img.shields.io/david/clef/clef-button-component.svg)
![dev dependencies](https://img.shields.io/david/dev/clef/clef-button-component.svg)
![License](https://img.shields.io/github/license/clef/clef-button-component.svg)

A React components to use the Clef button

## Installation

Install it via npm:

```shell
npm install clef-button-component
```

## Usage

```javascript
import ClefButton from 'clef-button-component';

<ClefButton
  appID={React.PropTypes.string.isRequired},
  redirectURL={React.PropTypes.string.isRequired},
  state={React.PropTypes.string.isRequired},
  color={React.PropTypes.string},
  type={React.PropTypes.string},
  custom={React.PropTypes.bool},
  embed={React.PropTypes.bool},
  onError={React.PropTypes.func.isRequired}
/>
```

For more information on the different properties, check out [the documentation](https://docs.getclef.com/docs/adding-the-clef-button).

## Development

To start development, run:

```shell
git clone git@github.com:clef/clef-button-component.git clef-button-component
cd clef-button-component
npm install
npm run test
```


## License

MIT

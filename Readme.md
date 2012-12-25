
# dep-graph

  Dependency graphs with graphviz dot(1) (must be installed first).

  ![](http://f.cl.ly/items/2H0K2h0I0B460V0A2G3n/dot.png)

## Installation

    $ npm install visionmedia/node-dep-graph

## API

```js
var graph = require('dep-graph');

graph({
  name: 'foo',
  deps: [
    {
      name: 'bar',
      deps: []
    }
  ]
}, '/path/to/my.png');
```

## License

  MIT

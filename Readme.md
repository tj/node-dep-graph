
# dep-graph

  Dependency graphs with graphviz dot(1) (must be installed first).

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

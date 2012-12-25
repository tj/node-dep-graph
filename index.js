
/**
 * Module dependencies.
 */

var spawn = require('child_process').spawn;

/**
 * Generate a graph for `node` and output png to `path`.
 *
 * @param {Object} node
 * @param {String} path
 * @api public
 */

module.exports = function(node, path){
  var proc = spawn('dot', ['-Tpng', '-o', path]);
  var stream = proc.stdin;
  stream.write('digraph {\n');
  stream.write('  node [style=filled, fillcolor=white, nodesep=2.0];\n');
  stream.write('  graph [overlap=false];\n');
  stream.write('\n');
  visit(node, stream);
  stream.write('}\n');
  stream.end();
};

/**
 * Visit `node`.
 */

function visit(node, stream) {
  if (!node.deps) return;
  node.deps.forEach(function(dep){
    stream.write('  "' + node.name + '" -> "' + dep.name + '" [style=dotted];\n');
    visit(dep, stream);
  });
}

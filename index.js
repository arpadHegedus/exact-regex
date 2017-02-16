var postcss         =   require('postcss'),
    overwrite       =   require('overwrite-object'),
    parser          =   require('postcss-value-parser');

module.exports = postcss.plugin('postcss-grid', function(opt) {
    return function(css) {
        var defaultOpt = {
            wrap: {
                normal: {
                    width: '1200px',
                    padding: {
                        horizontal: '1rem'
                    }
                }
            },
        };
        function loop(rule) {
            // clear: fix
            rule.walkDecls('clear', function(decl) {
                if(decl.value == 'fix') {
                    css.insertBefore(rule, `
                        ${rule.selector}:after {
                            content: ' ';
                            display: table;
                            clear: both;
                        }
                    `);
                    decl.remove(); if(rule.nodes.length == 0) { rule.remove(); }
                }                
            });
            // wrap
            rule.walkDecls('wrap', function(decl) {
                console.log(parser(decl.value));
                decl.remove();
            });
        }
        css.walkRules(function(rule) {
            loop(rule);
        });
    }
});
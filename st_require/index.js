
const Path = require ( 'path' );

const root_dir = __dirname.split ( Path.sep );
root_dir.splice ( root_dir.length - 1 );
const node_dir = root_dir.join ( Path.sep );

const _require =  path  => {
    const this_path = Path.join ( node_dir + '_', path, 'index.js' );
    const R = require ( this_path );
    return R;
};

exports._require = _require;

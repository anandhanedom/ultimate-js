let view;

function initialize() {
  let i = 0;
  return () => {
    if (i > 0) {
      return;
    } else {
      view = 'Hills';
      i++;
      console.log('view has been set!');
    }
  };
}

const callit = initialize();
callit();

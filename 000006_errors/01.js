//Throw error to stop execution
// throw new Error

//Properties:name,message,stack

function hi() {
  try {
    hello();
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  } finally {
    return 'Finally ran';
  }
}

// console.log(hi());

try {
  try {
    something();
  } catch (e) {
    throw new Error(e);
  }
} catch (e) {
  console.log('Got it!', e);
}

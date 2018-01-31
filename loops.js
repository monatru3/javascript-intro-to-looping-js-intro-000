function forLoop(array) {

  for (var i=0; i<25; i++) {
    if (i===1) {
      array.push (`"I am ${i} strange loop."`)
    } else {
      array.push (`"I am ${i} strange loops."`)
    }
  }
  return array
};

function whileLoop(n) {
  while (n>0) {
  console.log(n--)
  }
  return "done"
};



function doWhileLoop(array) {

do {
  function maybeTrue() {
    array.pop()
    return Math.random() >= 0.5
  }
    
  } while(maybeTrue()||array.length===0);

};

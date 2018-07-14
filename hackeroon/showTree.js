const showTree = size => {
    let tree = [];
 
   for(let i = 0; i < size; i++) {
          tree.push("#");
           const getTree = "".concat(tree.join(""));
   
           console.log(getTree)
     }
};

showTree(6)

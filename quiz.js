var submitBtn = document.getElementById("submit")

function validate(anything) {
  var num = parseInt(anything.userHeight);
  if (anything.userHeight === null || anything.userHeight === "") {
    return alert("Please enter a number.");
  } else if (isNaN(num)) {
    return alert("Please enter a number.")
  } else if (anything.userLeaf === null || anything.userLeaf === "") {
    return alert("Please type a symbol or character.");
  } else {
    grow(anything);
  }
}


document.getElementById("height").addEventListener("keydown", (event)=> {
  if (event.key === "Enter") {
    submitBtn.click();
  }
})

document.getElementById("leaf").addEventListener("keydown", (event)=> {
  if (event.key === "Enter") {
    submitBtn.click();
  }
})


submitBtn.addEventListener("click", ()=> {
  var tree = {
    userHeight: document.getElementById("height").value,
    userLeaf: document.getElementById("leaf").value
  };

  validate(tree)
})



// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console. It accepts a single object as an argument. 
function grow(treeArgumentInFunction) {
  var spaces = treeArgumentInFunction.userHeight - 1;

  for (var i=0; i<treeArgumentInFunction.userHeight; i++) {
    console.log(" ".repeat(spaces) +  treeArgumentInFunction.userLeaf.repeat(1+(i*2)))
    spaces = spaces - 1;

  }
}










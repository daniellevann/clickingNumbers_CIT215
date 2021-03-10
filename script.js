var boxes = [
  {
    color: "red",
  },
  {
    color: "green",
  },
  {
    color: "blue",
  }
];
var elements = [];

function createBox(box) {
  var that = this;
  this.color = box.color;
  this.border = box.border;
  this.ele = document.createElement("div");
  this.num = 0;
  this.numEle = document.createElement("div");
  this.numEle.innerHTML = this.num;
  this.numEle.addEventListener("click",function(){
    that.increase();
    });
  this.numEle.style.fontSize="18px";
  this.numEle.style.color="white";
  this.numEle.style.padding="40px 0";
  this.numEle.style.textAlign="center";
  this.ele.style.backgroundColor = this.color;
  this.ele.style.width = "200px";
  this.ele.style.height = "100px";
  this.ele.style.borderRadius = "10px";
  this.ele.appendChild(this.numEle);
  document.body.appendChild(this.ele);
}

createBox.prototype.increase=function(){
    this.num = this.num + 1;
    this.numEle.innerHTML = this.num;
  };

for (var i = 0; i < boxes.length; i++) {
  elements.push(new createBox(boxes[i]));
   };
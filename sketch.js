let xsize = 600;
let ysize = 400;
function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  background("darkblue");
  //voglimo disegnare la luna
  fill("white");
  stroke("yellow");
  strokeWeight(10);

  circle(445,55,100);
  fill("darkgreen");
  strokeWeight(0);
  rect(0,200,600,200);
  let xsquare=0;
  let ysquare=120;
  let zsquare= 80;
  fill("white")
  square(xsquare,ysquare,zsquare)
  square(xsquare+100, ysquare, zsquare)
  square(xsquare+200, ysquare, zsquare)
  square(xsquare+300, ysquare, zsquare)

  fill("red")
  let x1triangle=0;
  let y1triangle=120;
  let x2triangle=80;
  let y2triangle=120;
  let x3triangle=40;
  let y3triangle=90;
  triangle(x1triangle,y1triangle, x2triangle,y2triangle, x3triangle,y3triangle)
  triangle(x1triangle+100,y1triangle, x2triangle+100,y2triangle, x3triangle+100,y3triangle)
  triangle(x1triangle+200,y1triangle, x2triangle+200,y2triangle, x3triangle+200,y3triangle)
  triangle(x1triangle+300,y1triangle, x2triangle+300,y2triangle, x3triangle+300,y3triangle)





  
}
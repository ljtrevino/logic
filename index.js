var container = document.querySelector('#container') , 
    C = 2;
    // try change C to 10 , C should be even like 2,4,6 ...

for (var i=0; i<C-1; i+=10){
  var SVG = document.getElementById("svg");
  var nSVG = document.getElementById("svg").cloneNode(true) ;
  nSVG.setAttribute("class",i&1?'R-T':'R-D');
  if(i&1){container.insertBefore(nSVG,SVG)}else{container.appendChild(nSVG);};
};

TweenLite.set(container,{perspective:300});
TweenMax.staggerTo('.R-D,.R-T',1,{rotationX:180,repeat:-1,ease:Linear.easeNone,delay:-C/2},1/(C/2));
TweenMax.to('.R-D,.R-T',40,{rotation:360,repeat:-1,ease:Linear.easeNone});
TweenMax.to('#core',1.5,{scale:0.95,backgroundColor:'hsl(+=20,+=0%,-=10%)',repeat:-1,yoyo:true,ease:Sine.easeInOut});


var container1 = document.querySelector('#container1') , 
    C = 2;
    // try change C to 10 , C should be even like 2,4,6 ...

for (var i=0; i<C-1; i++){
  var SVG = document.getElementById("svg");
  var nSVG = document.getElementById("svg").cloneNode(true) ;
  nSVG.setAttribute("class",i&1?'R-T':'R-D');
  if(i&1){container1.insertBefore(nSVG,SVG)}else{container1.appendChild(nSVG);};
};

TweenLite.set(container1,{perspective:300});
TweenMax.staggerTo('.R-D,.R-T',1,{rotationX:180,repeat:-1,ease:Linear.easeNone,delay:-C/2},1/(C/2));
TweenMax.to('.R-D,.R-T',40,{rotation:360,repeat:-1,ease:Linear.easeNone});
TweenMax.to('#core1',1.5,{scale:0.95,backgroundColor:'hsl(+=20,+=0%,-=10%)',repeat:-1,yoyo:true,ease:Sine.easeInOut});



var container2 = document.querySelector('#container2') , 
    C = 2;
    // try change C to 10 , C should be even like 2,4,6 ...

for (var i=0; i<C-1; i++){
  var SVG = document.getElementById("svg");
  var nSVG = document.getElementById("svg").cloneNode(true) ;
  nSVG.setAttribute("class",i&1?'R-T':'R-D');
  if(i&1){container2.insertBefore(nSVG,SVG)}else{container2.appendChild(nSVG);};
};

TweenLite.set(container2,{perspective:300});
TweenMax.staggerTo('.R-D,.R-T',1,{rotationX:180,repeat:-1,ease:Linear.easeNone,delay:-C/2},1/(C/2));
TweenMax.to('.R-D,.R-T',40,{rotation:360,repeat:-1,ease:Linear.easeNone});
TweenMax.to('#core2',1.5,{scale:0.95,backgroundColor:'hsl(+=20,+=0%,-=10%)',repeat:-1,yoyo:true,ease:Sine.easeInOut});
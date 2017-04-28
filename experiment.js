(function() {
    var
      // Obtain a reference to the canvas element
      // using its id.
      experiment = document.getElementById('c'),
        // Obtain a graphics context on the
        // canvas element for drawing.
        context = experiment.getContext('2d');
        x = window.innerWidth;
        y = window.innerHeight;
        dx = 5;
        dy = 5;
    // Start listening to resize events and
    // draw canvas.
    initialize();
    function initialize() {
      // Register an event listener to
      // call the resizeCanvas() function each time
      // the window is resized.
      window.addEventListener('resize', resizeCanvas, false);
      setInterval(draw,10);
      // Draw canvas border for the first time.
      resizeCanvas();
    }
    function draw(){
      experiment.width = x+100;
      experiment.height = y+100;
      context.clearRect(0,0,window.innerWidth,window.innerHeight);
      context.beginPath();
      context.fillStyle="#0000ff";
      // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
      context.arc(x,y,20,0,Math.PI*2,true); context.closePath();
      context.fill();
      if (x<0 || x >= window.innerWidth) dx=-dx;
      if (y<0 || y >= window.innerHeight) dy=-dy;
      x+=dx;
      y+=dy;
    }
    // Display custom canvas.
    // In this case it's a blue, 5 pixel border that
    // resizes along with the browser window.
    // function redraw() {
    //   context.clearRect(0, 0, x, y);
    // }
    // Runs each time the DOM window resize event fires.
    // Resets the canvas dimensions to match window,
    // then draws the new borders accordingly.
    function resizeCanvas() {
      draw();
    }
  })();

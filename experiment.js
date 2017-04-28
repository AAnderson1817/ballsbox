  (function() {
    var
      // Obtain a reference to the canvas element
      // using its id.
      experiment = document.getElementById('c'),

        // Obtain a graphics context on the
        // canvas element for drawing.
        context = htmlCanvas.getContext('2d');

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

      // Draw canvas border for the first time.
      resizeCanvas();
    }

    // Display custom canvas.
    // In this case it's a blue, 5 pixel border that
    // resizes along with the browser window.
    function redraw() {
      context.clearRect(0, 0, x, y);
    }

    // Runs each time the DOM window resize event fires.
    // Resets the canvas dimensions to match window,
    // then draws the new borders accordingly.
    function resizeCanvas() {
      experiment.width = window.innerWidth;
      experiment.height = window.innerHeight;
      redraw();
    }

  })();

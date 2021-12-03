# Requirements
  - Yarn 1.22.5

# What do to do:

1) Open command prompt 
2) Change to ReactStateManual directory
3) run 'yarn start'

# Instructions:

1) Open the web app in our browser. Normally it's at url http://localhost:3000/
2) You will notice 3 grey apples
 ![image](https://user-images.githubusercontent.com/20699945/144598212-1f4b5a1d-1501-4357-8b01-8f68e321b94a.png)

3) in 2 seconds, a function will execute that will set this.state.color = "yellow"
4) You will see no difference
5) Click "Pop!". It will up the size of the apple
6) And the apple will finally become yellow
  ![image](https://user-images.githubusercontent.com/20699945/144599472-32323396-8303-4760-993b-8df457779808.png)


# What happened ?
1) If you change this.state directly as a json object (Like in the picture below). It will not invoke React Framework internal rendering event. 
  ![image](https://user-images.githubusercontent.com/20699945/144598805-a2407874-f1d3-400c-a10d-77cf36d6723d.png)

2) We only see what the state actually is when a render happens. 
3) You can change a state all you want. You won't see any changes until render() is triggered by the framework.
4) What this example did? When you click "Pop!" it sets the state for the Size of the apple using the proper setState() function. 
  ![image](https://user-images.githubusercontent.com/20699945/144599111-4eb80b15-3dbe-4263-8cef-f7dfad47b35f.png)

5) Which triggers the render. Which shows the yellow color assigned directly by the 2 second timed event.
  ![image](https://user-images.githubusercontent.com/20699945/144599207-f1442aae-8c1b-40b5-b740-a060b07db844.png)

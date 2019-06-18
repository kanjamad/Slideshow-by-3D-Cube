# CUBE CSS-3D
* This Project I'll create slideshow represented by 3D cube.
* Project will be based on HTML, CSS and JavaScript.

### HTML structure
The cube has six divs (or “sides”), absolutely positioned. The class names correspond to the initial positions of the sides (back, left, right, top, bottom, front).

![ axes are oriented in a web browser](images/axes.png  " axes ")

#### A right-handed three-dimensional Cartesian coordinate system with the z-axis pointing towards the viewer. (Image: Wikimedia Commons) (View large version)

### Viewport Width and Height (vw) 
- Allow us to make CUPE responsive in a very flexible way. For example if width of viewport is decreased then size of height will be decreased accordingly. So if we make windows small then we will see that width and height of viewport are decreasing accordingly.

### The Perspective Property
* Create a 3D space for cube.
* Each 3D element with z>0 becomes larger; 
* Each 3D-element with z<0 becomes smaller. 
* The strength of the effect is determined by the value of this property.

### CSS transform-style Property
* Each cube should take up 1:3 of viewport because will have 3 cube.
* So, in 100% of height, will use 100/3 = 33.333333%
* preserve-3d :	Specifies that child elements will preserve its 3D position

```
.cube {
    width: 100%;
    height: 33.333333%;
    background-color: #ccc;
    transform-style: preserve-3d;
}

```

### Front and Back
Place parts of cube on their position in 3D space.
* Move this face from center to front
* Translate this element along Z 
* Insert here a positive value that it will move element close to user and opposite in case of negative value.
* So as a value we need to insert 21vw.
* By default phrase is placed in the center of 3D environment
* Defined width of cube as 42vw an actually a length of cube should be 42 vw 
* In order to get it shape of a real cube in fact this is going to be cuboid not the cube but for simplicity
* So to make lenght 42vw, need to move Front-face and  Back-face by 21vw because they are place in the center of view


```
.front {
    transform: translateZ(21vw);
}

```

```
.viewport {
    width: 42vw;
    height: 21vw;
}

```

### Additional Resources
1. <a href="https://css-tricks.com/simplifying-css-cubes-custom-properties/" target="_blank">Simplifying CSS Cubes with Custom Properties</a>
2. <a href="https://www.smashingmagazine.com/2016/07/front-end-challenge-accepted-css-3d-cube/" target="_blank">Front-End Challenge Accepted: CSS 3D Cube</a>
3. <a href="https://pixabay.com/" target="_blank">Images</a>
4. <a href="https://www.freefavicon.com/freefavicons/objects/" target="_blank">Favicon</a>
5. <a href="https://css-tricks.com/fun-viewport-units/" target="_blank">Fun with Viewport Units</a>
6. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/perspective" target="_blank">The perspective CSS property</a>
7. <a href="https://www.w3schools.com/cssref/css3_pr_transform-style.asp" target="_blank">CSS transform- style property</a>
8. <a href="https://codepen.io/team/css-tricks/pen/ebb6b5a5cec86aa04168f03e26c7501c" target="_blank">CSS transform</a>



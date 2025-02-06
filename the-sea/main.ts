import * as THREE from 'three';
import { Cube } from './library/cube';
import { ThreeDObject } from './templates/3Dobject';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// In order to make a 3D object, you must feed in the Object Attributes. You can do this by enforcing the required attributes of the ThreeDObject interface.
const cubeAttributes: ThreeDObject = {
	size: {
		width: 1,
		height: 1,
		depth: 1
	},
	// Color is an optional attribute but you can easily change it like this!
	color: 'yellow'
}
// With the attributes, you can just pass it into the cube and the Cube class will take care of everything else!
const cube = new Cube(cubeAttributes);


scene.add( cube.threeDObject, scene, camera );

camera.position.z = 5;

function animate() {

	// You can use the animation of your object or you can replace it with your animation implementation here!
	cube.animate();

	renderer.render( scene, camera );

}
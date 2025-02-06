import * as THREE from 'three';

export interface ThreeDObject {
	/**
	 * Defines the size of the 3D object in width, height, and depth.
	 */
	size: { 
		width: number; 
		height: number; 
		depth: number 
	};

	/**
	 * Defines the color of the 3D object. Can be a hexcode, string, or THREE.Color.
	 */
	color?: string | number | THREE.Color;

	/**
	 * Defines the texture applied to the surface of the 3D object. It defines the color, patterns, or details of the object.
	 */
	texture?: THREE.Texture | string; // URL or Three.js Texture

	/**
	 * Defines the material applied to the 3D object which impacts how light interacts with the object.
	 */
	material?: THREE.Material; // Optionally specify a Three.js Material

	/**
	 * Defines the position of the 3D object relative to the parent object
	 */
	position?: THREE.Vector3;

	/**
	 * Defines the rotation of the 3D object.
	 */
	rotation?: THREE.Euler;

	/**
	 * A scalar used to modify the size of the 3D object relative to it's original size.
	 */
	scale?: THREE.Vector3;

	/**
	 * A function that defines the animation behavior of the 3D object over time.
	 * @param object The 3D object to animate.
	 * @param deltaTime The time elapsed since the last frame, useful for smooth animation.
	 * @returns No return value; the function updates the object's state for animation.
	 */
	animation?: (object: THREE.Object3D, deltaTime: number) => void;

	/**
	 * Physics properties that define how the 3D object interacts with the scene, including its physical behavior.
	 * @property mass - The object's mass, affecting how it responds to forces and gravity.
	 * @property friction - The resistance the object experiences when in contact with other surfaces.
	 * @property restitution - The bounciness of the object when it collides with other objects.
	 */
	physics?: { mass: number; friction: number; restitution: number };

	/**
	 * Whether or not to render the 3D object as a wireframe
	 */
	wireframe?: boolean;

	/**
	 * The transparency of the 3D object ( 0 (transparent) to 1 (opaque))
	 */
	opacity?: number;

	/**
	 * Whether or not the 3D object should cast a shadow.
	 */
	castShadow?: boolean;

	/**
	 * Whether or not the 3D object should receive shadows from another source.
	 */
	receiveShadow?: boolean;

	/**
	 * Custom metadata
	 */
	userData?: Record<string, any>;
}
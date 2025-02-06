import * as THREE from 'three';
import { ThreeDObject } from '../templates/3Dobject';

export class Cube implements ThreeDObject {
	// Cube Attributes
	size: { width: number; height: number; depth: number; };
	color?: string | number | THREE.Color | undefined;
	texture?: string | THREE.Texture | undefined;
	material?: THREE.Material | undefined;
	position?: THREE.Vector3 | undefined;
	rotation?: THREE.Euler | undefined;
	scale?: THREE.Vector3 | undefined;
	animation?: ((object: THREE.Object3D, deltaTime: number) => void) | undefined;
	physics?: { mass: number; friction: number; restitution: number; } | undefined;
	wireframe?: boolean | undefined;
	opacity?: number | undefined;
	castShadow?: boolean | undefined;
	receiveShadow?: boolean | undefined;
	userData?: Record<string, any> | undefined;

	// 3D object to return
	threeDObject: THREE.Mesh;

	constructor(attributes: ThreeDObject) {
		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: attributes.color ? attributes.color : 'red' } );
		this.threeDObject = new THREE.Mesh( geometry, material );
	}
	
	
	animate = () => {

		this.threeDObject.rotation.x += 0.01;
		this.threeDObject.rotation.y += 0.01;
		
	}
}
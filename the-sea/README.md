# Developer Guide
This guide provides setup instructions, contribution guidelines, and an overview of the project structure.

## Prerequisites
ThreeDSea is built using Three.js, so make sure you have the latest version of Node.js installed before proceeding.

## Setup
Follow these steps to run the project on your local machine:
1. Clone the ThreeDSea repository using your preferred method.
2. Navigate to the project directory and start a local server:
```bash
cd the-sea
npx vite
```
3. Open the generated link from your terminal in your browser.

After completing these steps, ThreeDSea should be running on your computer!

## Folder Structure
To be completed later...

## Contribution Guidelines
This section outlines the workflow for making your first contribution! There are a few different ways that you can make contributions:
- Design and create a new component, or
- Pick up one of the tasks in the project backlog

If you are interested in creating a new 3D graphic of your own, you can follow these instructions:
1. Create a new branch off of the `components` branch, following the format--`ComponentName-GithubUsername`. Example: If I want to create an apple 3D graphic, then I would want to name my branch: `Apple-AdventureSlugg`
2. Navigate to the `library` directory and create a new file in the format: `component.ts`. Example: `apple.ts`.
3. In this file, create a new class for your object and implements the `ThreeDObject` interface from the templates directory. Example: 
```typescript
import * as THREE from 'three';
import { ThreeDObject } from '../templates/3Dobject';

export class Apple implements ThreeDObject {
```
4. In the constructor, assemble your 3D model with a combination of a material and a geometry.
5. Once you are done with your component, make a pull request and add @AdventureSlugg as a reviewer.

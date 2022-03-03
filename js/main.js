// Creating the scene
// To actually be able to display anything with three.js, 
// we need three things: scene, camera and renderer, 
// so that we can render the scene with camera.
import * as THREE from '../build/three.module.js';
// import Stats from '../../examples/jsm/libs/stats.module.js';
// let container, stats;     //I'm not going to use stats now, because I'm not sure how to handle
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// stats = new Stats();
// container.appendChild( stats.dom );

//At this point we have now set up the scene, our camera and the renderer.
//There are a few different cameras in three.js. For now, let's use a PerspectiveCamera, before that...

//Asking me, what others cameras are there?:
//ok, this is the list of cameras and the documentation
//-CubeCamera                 https://threejs.org/docs/#api/en/cameras/CubeCamera
//-OrthographicCamera         https://threejs.org/docs/#api/en/cameras/OrthographicCamera
//-PerspectiveCamera          https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
//-StereoCamera               https://threejs.org/docs/#api/en/cameras/StereoCamera
//-ArrayCamera                https://threejs.org/docs/#api/en/cameras/ArrayCamera

//[
//And yeah, that's it, and this:

//-CameraHelper 
//This helps with visualizing what a camera contains in its frustum.
//It visualizes the frustum of a camera using a LineSegments. https://threejs.org/docs/#api/en/objects/LineSegments

//-CameraUtils  
//A class containing useful utility functions for camera manipulation. 
//https://threejs.org/docs/index.html?q=camera#examples/en/utils/CameraUtils
//]



//Cool!, but at this point I'm like "what f1@%&$/$ are all those cameras", really, I'm lost, so how any good 
//autodedicated student do, I search it on youtube, and I find a good video explaining first, 


//PerspectiveCamera 
// Basically this camera shows the depth with the size of the objects, like in the real world works
//There are several of examples so, its better check it out on the documentation below 
//https://threejs.org/docs/?q=camera#api/en/cameras/PerspectiveCamera

//OrthographicCamera 
//  And this, use only the predefined size, only the position of elements tell you the depth,
//like a scrapbook collage where the size of elements don't change dinamically, could be used in the interactive interface
//in a game for example for both:

//https://www.youtube.com/watch?v=FwcXultcBl
//There are several of examples so, its better check it out on the documentation below 
//https://threejs.org/docs/?q=camera#api/en/cameras/OrthographicCamera

//I understand it a little better, so, watch it if you are lost too

//CubeCamera 
//  This basically is the reflection camera or the reflection on 360
//this vidio explain better that concept
//https://www.youtube.com/watch?v=tUnyNECDgFE
//and this is the example https://threejs.org/examples/#webgl_materials_cubemap_dynamic 

//StereoCamera
//  Dual PerspectiveCameras used for effects such as 3D Anaglyph or Parallax Barrier.
//In other words, this means that the effect is similar to try to do the 3D efect with a lends red and cyan on one
//3D movie, or the parallax effect that it seems have depth. For this I didn't find any video explaining what is this
//but the documentation is enough for understand it if you go to wikipedia, but I find a good channel explaining about
//this concept with ecuations and more things about the maths for Computer Vision, could it be useful on the future
//https://www.youtube.com/channel/UCf0WB91t8Ky6AuYcQV0CcLw
//Check the example on the documentation
//https://threejs.org/docs/?q=camera#api/en/cameras/StereoCamera

//ArrayCamera
//There isn't any video, but the example it's useful https://threejs.org/examples/#webgl_camera_array
//ArrayCamera can be used in order to efficiently render a scene with a predefined set of cameras. 
//This is an important performance aspect for rendering VR scenes.
//An instance of ArrayCamera always has an array of sub cameras. 
//It's mandatory to define for each sub camera the viewport property which determines the part 
//of the viewport that is rendered with this camera.

//"That's all good, but where's that cube you promised?" Let's add it now.


const geometry = new THREE.BoxGeometry();
const texture = new THREE.TextureLoader().load( './chale.jpg' );
const material = new THREE.MeshBasicMaterial( { map: texture } );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2;

//So... now... what kind of geometrys I have available to use?

//---------------------------Geometries-----------------------------
// BoxGeometry
// CircleGeometry
// ConeGeometry
// CylinderGeometry
// DodecahedronGeometry
// EdgesGeometry
// ExtrudeGeometry
// IcosahedronGeometry
// LatheGeometry
// OctahedronGeometry
// PlaneGeometry
// PolyhedronGeometry
// RingGeometry
// ShapeGeometry
// SphereGeometry
// TetrahedronGeometry
// TorusGeometry
// TorusKnotGeometry
// TubeGeometry
// WireframeGeometry

// ConvexGeometry
// DecalGeometry
// ParametricGeometry
// TextGeometry

//And It seems to exist diferents cores
// -----------------------------------Core-------------------------------------
// BufferGeometry
// InstancedBufferGeometry

// -----------------------------------Loaders-----------------------------------
// BufferGeometryLoader


//And the Materials are also important

//LineBasicMaterial
// LineDashedMaterial
// Material
// MeshBasicMaterial
// MeshDepthMaterial
// MeshDistanceMaterial
// MeshLambertMaterial
// MeshMatcapMaterial
// MeshNormalMaterial
// MeshPhongMaterial
// MeshPhysicalMaterial
// MeshStandardMaterial
// MeshToonMaterial
// PointsMaterial
// RawShaderMaterial
// ShaderMaterial
// ShadowMaterial
// SpriteMaterial

//And then finally

function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y -= 0.01;
  // stats.update();
	renderer.render( scene, camera );
}
animate();
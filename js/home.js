import * as THREE from 'https://cdn.skypack.dev/three@0.124.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.124.0/examples/jsm/controls/OrbitControls.js';
import { MTLLoader } from 'https://cdn.jsdelivr.net/npm/three@0.124.0/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'https://cdn.jsdelivr.net/npm/three@0.124.0/examples/jsm/loaders/OBJLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement)
var mtlLoader = new MTLLoader();

mtlLoader.setPath("./js/assets/");
mtlLoader.load("r2-d2.mtl", function (material) {
    material.preload();
    var objloader = new OBJLoader();
    objloader.setMaterials(material);
    objloader.setPath("./js/assets/");
    objloader.load("r2-d2.obj", function (object) {
        scene.add(object);
        object.position.y -= 60
    })
})

camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

}

animate();







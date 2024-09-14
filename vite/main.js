import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('canvas');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({color: '#B4B4B3', emissive: '#B4B4B3'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

const light = new THREE.SpotLight('#F5F5F5', 100);
light.position.set(1, 1, 1);

scene.add(light);

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.pixelRatio = window.devicePixelRatio;
renderer.render(scene, camera);

const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping(true);
orbitControls.dampingFactor = 0.05;
orbitControls.enablePan(true);
orbitControls.enableZoom(true);
orbitControls.update();

function animate() {
  requestAnimationFrame(() => {
    orbitControls.update();
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;
    box.rotateY+= 0.1;
  });
}

animate();

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  
})
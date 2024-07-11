// main.js

// //sphere setup
// // Scene setup
// const scene = new THREE.Scene();
// const container = document.getElementById('animation-container');
// const width = container.clientWidth;
// const height = container.clientHeight;

// const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(width, height);
// container.appendChild(renderer.domElement);

// // Create a sphere with hardcoded size
// const geometry = new THREE.SphereGeometry(10, 32, 32); // Adjust the radius here to change the sphere size
// const material = new THREE.MeshBasicMaterial({ color: 0x84e899, wireframe: true }); // Green color matching your text color
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

// // Position the camera
// camera.position.z = 20; // Adjust the camera distance to ensure the entire sphere is visible

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);

//     // Rotate the sphere
//     sphere.rotation.x += 0.01;
//     sphere.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }
// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//     const width = container.clientWidth;
//     const height = container.clientHeight;
//     renderer.setSize(width, height);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
// });

// main.js

// Scene setup
const scene = new THREE.Scene();
const container = document.getElementById('animation-container');
const width = container.clientWidth;
const height = container.clientHeight;

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

// Create a torus knot
const geometry = new THREE.TorusKnotGeometry(5, 3, 100, 16); // Radius, tube diameter, tubular segments, radial segments
const material = new THREE.MeshBasicMaterial({ color: 0x84e899, wireframe: true }); // Green color matching your text color
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Position the camera
camera.position.z = 20; // Adjust the camera distance to ensure the entire shape is visible

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the torus knot
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});


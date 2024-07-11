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

// Create a sphere with adjustable size
const radius = 5; // Adjust this value to change the sphere size
const geometry = new THREE.SphereGeometry(radius, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x84e899, wireframe: true }); // Green color matching your text color
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Position the camera
camera.position.z = 15;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the sphere
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

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
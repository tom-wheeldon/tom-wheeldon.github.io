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
const radius = 4; // Overall size of the torus knot
const tube = 1.5; // Thickness of the tube
const tubularSegments = 100; // Number of segments along the tubular direction
const radialSegments = 16; // Number of segments along the radial direction
const p = 2; // Number of times the geometry winds around its axis of rotational symmetry
const q = 3; // Number of times the geometry winds around a circle in the interior of the torus knot

const geometry = new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q);

// Custom shader material for animation
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 1.0 },
    },
    vertexShader: `
        uniform float time;
        void main() {
            vec3 transformed = position;
            transformed.y += sin(transformed.x * 10.0 + time) * 0.1;
            transformed.z += cos(transformed.y * 10.0 + time) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
    `,
    fragmentShader: `
        void main() {
            gl_FragColor = vec4(0.52, 0.91, 0.60, 1.0); // Color matching your design (0x84e899)
        }
    `,
    wireframe: true
});

const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Position the camera
camera.position.z = 20; // Adjust the camera distance to ensure the entire shape is visible

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update the shader uniform for time
    material.uniforms.time.value += 0.05;

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

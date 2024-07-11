let scene, camera, renderer, mesh;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000); // Adjust camera aspect ratio
    renderer = new THREE.WebGLRenderer({ alpha: true }); // Ensure background is transparent
    renderer.setSize(window.innerWidth, 300); // Constrain renderer size
    document.getElementById('animation-container').appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 20;
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

init();
animate();

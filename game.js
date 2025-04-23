
// Basic 3D scene with a "car" cube and a platform
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Platform
const platformGeometry = new THREE.BoxGeometry(20, 1, 20);
const platformMaterial = new THREE.MeshBasicMaterial({ color: 0x444444 });
const platform = new THREE.Mesh(platformGeometry, platformMaterial);
scene.add(platform);

// Car
const carGeometry = new THREE.BoxGeometry(1, 1, 2);
const carMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const car = new THREE.Mesh(carGeometry, carMaterial);
car.position.y = 1;
scene.add(car);

camera.position.set(0, 10, 10);
camera.lookAt(car.position);

let keys = {};
document.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
document.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

function animate() {
  requestAnimationFrame(animate);

  if (keys["w"]) car.position.z -= 0.1;
  if (keys["s"]) car.position.z += 0.1;
  if (keys["a"]) car.position.x -= 0.1;
  if (keys["d"]) car.position.x += 0.1;

  renderer.render(scene, camera);
}
animate();

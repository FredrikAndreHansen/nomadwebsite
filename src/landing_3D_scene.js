const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ alpha: true });

let container = document.getElementById('nomad-3d');
let width = document.querySelector('#nomad-3d').offsetWidth;
let height = document.querySelector('#nomad-3d').offsetHeight;
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor( 0x000000, 0 );
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

//Allow to resize window
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
	container = document.getElementById('nomad-3d');
	width = document.querySelector('#nomad-3d').offsetWidth;
	height = document.querySelector('#nomad-3d').offsetHeight;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// Logo
const nomadTexture = new THREE.TextureLoader().load('../graphics/favicon.png');
const geometry = new THREE.BoxGeometry( 1, 1.1, 1 ); 
const material = new THREE.MeshStandardMaterial( { map: nomadTexture } ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

//Camera Pos
camera.position.z = 3.5;
camera.position.y = -0.5;
camera.position.x = 0;

//Light
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(0, 0, 2);
scene.add(pointLight);

//Move on scroll
cube.rotation.x = 0.32;
window.addEventListener("scroll", () => {
    cube.rotation.x = 0.32 + window.scrollY/500;
});

//Render scene
function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );

    cube.rotation.z -= 0.0005;
    cube.rotation.y += 0.001;
}
animate();
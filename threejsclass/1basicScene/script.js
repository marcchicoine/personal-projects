//ingredients for threejs are 
//1) canvas declaration for frame in html
//2) scene --> objects and stuff : 
    //object - material + geometry = mesh 
//3) camera - fov + aspect ratio 
//4)renderer to add them all together - scene + camera


// Canvas
const canvas = document.querySelector('canvas.webgl')


// Scene
const scene = new THREE.Scene();

// Object

const cubeGeometry = new THREE.BoxGeometry()

const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#ff0000'
});

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh)


// Sizes for camera think aspect ratio
const sizes = {
    width: 800,
    height: 600
}

// Camera values field of view, and aspect ratiio
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.z = 4
//add to scene
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


//to use webpack after you've downloaded the template, helps for modules, all kinds of stuff
//1) terminal npm install
//  - should see the node_modules folder added 
// 2)in terminal, npm run dev
// this will start a local server with node on back end and webpack working
// 3) to turn off local server do control c 
// 4) to make a website ready bundle, do npm run build
//5) this literally makes optimized dev ready bundle called dist

//notes - dont need to add css in html folder, you can import it as module in js, 
//      or itl just automatically use it 

//you can test this server on the same url from other devices all at once!

//static folder is for static files like images etc
import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(3, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
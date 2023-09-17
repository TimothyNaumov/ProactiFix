import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class ViewGL {
  constructor(canvasRef, pathname, z) {
    this.scene = new THREE.Scene();
    // this.camera = new THREE.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // );
    const width = 600; // adjust to your canvas or desired width
    const height = 500; // adjust to your canvas or desired height

    const near = 0.1;
    const far = 1000;

    const cameraSize = 5; // This determines the scale of your orthographic view. Adjust as needed.

    const aspectRatio = width / height;

    this.camera = new THREE.OrthographicCamera(
      -cameraSize * aspectRatio, // left
      cameraSize * aspectRatio, // right
      cameraSize, // top
      -cameraSize, // bottom
      near,
      far
    );
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasRef,
      antialias: false,
    });
    this.renderer.setSize(600, 500);
    this.renderer.setClearColor(0xf8f9fa, 1); // 0xf8f9fa is the hex value for #f8f9fa

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 0);
    pointLight.position.set(0, 0, 0); // center of the scene
    this.scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 1.5, 0);
    pointLight2.position.set(0, 0, z); // center of the scene
    this.scene.add(pointLight2);

    const light2 = new THREE.AmbientLight(0xe3e3e3); // soft white light
    this.scene.add(light2);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    let loader = new GLTFLoader();
    loader.load(`/${pathname}.gltf`, (gltf) => {
      this.scene.add(gltf.scene);
    });

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(1, 1, 1);
    this.scene.add(light);

    this.camera.position.z = z;
    // this.camera.position.x = -6;
    // this.camera.position.y = 3;

    // this.camera.rotation.x = 0;
    // this.camera.rotation.y = -1;
    // this.camera.rotation.z = 0;

    this.update();
  }

  // ******************* PUBLIC EVENTS ******************* //
  updateValue(value) {
    // Whatever you need to do with React props
  }

  onMouseMove() {
    // Mouse moves
  }

  onWindowResize(vpW, vpH) {
    this.renderer.setSize(vpW, vpH);
    // this.renderer.setSize(vpW, vpH);
    // this.camera.aspect = vpW / vpH;
    // this.camera.updateProjectionMatrix();
  }

  // ******************* RENDER LOOP ******************* //
  update(t) {
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.update.bind(this));
    this.controls.update();
  }
}

// x: -6.629938470004638;
// y: 3.484666170437913;
// z: 3.114370934982779;

// _x: -0.2407290838453754;
// _y: -1.1302650638374983;
// _z: -0.21850628007066855;

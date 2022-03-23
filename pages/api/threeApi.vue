
<template>
  <section>
    threeDemo
    <section
      class="
        grid grid-cols-1
        sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8
        md:py-16
      "
    >
      <section class="rounded-lg m-4" id="demo1"></section>
      <section class="rounded-lg m-4" id="demo2"></section>
      <section class="rounded-lg m-4" id="demo3"></section>
    </section>
  </section>
</template>
<script lang="ts" setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let demo1 = () => {
  let dom = document.getElementById("demo1");
  if (!dom) {
    setTimeout(demo1, 500);
    return;
  }
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    dom.clientWidth / dom.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(dom.clientWidth, dom.clientHeight);
  dom.appendChild(renderer.domElement);
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
};

let demo2 = () => {
  let dom = document.getElementById("demo2");
  if (!dom) {
    setTimeout(demo2, 500);
    return;
  }
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(dom.clientWidth, dom.clientHeight);
  dom.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(
    45,
    dom.clientWidth / dom.clientHeight,
    1,
    500
  );
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();
  const material = new THREE.LineBasicMaterial({ color: 0x00fff0 });
  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  scene.add(line);
  renderer.render(scene, camera);
};

let demo3 = () => {
  let dom = document.getElementById("demo3");
  if (!dom) {
    setTimeout(demo3, 500);
    return;
  }
  const camera = new THREE.PerspectiveCamera(
    45,
    dom.clientWidth / dom.clientHeight,
    1,
    500
  );
  camera.position.set(0, 0, 10);
  //   camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(dom.clientWidth, dom.clientHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  dom.appendChild(renderer.domElement);
  const controls = new OrbitControls(camera, dom);
  controls.minDistance = 1;
  controls.maxDistance = 100;

  const loader = new GLTFLoader();

  const scene = new THREE.Scene();
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(-3, 10, -10);
  scene.add(dirLight);
  loader.load(
    "/assets/gltf/Soldier.glb",
    function (gltf) {
      scene.add(gltf.scene);
      //   renderer.render(scene, camera);
      render();
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  let render = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
};

onMounted(() => {
  demo1();
  demo2();
  demo3();
});
</script>
<style >
#demo1,
#demo2,
#demo3 {
  width: 400px;
  height: 400px;
}
</style>
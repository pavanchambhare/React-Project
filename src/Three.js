// Initialize Three.js scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create text geometry
var textGeometry = new THREE.TextGeometry( 'Pavan', {
  font: new THREE.Font( font ),
  size: 2,
  height: 0.5,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 0.2,
  bevelSize: 0.1,
  bevelSegments: 5
});
var textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var textMesh = new THREE.Mesh( textGeometry, textMaterial );
scene.add( textMesh );

// Animate text
var animate = function () {
  requestAnimationFrame( animate );
  textMesh.rotation.x += 0.01;
  textMesh.rotation.y += 0.01;
  renderer.render( scene, camera );
};

animate();

tsParticles
  .loadJSON("tsparticles", "/adr-tree-surgery-website/assets/json/particles.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });

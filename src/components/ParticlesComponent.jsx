// ParticlesComponent.js
import React from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = React.memo(({ particleOptions, particlesLoaded }) => {
  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={particleOptions}
    />
  );
});

export default ParticlesComponent;

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import ProfileImg from "../assets/images/people/portraits/_D1A0273.webp";

const PhotoTilt: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define the desired dimensions as a percentage of the viewport
    const desiredWidthPercentage = 40; // 80% of the viewport width
    const desiredHeightPercentage = 70; // 80% of the viewport height

    // Calculate the dimensions in pixels based on the viewport size
    const desiredWidth = window.innerWidth * (desiredWidthPercentage / 100);
    const desiredHeight = window.innerHeight * (desiredHeightPercentage / 100);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      desiredWidth / desiredHeight, // Use the calculated dimensions for aspect ratio
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    // Set the renderer size to the calculated dimensions
    renderer.setSize(desiredWidth, desiredHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputEncoding = THREE.sRGBEncoding;

    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    let plane: THREE.Mesh;
    const loader = new THREE.TextureLoader();
    loader.load(ProfileImg, (texture) => {
      texture.encoding = THREE.sRGBEncoding;
      const aspectRatio = texture.image.width / texture.image.height;
      const geometry = new THREE.PlaneGeometry(5 * aspectRatio, 5);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });
      plane = new THREE.Mesh(geometry, material);
      scene.add(plane);
      camera.position.z = 5;
    });

    const onMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / desiredWidth) * 2 - 1;
      const mouseY = -(event.clientY / desiredHeight) * 2 + 1;

      if (plane) {
        plane.rotation.y = mouseX * 0.1;
        plane.rotation.x = mouseY * 0.1;
      }
    };

    window.addEventListener("mousemove", onMouseMove, false);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={canvasRef} id="canvas-container" className=""></div>;
};

export default PhotoTilt;

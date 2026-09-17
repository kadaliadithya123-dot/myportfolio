import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Particle Galaxy Field
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00F0FF); // Cyan
    const color2 = new THREE.Color(0x8B5CF6); // Violet
    const color3 = new THREE.Color(0xEC4899); // Pink

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical / spherical random distribution
      const radius = 3 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      // Interpolate colors
      const mixedColor = color1.clone();
      const rand = Math.random();
      if (rand < 0.4) {
        mixedColor.lerp(color2, Math.random());
      } else {
        mixedColor.lerp(color3, Math.random());
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(0,240,255,0.7)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Central Floating Holographic Core Group
    const coreGroup = new THREE.Group();

    // Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    coreGroup.add(icosahedron);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(0.9, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerSphere);

    // Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.015, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      transparent: true,
      opacity: 0.4
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // Orbital Ring 2
    const ring2Geo = new THREE.TorusGeometry(2.8, 0.012, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xEC4899,
      transparent: true,
      opacity: 0.3
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // Position group slightly offset to right on desktop
    coreGroup.position.set(1.6, 0, 0);
    scene.add(coreGroup);

    // Adjust group position based on screen width
    const updateLayout = () => {
      if (window.innerWidth < 768) {
        coreGroup.position.set(0, 0.5, -1);
        coreGroup.scale.set(0.75, 0.75, 0.75);
      } else {
        coreGroup.position.set(1.8, 0, 0);
        coreGroup.scale.set(1, 1, 1);
      }
    };
    updateLayout();

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Listener
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      updateLayout();
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate galaxy slowly + mouse reaction
      particles.rotation.y = elapsedTime * 0.04 + targetX * 0.2;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1 - targetY * 0.15;

      // Rotate core elements
      icosahedron.rotation.x = elapsedTime * 0.15;
      icosahedron.rotation.y = elapsedTime * 0.2;

      innerSphere.rotation.x = -elapsedTime * 0.25;
      innerSphere.rotation.z = elapsedTime * 0.18;

      ring1.rotation.z = elapsedTime * 0.2;
      ring1.rotation.y = Math.sin(elapsedTime * 0.3) * 0.3;

      ring2.rotation.x = elapsedTime * 0.18;
      ring2.rotation.z = -elapsedTime * 0.15;

      // Floating gentle bobbing
      coreGroup.position.y = (window.innerWidth < 768 ? 0.5 : 0) + Math.sin(elapsedTime * 0.8) * 0.18;

      // Subtle camera parallax
      camera.position.x += (targetX * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (-targetY * 0.6 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

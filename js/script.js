// Configuration object for centralizing animation settings
const ANIMATION_CONFIG = {
  maxCirclesPerContainer: 5,
  circleSizeRange: { min: 10, max: 100 },
  animationDurationRange: { min: 5, max: 10 },
  circleColor: 'rgba(255, 0, 255, 0.8)',
  blur: '50px',
  offsetMultiplier: 2,
};

// Utility function to get random number within a range
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generates a random position along one of the rectangle's edges
function getRandomPosition(container, size) {
  if (!container || !container.clientWidth || !container.clientHeight) {
    console.warn('Invalid container dimensions');
    return { x: 0, y: 0 };
  }

  const edge = Math.floor(Math.random() * 4);
  const maxX = container.clientWidth - size;
  const maxY = container.clientHeight - size;
  const offset = size * ANIMATION_CONFIG.offsetMultiplier;

  switch (edge) {
    case 0: // Top edge
      return { x: getRandomInRange(0, maxX), y: -offset };
    case 1: // Right edge
      return { x: container.clientWidth + offset, y: getRandomInRange(0, maxY) };
    case 2: // Bottom edge
      return { x: getRandomInRange(0, maxX), y: container.clientHeight + offset };
    case 3: // Left edge
      return { x: -offset, y: getRandomInRange(0, maxY) };
    default:
      return { x: 0, y: 0 };
  }
}

// Creates a single animated circle within the specified container
function createRandomCircle(containerElement, activeCircles) {
  if (!containerElement) {
    console.error('Container element is null or undefined');
    return;
  }

  // Limit the number of active circles
  if (activeCircles.get(containerElement)?.size >= ANIMATION_CONFIG.maxCirclesPerContainer) {
    return;
  }

  const circleElement = document.createElement('div');
  const size = getRandomInRange(ANIMATION_CONFIG.circleSizeRange.min, ANIMATION_CONFIG.circleSizeRange.max);
  const startPosition = getRandomPosition(containerElement, size);
  const endPosition = getRandomPosition(containerElement, size);
  const duration = getRandomInRange(ANIMATION_CONFIG.animationDurationRange.min, ANIMATION_CONFIG.animationDurationRange.max) * 1000;

  // Apply styles to the circle
  Object.assign(circleElement.style, {
    width: `${size}px`,
    height: `${size}px`,
    left: `${startPosition.x}px`,
    top: `${startPosition.y}px`,
    backgroundColor: ANIMATION_CONFIG.circleColor,
    position: 'absolute',
    borderRadius: '50%',
    filter: `blur(${ANIMATION_CONFIG.blur})`,
    zIndex: '-1',
  });

  // Track the circle in the activeCircles set
  if (!activeCircles.has(containerElement)) {
    activeCircles.set(containerElement, new Set());
  }
  activeCircles.get(containerElement).add(circleElement);

  // Create animation
  const animation = circleElement.animate(
    [
      { left: `${startPosition.x}px`, top: `${startPosition.y}px` },
      { left: `${endPosition.x}px`, top: `${endPosition.y}px` },
    ],
    {
      duration,
      iterations: 1,
      easing: 'linear',
    }
  );

  // Clean up and optionally create a new circle
  animation.onfinish = () => {
    circleElement.remove();
    activeCircles.get(containerElement)?.delete(circleElement);
    createRandomCircle(containerElement, activeCircles);
  };

  containerElement.appendChild(circleElement);
}

// Initializes random circles for a container
function createRandomCircles(containerElement, activeCircles) {
  if (!containerElement) {
    console.error('Container element not found');
    return;
  }

  const numberOfCircles = getRandomInRange(1, ANIMATION_CONFIG.maxCirclesPerContainer);
  for (let i = 0; i < numberOfCircles; i++) {
    createRandomCircle(containerElement, activeCircles);
  }
}

// Manages video background loading
function initializeVideoBackground() {
  const videoFiles = [
    'media/video1.mp4',
    'media/video2.mp4',
    'media/video3.mp4',
    'media/video4.mp4',
    'media/video5.mp4',
    'media/video6.mp4',
  ];

  const videoElement = document.querySelector('.background-video video');
  if (!videoElement) {
    console.error('Video element not found');
    return;
  }

  const randomIndex = Math.floor(Math.random() * videoFiles.length);
  const sourceElement = document.createElement('source');
  sourceElement.setAttribute('src', videoFiles[randomIndex]);
  sourceElement.setAttribute('type', 'video/mp4');

  sourceElement.onerror = () => {
    console.error(`Failed to load video: ${videoFiles[randomIndex]}`);
  };

  videoElement.appendChild(sourceElement);
  videoElement.load();
}

// Manages expand button functionality
function initializeExpandButton() {
  const expandButton = document.getElementById('expand-button');
  const arrow = expandButton?.querySelector('.arrow');
  const container = document.querySelector('.container');
  const rectangleRight = document.querySelector('.rectangle-right');
  const rectangleButton = document.querySelector('.rectangle-button');

  if (!expandButton || !arrow || !container || !rectangleRight || !rectangleButton) {
    console.error('One or more required elements for expand button not found');
    return;
  }

  let expanded = false;
  expandButton.addEventListener('click', () => {
    expanded = !expanded;
    arrow.classList.toggle('rotate', expanded);
    container.classList.toggle('move-left', expanded);
    rectangleRight.classList.toggle('show', expanded);
    rectangleButton.classList.toggle('move-right', expanded);
  });
}

// Main initialization function
function initialize() {
  const activeCircles = new Map(); // Tracks active circles per container
  const containers = [
    document.querySelector('.rectangle'),
    document.querySelector('.spotifyplayer'),
    document.querySelector('.rectangle-right'),
  ];

  // Initialize circles for each container
  containers.forEach((container) => {
    if (container) {
      createRandomCircles(container, activeCircles);
    } else {
      console.warn('Container element not found');
    }
  });

  // Initialize video background
  initializeVideoBackground();

  // Initialize expand button
  initializeExpandButton();

  // Handle window resize to reposition circles
  window.addEventListener('resize', () => {
    containers.forEach((container) => {
      if (container && activeCircles.has(container)) {
        activeCircles.get(container).forEach((circle) => circle.remove());
        activeCircles.set(container, new Set());
        createRandomCircles(container, activeCircles);
      }
    });
  });
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initialize);

<template>
    <div class="youtube-container">
      <div ref="player" data-plyr-provider="youtube" :data-plyr-embed-id="videoId"></div>
    </div>
  </template>
  
  <script setup>
  import Plyr from 'plyr'
  import 'plyr/dist/plyr.css'
  
  const props = defineProps({
    videoId: {
      type: String,
      required: true
    }
  })
  
  const player = ref(null)
  const videoPlayer = ref(null)
  
  onMounted(() => {
    // Initialize PLYR with custom YouTube parameters
    videoPlayer.value = new Plyr(player.value, {
      youtube: {
        noCookie: true,
        rel: 0, // Don't show related videos at the end
        controls: 0, // Hide YouTube's native controls
        modestbranding: 1, // Hide YouTube logo
        showinfo: 0, // Hide video title and uploader before playback
        iv_load_policy: 3, // Hide annotations
        fs: 0 // Hide fullscreen button (we'll use PLYR's)
      },
      controls: [
        'play-large', // The large play button in the center
        'play', // Play/pause playback
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        'duration', // The full duration of the media
        'mute', // Toggle mute
        'volume', // Volume control
        'settings', // Settings menu
        'fullscreen' // Toggle fullscreen
      ],
      hideControls: true, // Auto-hide controls when playing
      settings: ['quality', 'speed'], // Only show quality and speed in settings
      tooltips: {
        controls: true,
        seek: true
      }
    })
  
    // Auto-hide controls when playing
    videoPlayer.value.on('playing', () => {
      const controls = document.querySelector('.plyr__controls')
      if (controls) {
        controls.style.opacity = '0'
      }
    })
  
    // Show controls when paused or hovered
    videoPlayer.value.on('pause', () => {
      const controls = document.querySelector('.plyr__controls')
      if (controls) {
        controls.style.opacity = '1'
      }
    })
  })
  
  // Clean up on unmount
  onBeforeUnmount(() => {
    if (videoPlayer.value) {
      videoPlayer.value.destroy()
    }
  })
  </script>
  
  <style scoped>
  .youtube-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
  }
  
  .youtube-container > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  /* Custom styles to hide unwanted elements */
  :deep(.plyr__controls) {
    transition: opacity 0.3s ease;
  }
  
  :deep(.plyr__menu__container [data-plyr="captions"]),
  :deep(.plyr__menu__container [data-plyr="pip"]),
  :deep(.plyr__menu__container [data-plyr="airplay"]) {
    display: none !important;
  }
  </style>
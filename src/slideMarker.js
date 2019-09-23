const slideMarker = pos => {
  let markers = document.querySelectorAll(".slide-marker span");

  markers.forEach(marker => {
    marker.style.background = "#ccc";
  });

  let slideMark = document.getElementById(`slide-marker-${pos}`);
  slideMark.style.background = "#fff";
};

export default slideMarker;

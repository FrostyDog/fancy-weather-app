
export default class Geo {
  constructor(parent, mapWrapper) {
    this.getLocation();
    this.renderLocation(parent);
    this.createMap(mapWrapper);
  }

  getLocation() {
    const url = 'https://ipinfo.io/json?token=91150214d92afd';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.lat.textContent = `Latitude: ${data.loc.split(',')[0]}`;
        this.long.textContent = `Longitude: ${data.loc.split(',')[1]}`;

        mapboxgl.accessToken =
          'pk.eyJ1IjoiZnJvc3R5ZG9nIiwiYSI6ImNrYXZhZzZlbjBvMnMyeXBncWNtYXJjOGsifQ.ytauGzr-MK_C9DGP0FN3TA';
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
        });
      });
  }

  renderLocation(parent) {
    this.lat = document.createElement('p');
    this.long = document.createElement('p');
    parent.appendChild(this.lat);
    parent.appendChild(this.long);
  }

  createMap(wrapper) {
    // this.map = document.createElement("iframe")
    // this.map.setAttribute("width", "100%")
    // this.map.setAttribute("height", "100%")
    // this.map.setAttribute("frameborder", "0")
    // this.map.setAttribute("marginwidth", "0")
    // this.map.setAttribute("scrolling", "no")
    // this.map.setAttribute("marginheight", "0")
    // this.map.setAttribute("SameSite","none")
    // wrapper.appendChild(this.map)
  }
}

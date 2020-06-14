import React from "react";
import "./Gallery.css";

class Gallery extends React.Component {
  render() {
    return (
      <div style={{"margin-top":"100px"}}> 
      <div class="flex items-center justify-center pa4 bg-lightest-blue navy side">
          <a href="https://www.google.com" class="lh-title ml3 dark-blue">Want to constribute to the gallery? Click here.</a>
      </div>
        <div class="cf pa2" style={{"margin-top":"20px"}}>
            <div class="fl w-100 w-50-ns ph2">
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters030211_960.jpg"/></p>
              <p class="no-underline pv2 db"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters.jpg"/></p>
              <p class="no-underline pv2 db"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/pink-and-noseworthy-22.12.10-cargo_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg"/></p>
            </div>
            <div class="fl w-50 w-25-ns ph2">
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw18-240112-cc_960.jpg"/> </p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-residency-cargo_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/orchid-2-mnkr_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/O270711_960-2.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-020510_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-130610_960.jpg"/></p>
            </div>
            <div class="fl w-50 w-25-ns ph2">
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zach-hurd-101218_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/cc-shanee_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/ZachHurd-190111s_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw170211pie-cargo_960.jpg"/></p>
              <p class="pv2 db no-underline black"><img alt="gallery" class="gallery db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-191110_960.jpg"/></p>
            </div>
        </div>
      </div>
      );
  }
}

export default Gallery;

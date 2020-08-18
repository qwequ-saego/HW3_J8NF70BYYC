import React from 'react'
import SampleWallpaper from '../Component/sample-wallpaper';

import hulk from '../img/hulk-1.jpg';
import venom1 from '../img/venom-1.jpg';
import venom2 from '../img/venom-2.jpg';

function Header() {
    return (
        <header class="header">
        <div class="container">
          <h1 class="title">Marvel's Fearless</h1>
          <p class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
            molestias earum eveniet.
          </p>
          <div class="search-bar">
            <input type="search" placeholder="Search" />
          </div>
  
          <div class="sample-wallpaper">
            <article class="wallpaper">
              <img src={venom1} alt="Wallpaper #1" class="wallpaper" />
            </article>
            <article class="wallpaper">
              <img src={hulk} alt="Wallpaper #1" class="wallpaper" />
            </article>

            <article class="wallpaper">
              <img src={venom2} alt="Wallpaper #1" class="wallpaper" />
            </article>
          </div>
        </div>

        <SampleWallpaper/>
      </header>
    )
}

export default Header

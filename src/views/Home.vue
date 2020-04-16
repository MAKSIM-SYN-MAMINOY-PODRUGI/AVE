<template>
  <main class="home">
    <div class="top-content">
      <div class="menu">
        <ul>
          <li><a href="#">popular</a></li>
          <li><a href="#">new arrivals </a></li>
          <li><a href="#">best sellers</a></li>
          <li><a href="#">special offers</a></li>
          <li><a href="#">coming soon</a></li>
        </ul>
      </div>
      <div class="cards">
        <div class="column col-lg-6">
          <div class="card row-lg-5 col-lg-6">
            <div class="image row-lg-5">
              <img class="row-lg-5" src="../images/gallery_lookbook/1.png" alt="">
              <div class="image-content">
                <div class="model">
                  <div>£</div> <span>89.99</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card row-lg-5 col-lg-6">
            <div class="image row-lg-5">
              <img class="row-lg-5" src="../images/gallery_lookbook/2.png" alt="">
              <div class="image-content">
                <div class="model">
                  <div>£</div> <span>47.50</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card row-lg-7 col-lg-12">
            <div class="image row-lg-7">
              <img class="row-lg-7" src="../images/gallery_lookbook/4.png" alt="">
              <div class="image-content">
                <div class="model">
                  <div>£</div> 
                  <span class="old-price">107</span>
                  <div>£</div> <span>80.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column col-lg-6">					
          <div class="card row-lg-7 col-lg-12">
            <div class="image row-lg-7">
              <img class="row-lg-7" src="../images/gallery_lookbook/5.png" alt="">
              <div class="image-content">
                <div class="model">
                  <div>£</div> <span>69.95</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card row-lg-5 col-lg-6">
            <div class="image row-lg-5">
              <img class="row-lg-5" src="../images/gallery_lookbook/6.png" alt="">
              <div class="image-content">
                <div class="model">
                  <div>£</div> <span>29.95</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card row-lg-5 col-lg-6">
            <div class="image row-lg-5">
              <img class="row-lg-5" src="../images/gallery_lookbook/7.png" alt="">
              <div class="image-content">
                <div class="model">
                  <div>£</div> <span>34.79</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <div class="cards">
        <div class="card">
          <img src="../images/gallery_lookbook/10.png" alt="">
          <div class="content">
            <div class="name">men’s <span>lookbook</span></div>
            <div class="description">Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu.</div>
            <div class="main-button">
              <button>view now</button>
            </div>
          </div> 
        </div>
        <div class="card">
          <img src="../images/gallery_lookbook/11.png" alt="">
          <div class="content">
            <div class="name">women’s <span>lookbook</span></div>
            <div class="description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.</div>
            <div class="main-button">
              <button>view now</button>
            </div>
          </div> 
        </div>
        <div class="card">
          <img src="../images/gallery_lookbook/12.png" alt="">
          <div class="content">
            <div class="name">your <span>lookbook</span></div>
            <div class="description">See an item you like and click the like button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!</div>
            <div class="main-button">
              <button>view now</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </main>    
</template>


<script>
export default {
  name: 'Home',
  metaInfo() {
    return {
      title: this.$title('Home')
    }
  }
}
</script>

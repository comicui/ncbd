// ## Defining Templates and Views

// ### HomeTemplate
//  This is just an array of strings.  However, you can use whatever
//  templating library that you want here.

var HomeTemplate = [
  // Put in a div with class content.  Ratchet will style this appropriately.
  '<div class="content">',
  ' <header class="junior-intro">',
  '   <h1>#NCBD</h1>',
  '   <p>New Comic Book Day Checklist</p>',
  ' </header>',
  // Another Ratchet component, a fancy list divider.
  ' <ul class="list divider-list"><li class="list-divider">August 28, 2013</li></ul>',
  // In the view, we will use the flickable zepto plugin here, to animate this carousel.
  '<div class="carousel-container">',
  '   <ul class="carousel-list">',
  '     <li class="carousel-item">',
  '       <summary>A+X &#35;11</summary>',
  '       <img src="http://ncbd.comicui.com/images/01.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Astonishing X-men &#35;66</summary>',
  '       <img src="http://ncbd.comicui.com/images/02.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Avengers Arena &#35;14</summary>',
  '       <img src="http://ncbd.comicui.com/images/03.jpg"/>',
  '     </li>',
  /*  '     <li class="carousel-item">',
  '       <summary>Captain America &#35;10</summary>',
  '       <img src="http://ncbd.comicui.com/images/04.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Captain Marvel &#35;15</summary>',
  '       <img src="http://ncbd.comicui.com/images/05.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Deadpool &#35;15</summary>',
  '       <img src="http://ncbd.comicui.com/images/06.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>FF &#35;11</summary>',
  '       <img src="http://ncbd.comicui.com/images/07.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Gambit &#35;16</summary>',
  '       <img src="http://ncbd.comicui.com/images/08.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Journey Into Mystery &#35;655</summary>',
  '       <img src="http://ncbd.comicui.com/images/09.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>New Avengers &#35;9</summary>',
  '       <img src="http://ncbd.comicui.com/images/10.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Rocket Raccoon: Tales from Half World</summary>',
  '       <img src="http://ncbd.comicui.com/images/11.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Scarlet Spider &#35;21</summary>',
  '       <img src="http://ncbd.comicui.com/images/12.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Secret Avengers &#35;8</summary>',
  '       <img src="http://ncbd.comicui.com/images/13.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Thanos Rising &#35;5</summary>',
  '       <img src="http://ncbd.comicui.com/images/14.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Thor God of Thunder &#35;12</summary>',
  '       <img src="http://ncbd.comicui.com/images/15.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Ultimate Comics Ultimate Spider-man &#35;26</summary>',
  '       <img src="http://ncbd.comicui.com/images/16.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Uncanny Avengers &#35;11</summary>',
  '       <img src="http://ncbd.comicui.com/images/17.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Uncanny X-men &#35;11</summary>',
  '       <img src="http://ncbd.comicui.com/images/18.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Wolverine &amp; the X-men &#35;35</summary>',
  '       <img src="http://ncbd.comicui.com/images/19.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Wolverine MAX</summary>',
  '       <img src="http://ncbd.comicui.com/images/20.jpg"/>',
  '     </li>',
  '     <li class="carousel-item">',
  '       <summary>Young Avengers</summary>',
  '       <img src="http://ncbd.comicui.com/images/21.jpg"/>',
  '     </li>',*/
  '   </ul>',
  ' <div class="carousel-navigation-container">',
  '   <ul class="carousel-navigation"><li class="active" data-index="0"></li><li data-index="1"></li><li data-index="2"></ul>',
  ' </div>',
  ' </div>',
  ' <div class="button-positive button-block show-more-button">Last Week</div>',
  '</div>'
  // Join the array with a new-line for a quick and easy html template.
].join('\n');
// ### HomeView
// A Jr.View works just like a Backbone.View, except whenever you attach a click event,
// if will check to see if you are on a touch device and if you are, attach a
// touchend event instead.
var HomeView = Jr.View.extend({
  // Simply render our HomeTemplate in the View's HTML
  render: function(){
    this.$el.html(HomeTemplate);
    this.afterRender();
    return this;
  },
  afterRender: function() {
    this.setUpCarousel();
  },
  setUpCarousel: function() {
    var after = function() {
      this.$('.carousel-list').flickable({segments:3});
    };
    setTimeout(after,1);
  },
  events: {
    'click .show-more-button': 'onClickShowMoreButton',
    'onScroll .carousel-list': 'onScrollCarousel',
    'click .carousel-navigation li': 'onClickCarouselNavigationItem'
  },
  onClickShowMoreButton: function() {
    // Jr.Navigator works like Backbone.history.navigate, but it allows you to add an animation in the mix.
    Jr.Navigator.navigate('ratchet',{
      trigger: true,
      animation: {
        // Do a stacking animation and slide to the left.
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.LEFT
      }
    });
    return false;
  },
  onScrollCarousel: function() {
    // Set the active dot when the user scrolls the carousel
    var index = this.$('.carousel-list').flickable('segment');
    this.$('.carousel-navigation li').removeClass('active');
    this.$('.carousel-navigation li[data-index="'+index+'"]').addClass('active');
  },
  onClickCarouselNavigationItem: function(e) {
    // Scroll the carousel when the user clicks on a dot.
    var index = $(e.currentTarget).attr('data-index');
    this.$('.carousel-list').flickable('segment',index);
  }
});

// ### RatchetTemplate
// This is just a template that shows different UI elements that you can use from the Ratchet project
var RatchetTemplate = [
  '<header class="bar-title">',
  ' <div class="header-animated">',
// If you want the contents of the header to be animated as well, put those elements inside a div
// with a 'header-animated' class.
  '   <div class="button-prev">Back</div>',
  '   <h1 class="title">#NCBD #ComicUI</h1>',
  //'   <div class="button-next">Next</div>',
  '</header>',
  '<div class="content ratchet-content">',
  ' <p>ncbd.comicui.com is powered by the Jr. HTML5 framework.</p>',
  ' <p>Here are some examples:</p>',
  ' <div class="ratchet-examples">',
  '  <ul class="list inset">',
  '   <li>',
  '     <a href="#">',
  '       List item 1',
  '       <span class="chevron"></span>',
  '       <span class="count">4</span>',
  '     </a>',
  '   </li>',
  '  </ul>',
  '  <div class="button-block button-main">Block button</div>',
  '  <a class="button">Mini</a> <a class="button-main">buttons</a> <a class="button-positive">are</a> <a class="button-negative">awesome!</a>',
  '  <div class="toggle active example-toggle"><div class="toggle-handle"></div></div>',
  '  <div class="example-cnts"><span class="count">1</span><span class="count-main">2</span><span class="count-positive">3</span><span class="count-negative">4</span></div>',
  '  <input type="search" placeholder="Search">',
  ' </div>',
  ' <p>For more examples checkout the <a href="http://maker.github.com/ratchet/">ratchet project.</a></p>',
  '</div>'
].join('\n');

// ### RatchetView
var RatchetView = Jr.View.extend({
  render: function(){
    this.$el.html(RatchetTemplate);
    return this;
  },
  events: {
    'click .button-prev': 'onClickButtonPrev',
    'click .button-next': 'onClickButtonNext',
    'click .example-toggle': 'onClickExampleToggle'
  },
  onClickButtonPrev: function() {
    // Trigger the animation for the back button on the toolbar
    Jr.Navigator.navigate('home',{
      trigger: true,
      animation: {
        // This time slide to the right because we are going back
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.RIGHT
      }
    });
  },
  onClickButtonNext: function() {
    Jr.Navigator.navigate('pushstate',{
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.LEFT
      }
    });
  },

  onClickExampleToggle: function() {
    // Simple example of how the on/off toggle switch works.
    this.$('.example-toggle').toggleClass('active');
  }
});

// ## PushStateTemplate
// Nothing new here

var PushStateTemplate = [
  '<header class="bar-title">',
  ' <div class="header-animated">',
  '   <div class="button-prev">Back</div>',
  '   <h1 class="title">Pushstate API</h1>',
  '</header>',
  '<div class="content pushstate-content">',
  '  <summary>In combination with backbone\'s routing and the pushstate api, Jr. maintains animations when you use pushstate.</summary>',
  '  <i class="icon-umbrella"></i>',
  '  <p>Push the browser back button to watch it work.</p>',
  '</div> '
].join('\n');

// ## PushStateView
var PushStateView = Jr.View.extend({
  render: function() {
    this.$el.html(PushStateTemplate);
    return this;
  },
  events: {
    'click .button-prev': 'onClickButtonPrev'
  },
  onClickButtonPrev: function() {
    Jr.Navigator.navigate('ratchet',{
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.RIGHT
      }
    });
  }
});
var AppRouter = Jr.Router.extend({
  routes: {
    'home': 'home',
    'ratchet': 'ratchet',
    'pushstate': 'pushstate'
  },
  home: function(){
    var homeView = new HomeView();
    this.renderView(homeView);
  },
  ratchet: function() {
    var ratchetView = new RatchetView();
    this.renderView(ratchetView);
  },
  pushstate: function() {
    var pushStateView = new PushStateView();
    this.renderView(pushStateView);
  }
});
var appRouter = new AppRouter();
Backbone.history.start();
Jr.Navigator.navigate('home',{
  trigger: true
});
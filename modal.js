$(function() {

  let modalSource = $('#modal-template')[0].innerHTML;
  let modalTemplate = Handlebars.compile(modalSource);

  let projectsObj = {
    homebase: {
      title: 'HomeBase',
      screenshots: [{src: './assets/HomeBase_1.png'}, {src: './assets/HomeBase_2.png'},
        {src: './assets/HomeBase_3.png'}, {src: './assets/HomeBase_4.png'}, {src: './assets/HomeBase_5.png'}],
      tech: [{tag: 'React'}, {tag: 'Redux'}, {tag: 'Node.js'}, {tag: 'Express'}, {tag: 'MySQL'}, {tag: 'Postman'}],
      hasDemo: false,
      demoLink: ''
    },
    poker: {
      title: 'React Video Poker',
      screenshots: [{src: './assets/poker_1.png'}, {src: './assets/poker_2.png'}, {src: './assets/poker_3.png'}],
      tech: [{tag: 'React'}, {tag: 'Redux'}, {tag: 'SCSS'}, {tag: 'Webpack'}, {tag: 'Jest'}],
      hasDemo: false,
      demoLink: ''
    },
    pcw: {
      title: 'PolyCultural Weekend App',
      screenshots: [{src: './assets/PCW_1.png'}, {src: './assets/PCW_2.png'}, {src: './assets/PCW_3.png'}],
      tech: [{tag: 'Django'}, {tag: 'MySQL'}, {tag: 'Balsamiq'}],
      hasDemo: false,
      demoLink: ''
    },
    parched: {
      title: 'Parched.',
      screenshots: [{src: './assets/parched_1.png'}],
      tech: [{tag: 'TypeScript'}, {tag: 'React'}, {tag: 'SCSS'}, {tag: 'Webpack'}],
      hasDemo: true,
      demoLink: 'https://mfajardodev.github.io/Grab-A-Cold-One/'
    }
  }

  let openModal = () => {
    $('#modal-container').show();
  }
  let closeModal = () => {
    $('#modal-container').hide();
  }

  $('.project-card button').on('click', (e) => {
    let projectKey = $(e.target).parents('.project-card').attr('data-project');
    let modalContext = {
      title: projectsObj[projectKey].title,
      screenshots: projectsObj[projectKey].screenshots,
      tech: projectsObj[projectKey].tech,
      hasDemo: projectsObj[projectKey].hasDemo,
      demoLink: projectsObj[projectKey].demoLink,
    };
    let modalHtml = modalTemplate(modalContext);

    console.log(projectKey, projectsObj[projectKey].screenshots, projectsObj[projectKey].tech);
    
    $('#modal-container').empty().append(modalHtml);
    
    $('.image-carousel').slick();
    
    openModal();
  });

  $('.nav-link').on('click', (e) => {
    let section = $(e.target).attr('data-scrollTo');
    console.log(section);
    if (section === 'contact') {
      $('html, body').animate({
        scrollTop: $("#"+section).offset().top
      }, 200);
    }
    else {
      let marginOffset = $(window).height() / 10;
      let topOffset = $("#"+section).offset().top - marginOffset + 10;
      console.log(topOffset);
      $('html, body').animate({
        scrollTop: topOffset
      }, 200);
    }
  })

  $('body').on('click', (e) => {
    if ($(e.target).hasClass('modal-overlay') || $(e.target).hasClass('modal-wrapper')) {
      closeModal();
    }
  });

  feather.replace();
});
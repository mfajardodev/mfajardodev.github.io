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
      screenshots: [{src: './assets/parched_1.png'}, {src: './assets/parched_2.png'}],
      tech: [{tag: 'TypeScript'}, {tag: 'React'}, {tag: 'SCSS'}, {tag: 'Webpack'}],
      hasDemo: true,
      demoLink: 'https://mfajardodev.github.io/Parched/'
    }
  }

  let openModal = function() {
    $('#modal-container').show();
    bindModalEvents();
  }
  let closeModal = function() {
    $('#modal-container').hide();
  }

  let bindModalEvents = function() {
    $('.modal-overlay').on('click', function(e) {
      if ($(e.target).hasClass('modal-overlay') || $(e.target).hasClass('modal-wrapper')) {
        closeModal();
      }
    });
    $('.close-modal').on('click', function(e) {
      closeModal();
    });
  }

  $('.project-card button').on('click', function(e) {
    let projectKey = $(e.target).parents('.project-card').attr('data-project');
    let modalContext = {
      title: projectsObj[projectKey].title,
      screenshots: projectsObj[projectKey].screenshots,
      tech: projectsObj[projectKey].tech,
      hasDemo: projectsObj[projectKey].hasDemo,
      demoLink: projectsObj[projectKey].demoLink,
    };
    let modalHtml = modalTemplate(modalContext);
    
    $('#modal-container').empty().append(modalHtml);
    
    if (projectKey === 'pcw') {
      $('#modal-container .modal-content').css('max-width', '25%');
      $('#modal-container .modal-content').css('max-width', '25%');
    }
    else {
      $('#modal-container .modal-content').css('max-width', '60%');
    }

    $('.image-carousel').slick({
      speed: 300
    });

    $('.image-carousel').slick('slickGoTo', 0);

    openModal();
  });

  $('.nav-link').on('click', function(e) {
    let section = $(e.target).attr('data-scrollTo');
    if (section === 'contact') {
      $('html, body').animate({
        scrollTop: $("#"+section).offset().top
      }, 200);
    }
    else {
      let topOffset = $("#"+section).offset().top;
      $('html, body').animate({
        scrollTop: topOffset
      }, 200);
    }
  })

  feather.replace();
});

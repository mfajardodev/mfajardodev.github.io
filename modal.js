$(function() {

  let modalSource = $('#modal-template')[0].innerHTML;
  let modalTemplate = Handlebars.compile(modalSource);

  $('.project-card button').on('click', (e) => {
    let modalContext = { title: "My New Post", body: "This is my first post!" };
    let modalHtml = modalTemplate(modalContext);
    console.log($(e.target).parents('.project-card'));
  });

  feather.replace();
});
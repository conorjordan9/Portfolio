var information = [];

function BlogPost(catagories) {
  this.title = catagories.title; //Title of info
  this.catagories = catagories.type;
  this.author = catagories.author;
  this.body = catagories.body; //Summery of info
  this.publishedOn = catagories.publishedOn;
}

BlogPost.prototype.toHtml = function() {
  var source = $('#blog-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

developerBlog.forEach(function(element){
  information.push(new BlogPost(element));
});

information.forEach(function(bPost){
  $('#blog').append(bPost.toHtml());
  console.log('appending story: '+bPost.infoTitle);
  console.log(bPost.category);
  $('#author-filter').append('<option value ="' + bPost.author+ '">' +bPost.author+ '</option>');
  if ($('#category-filter option[value="' + bPost.category + '"]').length === 0) {
    $('#category-filter').append('<option value ="' + bPost.category+ '">' +bPost.category+ '</option>');
  }
});

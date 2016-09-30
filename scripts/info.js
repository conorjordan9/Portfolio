var information = [];

function BlogPost (catagories) {
  this.infoTitle = catagories.title; //Title of info
  this.author = catagories.author;
  this.type = catagories.category;
  this.summery = catagories.body; //Summery of info
  this.publishedOn = '';
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

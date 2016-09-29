var information = [];

function BlogPost (catagories) {
  this.infoTitle = catagories.title; //Title of info
  this.summery = catagories.summery; //Summery of info
  this.author = catagories.author;
  this.category = catagories.category;
}

BlogPost.prototype.toHtml = function() {
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

developerBlog.forEach(function(element){
  information.push(new BlogPost(element));
});

information.forEach(function(bPost){
  $('#main').append(bPost.toHtml());
  console.log('appending story: '+bPost.infoTitle);
  $('#author-filter').append('<option value ="' + a.author+ '">' +a.author+ '</option>');
  if ($('#category-filter option[value="' + a.category + '"]').length === 0) {
    $('#category-filter').append('<option value ="' + a.category+ '">' +a.category+ '</option>');
  }
});

var information = [];

function Info (catagories) {
  this.infoTitle = catagories.title; //Title of info
  this.summery = catagories.summery; //Summery of info
}

Info.prototype.toHtml = function() {
  var $infoChunk = $('section').clone();
  $infoChunk.find('title').html(this.infoTitle);
  $infoChunk.find('.blogSummery').html(this.summery);
  $infoChunk.removeAttr('class');
  console.log('Prototyping: '+this.infoTitle);
  return $infoChunk;
};

soccerBlog.forEach(function(element){
  information.push(new Info(element));
});

information.forEach(function(bPost){ // Get it?   Soccer... Post...
  $('section').append(bPost.toHtml());
  console.log('appending story: '+bPost.this.infoTitle);
});

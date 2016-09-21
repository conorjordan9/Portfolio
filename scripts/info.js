var information = [];

function Info (catagories) {
	this.infoTitle = catagories.title; //Title of info
	this.summery = catagories.summery; //Summery of info
}

Info.prototype.toHtml = function() {
	var $infoChunk = $('section.blog').clone();
	$infoChunk.find("title").html(this.infoTitle);
	$infoChunk.find(".blogSummery").html(this.summery);
	$infoChunk.removeAttr("class");
	return $infoChunk;
};

soccerBlog.forEach(function(element){
  information.push(new Info(element));
});

information.forEach(function(soccerPost){ // Get it?   Soccer... Post...
  $("#blog").append(soccerPost.toHtml());
});

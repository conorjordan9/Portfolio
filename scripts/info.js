var information = [];

function Info (catagories) {
	this.infoTitle = catagories.info; //Title of info
	this.summery = catagories.summery; //Summery of info
}

Info.prototype.toHtml = function() {
	var $infoChunk = $('section').clone();
	$infoChunk.find("title").html(this.infoTitle);
	$infoChunk.find(".blogSummery").html(this.summery);
	$infoChunk.removeATTR('class');
	return $infoChunk;
};

soccerBlog.forEach(function(element){
  information.push(new Info(element));
});

information.forEach(function(soccerPost){ // Get it?   Soccer... Post...
  $("#blog").append(soccerPost.toHtml());
});

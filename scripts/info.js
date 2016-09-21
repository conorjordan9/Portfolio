var information = [];


function Info (catagories) {
	this.infoTitle = catagories.info; //Title of info
	this.summ = catagories.summ; //Summery of info
}

info.prototype.toHtml = function() {
	var $infoChunk = $(*******).clone();
	$infoChunk.find("title").html(this.infoTitle);
	$infoChunk.find("title").html(this.summ);
	$infoChunk.removeATTR('class');
	return $infoChunk;
}

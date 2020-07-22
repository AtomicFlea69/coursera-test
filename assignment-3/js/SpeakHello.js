(function(window){
	var helloSpeaker = {};
	var wordSpeak = "Hello ";
	helloSpeaker.sayHello = function(name){
		console.log(wordSpeak + name);
	};
	window.helloSpeaker = helloSpeaker;
})(window);


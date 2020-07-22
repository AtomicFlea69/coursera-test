(function (name){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for(var name1 in names){
		var firstLetter = names[name1].charAt(0).toLowerCase();
		if(firstLetter === 'j'){
			byeSpeaker.sayBye(names[name1]);
		}
		else{
			helloSpeaker.sayHello(names[name1]);
		}
	}
})(name);
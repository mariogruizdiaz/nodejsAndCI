var greeting = require("../greeting");

describe("Time tests", function(){
	it("should say 'Good morning' at 4am", function(){
		var time = new Date();
		time.setHours(4);
		
		expect(greeting(time)).toBe("Good morning");
	});

	it("should say 'Good afternoon' at 12pm", function(){
		var time = new Date();
		time.setHours(12);
		
		expect(greeting(time)).toBe("Good afternoon");
	});

	it("should say 'Good evening' at 6pm", function(){
		var time = new Date();
		time.setHours(18);
		
		expect(greeting(time)).toBe("Good evening");
	});

	it("should say 'Good night' at 10pm", function(){
		var time = new Date();
		time.setHours(22);
		
		expect(greeting(time)).toBe("Good night");
	});
});
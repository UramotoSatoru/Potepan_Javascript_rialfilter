

$("#keyword").on("input",hideImageEvent);

function hideImageEvent(){

	$("li").addClass("add_hidden");

	const results = [];
	const inputText = $("#keyword").val();
	const fil1 = document.getElementById("fil1");
	const fil2 = document.getElementById("fil2");
	const fil3 = document.getElementById("fil3");
	const fil4 = document.getElementById("fil4");

	if(!inputText){
		$("li").removeClass("add_hidden");
	}

	if(inputText){
		$(".filter_keyword").each((index,name) =>{
			if(name.textContent.indexOf(inputText) !== -1){
				results.push(name.textContent);
			}
		});

		$.each(results, (index, name) => {
      if (name == fil1.textContent){
				$(".fil1").removeClass("add_hidden");
			}
      if (name == fil2.textContent){
				$(".fil2").removeClass("add_hidden");
			}
      if (name == fil3.textContent){
				$(".fil3").removeClass("add_hidden");
			}
      if (name == fil4.textContent){
				$(".fil4").removeClass("add_hidden");
			}
    });

	}
}
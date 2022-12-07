window.onload = function() 
{
	// alert("Welcome to SwiftTally, an easy to-do list app! Click the \"+\" or use the \"Enter\" key to add new items to your list. Arrange items by clicking and dragging. Double click on an item to delete it, or click on the emoji to delete all checked items. To delete all items, click on the \"SwiftTally\" logo. Happy list-making!");
	// Disabled Smiley Face
	
	// $("#Smiley").css("opacity", "0");
	
	// Variables used globally
	
	var itemsMade = 0;
	var num = 0; // THIS NUM IS USED FOR SMILEY FACE
		
	// Event Listener for the textbox - to add an item

	const button = document.getElementById("push");
	var pageVisited = false;

	if (button)
	{
	  button.addEventListener("click", addItem);
	}
	
	$("#userinput").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#push").click();
    }});

	function addItem()
	{
		var ul = document.getElementById("sortable");
		var userInput = document.getElementById("userinput").value;
		
		if (userInput == "")
		{
			window.alert("You must enter some text first!");
		}	
		else
		{
			if (pageVisited == false)
			{
				ul.innerHTML = "";
				// ul.innerHTML += '<li class = "ui-state-default"> <input type = "checkbox" name = "check" id = "checkbox" />' + ' ' + userInput + '</li>';

				var newLi = document.createElement('li');
				newLi.setAttribute('id', 'ui-state-default');

				var newCheckbox = document.createElement("input");
				newCheckbox.setAttribute('type', 'checkbox');
				newCheckbox.setAttribute('name', "check");
				newCheckbox.setAttribute('id', 'checkbox');
				
				var newButton = document.createElement("button");
				newButton.setAttribute("class", "delete");
				newButton.innerHTML = "&#128465;";
				
				newCheckbox.addEventListener("click", testFunction);
				newButton.addEventListener("click", testFunctionTwo);

				var liText = document.createTextNode("\xa0\xa0\xa0" + userInput + "\xa0\xa0\xa0");
				newLi.appendChild(newCheckbox);
				newLi.appendChild(newButton);
				newLi.appendChild(liText);
				
				
				ul.appendChild(newLi);
				
				$("#Smiley").css("opacity", "1");
				
				// This code finds how many to update smiley face

				console.log("CHECKED");
				num = 0;
				var liAll = document.querySelectorAll('#checkbox');
				var div_array = [...liAll]; // converts NodeList to Array
		
				div_array.forEach(li => {
					if (li.checked == true)
					{
						console.log("hi");
						num++;
					}
				});
				console.log(num);
		
				smileyUpdate(num);
		
				// END

				pageVisited = true;
				
				document.getElementById("userinput").value = "";
			}
			else
			{
				// ul.innerHTML += '<li class = "ui-state-default"> <input type = "checkbox" name = "check" id = "checkbox" />' + ' ' + userInput + '</li>';
				
				var newLi = document.createElement('li');
				newLi.setAttribute('id', 'ui-state-default');

				var newCheckbox = document.createElement("input");
				newCheckbox.setAttribute('type', 'checkbox');
				newCheckbox.setAttribute('name', "check");
				newCheckbox.setAttribute('id', 'checkbox');
				
				var newButton = document.createElement("button");
				newButton.setAttribute("class", "delete");
				newButton.innerHTML = "&#128465;";
				
				newCheckbox.addEventListener("click", testFunction);
				newButton.addEventListener("click", testFunctionTwo);

				var liText = document.createTextNode("\xa0\xa0\xa0" + userInput + "\xa0\xa0\xa0");
				newLi.appendChild(newCheckbox);
				newLi.appendChild(newButton);
				newLi.appendChild(liText);
				
				
				ul.appendChild(newLi);
				
				$("#Smiley").css("opacity", "1");
				
				// This code finds how many to update smiley face

				console.log("CHECKED");
				num = 0;
				var liAll = document.querySelectorAll('#checkbox');
				var div_array = [...liAll]; // converts NodeList to Array
		
				div_array.forEach(li => {
					if (li.checked == true)
					{
						console.log("hi");
						num++;
					}
				});
				console.log(num);
		
				smileyUpdate(num);
		
				// END

				pageVisited = true;
				
				document.getElementById("userinput").value = "";
			}
			
			itemsMade++;
		}
	}
	
	// Event Listener for the checkbox - to Strikethrough an item if checked
	// This will also change the smiley face as you click off items
	
	function testFunction()
	{
		var test = $(this).closest("li").text().trim();
		
		console.log(test);
		
		$(this).closest("li").toggleClass('strike');
		$(this).toggleClass('strike');
		
		// This code finds how many to update smiley face

		console.log("CHECKED");
		num = 0;
		var liAll = document.querySelectorAll('#checkbox');
		var div_array = [...liAll]; // converts NodeList to Array
		
		div_array.forEach(li => {
			if (li.checked == true)
			{
				console.log("hi");
				num++;
			}
		});
		console.log(num);
		
		smileyUpdate(num);
		
		// END
	}
	
	var el = document.getElementById("checkbox");
	el.addEventListener("click", testFunction);
	
	// Event Listener for the item - to delete an item if clicked on
	
	function testFunctionTwo()
	{
		let text;
		if (confirm("Are you sure you want this item to be deleted?") == true)
		{
			text = "The item was deleted";
			var test = $(this).closest("li");
			
			test.remove();
			
			// This code finds how many to update smiley face
			
			num = 0;
			var liAll = document.querySelectorAll('#checkbox');
			var div_array = [...liAll]; // converts NodeList to Array
			
			div_array.forEach(li => {
				if (li.checked == true)
				{
					console.log("hi");
					num++;
				}
			});
			console.log(num);
			
			smileyUpdate(num);
		// END
		} 
		else 
		{
			text = "Item was not deleted";
		}
	}
	
	btns = document.getElementsByClassName("delete");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", testFunctionTwo);
    }
	
	
	// Smiley Face Function -> To Change Smiley Face
	
	function smileyUpdate(num)
	{
		var smileyP = document.querySelector("footer").querySelector("p");
		var liAll = document.querySelectorAll('#checkbox');
		var div_array = [...liAll]; 
		var total = div_array.length;
		var percentage = (num / total) * 100;
		// console.log(percentage);
		
		if (total == 0)
		{
			smileyP.innerHTML = "";
		}
		else if (percentage == 100)
		{
			smileyP.innerHTML = "&#128526;";
		}
		else if (percentage >= 51 && percentage <= 99)
		{
			smileyP.innerHTML = "&#128524;";
		}
		else if (percentage == 50)
		{
			smileyP.innerHTML = "&#128550;";
		}
		else if (percentage >= 1 && percentage <= 49)
		{
			smileyP.innerHTML = "&#128560;";
		}
		else
		{
			smileyP.innerHTML = "&#128557;"; // DONE
		}
	}
	
	// Delete specific item by tapping on smiley face (to help mobile users)
	/*
	function deleteMobile()
	{
		var checkBox = document.querySelectorAll('#checkbox');
		var checkBoxArray = [...checkBox]; // converts NodeList to Array
		checkBoxArray.forEach(li => {
			if (li.checked == true)
			{
				console.log("yes");
				var test = li.closest("li");
		
				test.remove();
			}
		});
		
		// This code finds how many to update smiley face
		
		num = 0;
		var liAll = document.querySelectorAll('#checkbox');
		var div_array = [...liAll]; // converts NodeList to Array
		
		div_array.forEach(li => {
			if (li.checked == true)
			{
				console.log("hi");
				num++;
			}
		});
		console.log(num);
		
		smileyUpdate(num);
		
		// END
	}
	
	var smileyP = document.querySelector("footer").querySelector("p");
	smileyP.addEventListener("click", deleteMobile);
	*/
	
	// Delete All Items using Logo
	
	function deleteAll()
	{
		var confirmDelete = confirm("Are you sure you want to delete all your items?");
		
		if (confirmDelete == true)
		{
			var ul = document.getElementById("sortable");
			ul.innerHTML = "";
			document.querySelector("footer").querySelector("p").innerHTML = "&#128517";
		}
	}
	
	var logoGet = document.getElementById("LOGO");
	logoGet.addEventListener("click", deleteAll);
	
	// Adding the event listeners to the tutorial items
	
	var liAll = document.querySelectorAll('#checkbox');
	var div_array = [...liAll]; // converts NodeList to Array
		
	div_array.forEach(li => {
		li.addEventListener("click", testFunction);
	});
	
	var elTwo = document.querySelectorAll(".ui-state-default");
	var div_arrayTwo = [...elTwo];
	
	div_arrayTwo.forEach(li => {
		li.addEventListener("dblclick", testFunctionTwo);
	});
}

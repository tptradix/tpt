(function () {
	if (!document.body) {
	  return;
	}

	window.addEventListener('hashchange', () => {
		var roadmap = document.getElementById("map");
		var about = document.getElementById("about");

		if(window.location.hash !== "#about") {
		  about.style.display = "none";
		  roadmap.style.display = "block";
		} else {
		  roadmap.style.display = "none";
		  about.style.display = "block";
		};
	});
})();
// WinBox
const about = document.querySelector("#about");
const progress = document.querySelector("#progress");
const aboutContent = document.querySelector("#about__content");
const progressContent = document.querySelector("#progress__content");

about.addEventListener("click", () => {
	const aboutBox = new WinBox({
		title: "About Me",
		width: "300px",
		height: "450px",
		mount: aboutContent,
		onfocus: function () {
			this.setBackground("var(--pink)");
		},
		onblur: function () {
			this.setBackground("var(--light-gray)");
		},
	});
});

progress.addEventListener("click", () => {
	const progressBox = new WinBox({
		title: "My Progress",
		width: "300px",
		height: "550px",
		mount: progressContent,
		onfocus: function () {
			this.setBackground("var(--pink)");
		},
		onblur: function () {
			this.setBackground("var(--light-gray)");
		},
	});
});

// Theme
var audio = document.createElement("audio");
var volume = document.getElementById("volume");

function theme() {
	audio.setAttribute("autoplay", "true");
	audio.innerHTML = '<source src="./app/audio/theme.webm" type="audio/mpeg">';
	document.body.appendChild(audio);

	if ((audio.muted === false, volume.src.match("unmute"))) {
		volume.src = "./images/icons/mute.png";
		audio.muted = true;
	} else {
		volume.src = "./images/icons/unmute.png";
		audio.muted = false;
	}
}

// Typed
var typed = new typed("#animate", {
	strings: ["Content Creator", "Web Developer"],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true,
});

// Animates
$(document).ready(function () {
	var scrollDiv = $(".wrapper");
	var target = $(".animated");
	var scrollDivHeight = $(".wrapper").height();

	var targetTop = target.offset().top;
	var scrollDivTop = scrollDiv.offset().top;

	var toScroll = targetTop - scrollDivTop - scrollDivHeight;
	var addToClass = target.attr("data-animation");
	var visibleClass = "visible";

	scrollDiv.scroll(function () {
		var scrolled = $(this).scrollTop();
		if (scrolled > toScroll) {
			target.addClass(visibleClass).addClass(addToClass);
		} else {
			target.removeClass(visibleClass).removeClass(addToClass);
		}
	});
});

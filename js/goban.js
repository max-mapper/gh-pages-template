var goban = (function(){
	var canvas = document.getElementById("goban");
	var ctx = canvas.getContext("2d");

	var drawLines = function() {
		var lineStep = 30;
		var lineLimit = 30;
		var x = y = lineStep;

		for (var i = 0; i < 19; i++) {
			ctx.moveTo(x, lineLimit);
			ctx.lineTo(x, canvas.height - lineLimit);

			ctx.moveTo(lineLimit, y);
			ctx.lineTo(canvas.width - lineLimit, y);

			x += lineStep;
			y += lineStep;
		}
	};

	var drawDots = function() {
		var x = y = 120;

		for( var i = 1; i <= 9; i++ ) {
			ctx.fillRect(x - 3, y - 3, 6, 6);
			x += 180;

			if( i % 3 === 0 ) {
				x = 120;
				y += 180;
			}
		}
	};

	return {
		init: function() {
			ctx.beginPath();

			drawLines();
			drawDots();

			ctx.strokeStyle = "black";
			ctx.stroke();
		}
	};
})();
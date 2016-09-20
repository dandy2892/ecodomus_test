var messageModule = (function() {
  	const templateId = '#ticketTemplate';
  	const tWhere = (i, n) => {
  		return $(i).css("display") !== "none";
  	};

  	function showMessage(text) { 
  		text = text || "The path of the righteous man is beset on all sides by iniquities of the selfish and the tyranny of evil men.";
  		var $template = $(templateId);

  		$template.tmpl({ text: text }).appendTo('.tickets');

  		var $tickets = $.grep($('.tickets .ticket'), (el) => {
  			return $(el).css("display") !== "none";
  		});

  		if ($tickets.length > 3) {
  			for (var i = 0; i < $tickets.length - 3; i++) {
	  			var $ft = $($tickets[i]);
	  			$ft.animate({ height: 0 }, 500, () => {
					$ft.hide();
	  			});
	  		}
  		}
	}

	return {
		showMessage: showMessage
	};
})();
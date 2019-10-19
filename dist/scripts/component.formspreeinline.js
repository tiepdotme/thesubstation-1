
// https://gist.github.com/jannecederberg/785c1dc78e882b6bf85a5e77b31b0678
// https://www.raymondcamden.com/2016/05/24/building-an-ajax-based-form-for-formspree
// If using ladda-button, requires a <button> in the markup, etc.
// --------------------------------------------------------------------------

var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $( 'input[type="submit"]', $contactForm );
	var defaultSubmitText = $submit.val();

	$.ajax({
		url: 'https://formspree.io/events@readmanga.tv',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			// $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
            console.log('before sending');
			$submit.val('Sending…');
		},
		success: function(data) {
			// $contactForm.append('<div class="alert alert--success">Message sent!</div>');
            console.log('success');
            $submit.attr('disabled', true).val('Sent!');
			setTimeout(function() {
				//$('.alert--success').remove();
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 7500);
		},
		error: function(err) {
			//$contactForm.find('.alert--loading').hide();
			$submit.val('Oh No!');
            $submit.parent().prepend('<span class="c-form-alert">Error yo! Best try again</span>');
			setTimeout(function() {
				//$('.alert--error').remove();
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 7500);
		}
	});
});

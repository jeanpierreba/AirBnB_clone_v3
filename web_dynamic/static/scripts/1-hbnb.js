$(document).ready(init);

function init () {
  const amenity_ids = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      amenity_ids[$(this).data('id')] = $(this).data('name');
    } else if (!$(this).is(':checked')) {
      delete amenity_ids[$(this).data('id')];
    }
    if (Object.values(amenity_ids).length === 0) {
      $('.amenities h4').html('&nbsp');
    } else {
      $('.amenities h4').text(Object.keys(amenity_ids).join(', '));
    }
  });
}

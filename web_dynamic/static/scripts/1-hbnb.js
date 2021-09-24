$(document).ready(init);

const amenity_ids = {};
$('input[type=checkbox]').change(function () {
  if ($(this).prop('checked')) {
    amenity_ids[$(this).attr('data-id')] = $(this).attr('data-name');
  } else if (!$(this).prop('checked')) {
    delete amenity_ids[$(this).attr('data-id')];
  }
  $('.amenities h4').text(Object.keys(amenity_ids).join(', '));
});

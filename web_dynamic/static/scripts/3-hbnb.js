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

apiStatus();
function apiStatus () {
  $.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
}

$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  contentType: 'application/json',
  data: JSON.stringify({})
}).done(function (data) {
  for (const place of data) {
    const template = `<article>
              <div class="title">
                <h2>${place.name}</2>
                <div class="price_by_night">
              $${place.price_by_night}
                </div>
              </div>
              <div class="information">
                <div class="max_guest">
              <i class="fa fa-users fa-3x" aria-hidden="true"></i>
              <br/>
              ${place.max_guest} Guests
                </div>
                <div class="number_rooms">
              <i class="fa fa-users fa-3x" aria-hidden="true"></i>
              <br/>
              ${place.number_rooms} Bedrooms
                </div>
                <div class="number_bathrooms">
              <i class="fa fa-users fa-3x" aria-hidden="true"></i>
              <br/>
              ${place.number_bathrooms} Bathroom
                </div>
              </div>
              <div class="description">
                ${place.description}
              </div>
            </article>`;
    $('section.places').append(template);
  }
});

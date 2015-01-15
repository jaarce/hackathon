$(document).ready(function() {
    
    var renderData = function(data) {
        console.log(data);

        $('.profile-image').attr('src', getFBProfilePicture(data.id));
        $('.fullname').text(data.first_name + ' ' + data.last_name);
        $('.gender').text(data.gender);
        $('.fb-id').text(data.id);
        $('.fb-link').text(data.link);
        $('.fb-username').text(data.username);
    };

    var getFBProfilePicture = function(id) {
        return 'https://graph.facebook.com/' + id + '/picture?width=170&height=170';
    }

    var getCoverPhoto = function(id) {
        return 'http://graph.facebook.com/' + id + '?fields=cover';
    }


    $.ajax({
        url: 'https://graph.facebook.com/jaarce1',
        type: 'GET',
    })
    .success(function(data) {
        renderData(data);
    });
});

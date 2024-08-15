// Client facing scripts here
$(() => {
  $('#fetch-users').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
    .done((response) => {
      const $usersList = $('#users');
      $usersList.empty();
      console.log(response.users);
      for(const user in response.users) {
        $(`<li class="user">`).text(user.username).appendTo($usersList);
      }
    });
  });
});

$(function () {
  let inp_name = $('#name');
  let inp_age = $('#age');
  let inp_city = $('#city');
  let btn_submit = $('#submit');
  let tbl_people = $('#people');

  function refreshPeopleTable(people) {
    tbl_people.empty();
    tbl_people.append(
      `<tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>`
    );
    for (person of people) {
      tbl_people.append(
        `<tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
      </tr>`
      );
    }
  }

  $.get('/api/people', function (data) {
    refreshPeopleTable(data);
  });

  btn_submit.click(function () {
    $.post(
      '/api/people/',
      {
        name: inp_name.val(),
        age: inp_age.val(),
        city: inp_city.val(),
      },
      function (data) {
        refreshPeopleTable(data);
      }
    );
  });
});

// var booksArray = [];

// $.ajax({
//     method: 'GET',
//     url: 'https://ancient-springs-63198.herokuapp.com/api/books',
//     success: function(response) {
//         booksArray = response.data;
//         buildTable(booksArray);
//         console.log(booksArray);
//     }
// })

// function buildTable(data) {
//     var table = document.getElementById("bookTable");
//     for (var i = 0; i < data.length; i++) {
//         var row = `<tr>
//         <td>${data[i].id}</td>
//         <td>${data[i].title}</td>
//         <td>${data[i].author}</td>
//         <td>${data[i].isbn}</td>
//         <td>${data[i].publisher}</td>
//         <td>${data[i].publication_year}</td>
        
//         </tr>`;
//         table.innerHTML += row;
//     }
// }

// {/* <td>${data[i].last_modified_date}</td>
//         <td>${data[i].created_date}</td> */}

// $.ajax({
//     url: '/',
//     complete: function(data) {
//       console.log(data);
//     }
//   });
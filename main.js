// let content = [
//     {
//         id: 1,
//         title: "Football Match",
//         des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et sunt, dolore beatae magni corrupti, atque ipsam dignissimos aperiam porro ea libero deserunt odit reiciendis consequuntur, assumenda illo qui blanditiis.",
//         video: "https://www.youtube.com/embed/ZiBNQJLtC8A?si=VnCcPwNva1S9U8H2"
//     },
//     {
//         id: 1,
//         title: "Football Match",
//         des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et sunt, dolore beatae magni corrupti, atque ipsam dignissimos aperiam porro ea libero deserunt odit reiciendis consequuntur, assumenda illo qui blanditiis.",
//         video: "https://www.youtube.com/embed/ZiBNQJLtC8A?si=VnCcPwNva1S9U8H2"
//     },
//     {
//         id: 1,
//         title: "Football Match",
//         des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et sunt, dolore beatae magni corrupti, atque ipsam dignissimos aperiam porro ea libero deserunt odit reiciendis consequuntur, assumenda illo qui blanditiis.",
//         video: "https://www.youtube.com/embed/ZiBNQJLtC8A?si=VnCcPwNva1S9U8H2"
//     },
// ]
// let getdata = document.getElementById("content-blog");

// getdata.innerHTML = content.map(item => {
//     return `<div class="col">
//                 <div class="card" style="width: 18rem;">
//                     <iframe width="560" height="315" src=${item.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                     <div class="card-body">
//                         <h5 class="card-title">${item.title}</h5>
//                         <p class="card-text">${item.des}</p>
//                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </div>
//             </div>`;
// }

// )



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         let element = document.getElementById('content-blog');
//         element.innerHTML = data.map(item => {
//             return `
//             <h2>${item.name}</h2>
//             <p>${item.email}</p>`;
//         });
//     });

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let a = document.getElementById('content-blog');

        a.innerHTML =
            `
        <div class="col border">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                    <th scope="col">Button</th>
                </tr>
            </thead>

            <tbody>
            ${data.map((item, index) => {
                return `
                <tr>
                 <th scope="row">${index+1}</th>
                <td>${item.name}</td>
                <td>${item.email}</td>
                 <td>${item.website}</td>
                 <td>
                <button class="btn btn-primary">Exit</button>
                <button class="btn btn-danger">Delete</button>
            </td>
                 </tr>`;


            })}
            </tbody>
        </table>
        </div>
        `;join('')
    });

const postContainer = document.getElementById("postContainer");
let titleInput = document.getElementById("titleInput");
let bodyInput = document.getElementById("body");
const postForm = document.getElementById('postForm')
const saveBtn = document.getElementById("save")


// let response = fetch("https://jsonplaceholder.typicode.com")
// console.log(response)//This we return a promise

async function fetchPost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(response)//This will also return a promise, but we don't want promise we want to get data to we need the await keyword. Await will is going to wait for the promise to be resolved(it can be rejcted ot fulfiled)
    let datas = await response.json();
    // console.log(typeof(datas)) Output: Object
    const shortDatas = datas.slice(0, 5);
    // console.log(typeof(shortDatas)) Output: Object
    console.log(datas.slice(0, 5));
    shortDatas.forEach((data) => {
        // postContainer.innerHTML +=  `
        // <div class="post">
        //     <h3>${data.title}</h3>
        //     <p>${data.body}</p>
        // </div>
        // `

        /* Another method to display fetched data - using forEach */
        const postContent = document.createElement("div");
        postContent.classList.add("post");
        postContent.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        `
        postContainer.appendChild(postContent);
    })
};
fetchPost();

postForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    // console.log(titleInput.value)
    // console.log(bodyInput.value)
    try {
        saveBtn.textContent= "saving..." 
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: titleInput.value,
                body: bodyInput.value,
                userId: 1,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })

        if(!response.ok) throw new Error("Fail to create post")
        const newPost = await response.json();
        saveBtn.textContent = "save post";
        titleInput.value = "";
        bodyInput.value = "";
        /* I USE A TOASTIFY LIBRARY */
        Toastify({
            text: "Post has been created sucessfully",
            duration: 3000,
            // // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#0a0a0a",
                borderRadius: "8px"
            },
            onClick: function(){} // Callback after click
        }).showToast();

    } catch (error) {
        console.log(error.message)
        Toastify({
            text: error.message,
            duration: 3000,
            // // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                color: "red",
                background: "#0a0a0a",
                borderRadius: "8px"
            },
            onClick: function(){} // Callback after click
        }).showToast();
        saveBtn.textContent = "save post";
        titleInput.value = "";
        bodyInput.value = "";
    }
    
})

// Get references to the modal and button
// let modal = document.getElementById("demo1-h");
// let btn = document.getElementById("demo1-h-btn");
// let closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal(modal) {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal(modal) {
  modal.style.display = "none";
}

for(let i = 1; i <= 11; i++){

    console.log("inside for")

    let modal_h = document.getElementById("demo" + i.toString() + "-h");
    let modal_l = document.getElementById("demo" + i.toString() + "-l");
    
    let btn_h = document.getElementById("demo" + i.toString() + "-h-btn");
    let btn_l = document.getElementById("demo" + i.toString() + "-l-btn");

    let close_h = document.getElementById("close" + i.toString() + "-h");
    let close_l = document.getElementById("close" + i.toString() + "-l");

    btn_h.addEventListener("click", (event) => {
        openModal(modal_h);
    });

    btn_l.addEventListener("click", (event) => {
        openModal(modal_l);
    });

    close_h.addEventListener("click", (event) => {
        closeModal(modal_h);
    })

    close_l.addEventListener("click", (event) => {
        closeModal(modal_l);
    })
    

    // Event listener for clicking outside the modal to close it
    window.addEventListener("click", function (event) {
        if (event.target === modal_h) {
        closeModal(modal_h);
        }

        if (event.target === modal_l) {
            closeModal(modal_l);
            }
    });

}



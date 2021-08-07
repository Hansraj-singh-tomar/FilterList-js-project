window.addEventListener("load", function() {
    let filter = document.getElementById("searchBox");

    filter.addEventListener("keyup", function() {
        var search = this.value.toLowerCase();
        // console.log(search);
        var all = document.querySelectorAll("#list li");
        // console.log(all);
        for (let i of all) {
            let item = i.innerHTML.toLowerCase();
            // console.log(item);
            // let ans = item.indexOf(search);
            // console.log(ans); // jis jis ka -1 aa rha hai unhe css me display:none add kar diya jata hai
            if(item.indexOf(search) == -1){
                i.classList.add("hide");
            }else{
                i.classList.remove("hide");
            }
        }
    });
});  
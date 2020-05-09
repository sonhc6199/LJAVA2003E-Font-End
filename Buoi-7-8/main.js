function btn_getIf() {
    const obj= document.querySelector(".article-list.listing-layout")
    let getImg = new Array(obj.children.length);
    let getText = new Array(obj.children.length);
    let getLink = new Array(obj.children.length);
    for(let i=0; i < obj.children.length ; i++) {
        getImg = obj.children[i].children[0].children[0].children[0].getAttribute("src");
        getText = obj.children[i].children[1].children[0].children[0].innerHTML;
        getLink = obj.children[i].children[1].children[0].children[0].getAttribute("href");
        console.log("Content col "+(i+1)+" : ")
        console.log("Photo : \""+getImg+"\"")
        console.log("Text : \" "+getText+ " \"")
        console.log("Link : \""+getLink+ "\"")
    }
}
function btn_getBook() {
    const obj= document.querySelector(".box-category#sach-hay")
    let getImg = new Array(obj.children[1].children.length);
    let getText = new Array(obj.children[1].children.length);
    let getLink = new Array(obj.children[1].children.length);
    for(let i=0; i < obj.children[1].children.length ; i++) {
        getImg = obj.children[1].children[i].children[0].children[0].children[0].getAttribute("src");
        getText = obj.children[1].children[i].children[1].children[0].children[0].innerHTML;
        getLink = obj.children[1].children[i].children[1].children[0].children[0].getAttribute("href");
        console.log("Content col "+(i+1)+" : ")
        console.log("Photo : \""+getImg+"\"")
        console.log("Text : \" "+getText+ " \"")
        console.log("Link : \""+getLink+ "\"")
    }
}
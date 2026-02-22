let emp = {
    e_id : 1,
    e_name : "sravanth",
    email : "srav.gmail.com"
}
let details = {
    e_loc : "tadipatri",
    email : "sravanth.gmail.com"
}
let out = {...emp , ...details}
console.log(out)
var key = "edd4b07feefdc7857017edcc48535233"
var baseURl = "https://api.edamam.com/api/nutrition-data"
var appId = "275bff87"

fetch (`${baseURl}?app_id=${appId}&app_key=${key}&ingr=chocolate&nutrition-type=logging`)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
})
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCStPJTieDctYuN3WmJWDWLhLJtU6xL6s5LA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqG82xbXoENUlnjOjJNSkZ9zSY8bdVJQRFJA&usqp=CAU" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtrvhUu2exZF6GJ_WATM_7mEuW74eQgfzSA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROo2n7jtmeE-xtYr_YDWSabdhO4qR-E1HP2g&usqp=CAU"];
var names = ["Family Book","Pauline Tan", "Brian Tan", "Amelia Tan", "Aveline Tan"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i >= numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i] ;
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}


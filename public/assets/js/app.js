console.log("hello");

$(document).ready(function(){

    $(".devour_button").on("click",function(event){
      event.preventDefault();
      const BURGER_ID = $(this).data('burger_id');
      var devourRoute = `/api/burgers/update/${BURGER_ID}`;

      // Send the put request.
      $.ajax(devourRoute, {
        type: "PUT"
      }).then(
        function(response) {
          console.log(response);
          console.log("created new burger");
          // Reload the page to get the updated list
          window.location.reload(); //**********************
        }
      );
    });

    $(".submit-burger").on("submit",function(event){

        event.preventDefault();

        var newOrder = {
          burger_name: $("#order-burger").val().trim(),
          devoured: 0
        };
        console.log(newOrder);
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newOrder
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload(); //**********************
          }
        );
    })

    // Delete the devoured Burgers
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burgers/" + burger_id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted burger", burger_id);
    //       // Reload the page to get the updated list
    //       location.reload(); *********************
    //     }
    //   );
    // });
})    


// A $( document ).ready() block.
$(document).ready(function() {
  console.log("ready!");

  // searchBtn start
  $("#searchBtn").on("click", function (){
    
    $("#id2").empty();
    $("#token").empty();
   

    let search = $("#idSearch").val()

    const balance = {
      async: true,
      crossDomain: true,
      url: "https://api.nurepublic.com/tokens/balance/" + search + "",
      method: "GET",
      headers: {
        Authorization: "Basic YWRtaW46dGVzdDEyMw=="
      }
    };

    $.ajax(balance).done(function(response2) {
      // console.log(response2);
      $("#id2").append("<p>" + response2.id + "</p>");
      $("#token").append("<p>" + response2.tokens + "</p>");
    });

  }); // searchBtn end

    //searchBtn2 start
  $("#searchBtn2").on("click", function (){
    
    $("#id").empty();
    $("#amount").empty();
    $("#notes").empty();
    $("#reason").empty();
    $("#to").empty();
    $("#type").empty();

    let search = $("#idSearch2").val()

    const trans = {
      async: true,
      crossDomain: true,
      url: "https://api.nurepublic.com/tokens/transactions/" + search,
      method: "GET",
      headers: {
        Authorization: "Basic YWRtaW46dGVzdDEyMw=="
      }
    };

    $.ajax(trans).done(function(response) {
      console.log(response);
  
      response.forEach(function(element) {
        // console.log(element);
        $("#id").append("<p>" + element.id + "</p>");
        $("#amount").append("<p>" + "$" + element.amount + "</p>");
        $("#notes").append("<p>" + element.notes + "</p>");
        $("#reason").append("<p>" + element.reason + "</p>");
        $("#to").append("<p>" + element.to + "</p>");
        $("#type").append("<p>" + element.type + "</p>");
      });
    });

  }); // searchBtn2 closed
  
  

  // Data on page load
  const trans = {
    async: true,
    crossDomain: true,
    url: "https://api.nurepublic.com/tokens/transactions/33677",
    method: "GET",
    headers: {
      Authorization: "Basic YWRtaW46dGVzdDEyMw=="
    }
  };
  const balance = {
    async: true,
    crossDomain: true,
    url: "https://api.nurepublic.com/tokens/balance/33677",
    method: "GET",
    headers: {
      Authorization: "Basic YWRtaW46dGVzdDEyMw=="
    }
  };

  $.ajax(trans).done(function(response) {
    // console.log(response);

    response.forEach(function(element) {
      // console.log(element);
      $("#id").append("<p>" + element.id + "</p>");
      $("#amount").append("<p>" + "$" + element.amount + "</p>");
      $("#notes").append("<p>" + element.notes + "</p>");
      $("#reason").append("<p>" + element.reason + "</p>");
      $("#to").append("<p>" + element.to + "</p>");
      $("#type").append("<p>" + element.type + "</p>");
    });
  });

  $.ajax(balance).done(function(response2) {
    // console.log(response2);
    $("#id2").append("<p>" + response2.id + "</p>");
    $("#token").append("<p>" + response2.tokens + "</p>");
  });


}); //document ready closed

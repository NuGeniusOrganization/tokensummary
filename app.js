// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");

  // Function to captilize the first letter of each word
  function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

// console.log(capital_letter("the world goes on"));

  // searchBtn start
  $("#searchBtn").on("click", function () {

    $("#id2").empty();
    $("#token").empty();
    $("#time").empty();

    let search = $("#idSearch").val()
    
    if(search === "") {
      $(".message").append("<p style='color: red; display: inline;'>Please enter an ID</p>")
    
    } else {
    const balance = {
      async: true,
      crossDomain: true,
      url: "https://api.nurepublic.com/tokens/balance/" + search + "",
      method: "GET",
      headers: {
        Authorization: "Basic YWRtaW46dGVzdDEyMw=="
      }
    };

    $.ajax(balance).done(function (response2) {
      // console.log(response2);
      // $("#id2").append("<p>" + response2.id + "</p>");
      
      $("#token").append("<h3>" + response2.tokens + "</h3>");

      // TIME
      // let fullDate = new Date()
      // console.log(fullDate);
      // //Thu May 19 2011 17:25:38 GMT+1000 {}

      // //convert month to 2 digits
      // var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);

      // var currentDate = twoDigitMonth + "/" + fullDate.getDate() + "/" + fullDate.getFullYear();
      // console.log(currentDate);
      // $("#time").append("<h4>" + "as of : " + currentDate + "</h4>");
      // //19/05/2011


    });

  } // close else statement
}); // searchBtn end

  //searchBtn2 start
  $("#searchBtn2").on("click", function () {

    $("#id").empty();
    $("#amount").empty();
    $("#notes").empty();
    $("#reason").empty();
    $("#to").empty();
    $("#type").empty();
    $("#time2").empty();
    $("#date").empty();

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

    $.ajax(trans).done(function (response) {
      console.log(response);

      response.forEach(function (element) {
        // console.log(element);
        $("#id").append("<p>" + element.id + "</p>");
        $("#amount").append("<p>" + element.amount + "</p>");
        $("#notes").append("<p>" + element.notes + "</p>");
        $("#reason").append("<p>" + element.reason + "</p>");
        $("#to").append("<p>" + element.to + "</p>");
        $("#type").append("<p>" + capital_letter(element.type) + "</p>");
        $("#date").append("<p>" + element.date_time + "</p>")
        
      })
      console.log(typeOf(element.type));

      console.log(element.date_time);

      let fullDate = new Date()
    console.log(fullDate);
    $("#time2").append("<h6 class='mt-2'>" + "as of : " + fullDate + "</h6>");
    //   let fullDate = new Date()
    // console.log(fullDate);
    // //Thu May 19 2011 17:25:38 GMT+1000 {}

    // //convert month to 2 digits
    // let twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);

    // let currentDate = twoDigitMonth + "/" + fullDate.getDate() + "/" + fullDate.getFullYear();
    // console.log(currentDate);
    // $("#time2").append("<h4>" + "as of : " + currentDate + "</h4>");
    // //05/19/2011
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

  $.ajax(balance).done(function (response2) {
    // console.log(response2);
   
    
    $("#id2").append("<p>" + response2.id + "</p>");
    $("#token").append("<p>" + response2.tokens.toLocaleString() + "</p>");
    // let fullDate = new Date()
    // console.log(fullDate);
    // //Thu May 19 2011 17:25:38 GMT+1000 {}

    // //convert month to 2 digits
    // var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);

    // var currentDate = twoDigitMonth + "/" + fullDate.getDate() + "/" + fullDate.getFullYear();
    // console.log(currentDate);
    // $("#time").append("<h4>" + "as of : " + currentDate + "</h4>");
    //19/05/2011

  }); //AJAX closed


  $.ajax(trans).done(function (response) {
    // console.log(response);

    response.forEach(function (element) {
      console.log(element);
      $("#id").append("<p>" + element.id + "</p>");
      $("#amount").append("<p>" + element.amount.toLocaleString() + "</p>");
      $("#notes").append("<p>" + element.notes + "</p>");
      $("#reason").append("<p>" + element.reason + "</p>");
      $("#to").append("<p>" + element.to + "</p>");
      $("#type").append("<p>" + capital_letter(element.type) + "</p>");
      $("#date").append("<p>" + element.date_time + "</p>")

    })
    
    let fullDate = new Date()
    console.log(fullDate);
    $("#time2").append("<h6 class='mt-2'>" + "as of : " + fullDate + "</h6>");

    //Thu May 19 2011 17:25:38 GMT+1000 {}

    //convert month to 2 digits
    // let twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);
    // let currentDate = twoDigitMonth + "/" + fullDate.getDate() + "/" + fullDate.getFullYear();
    // console.log(currentDate);
    // $("#time2").append("<h4>" + "as of : " + currentDate + "</h4>");
    //05/19/2011
  });

}); //document ready closed
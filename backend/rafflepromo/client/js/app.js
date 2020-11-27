$('document').ready(function() {
    getNumberOfParticipants()
    $('#uniqueid').hide();
  });

  $('#roll').on('click', function(e) {
    $(this).hide();
    e.preventDefault();
    getWinnerName();
  });

  $('#rollAgain').on('click',function(e) {
    resetButton();
  })
  
  function randomName(result) {
    var rand = Math.floor(Math.random() * result.data.length);
    var name = result.data[rand].rafflename;
    var unique = result.data[rand]._id;
    $('#rafflenumber').text(name);
    $('#uniqueid').text(unique);
  }
  
  function setDeceleratingTimeout(callback, factor, times) {
    var internalCallback = function(t, counter) {
      return function() {
        if (--t > 0) {
          window.setTimeout( internalCallback, ++counter * factor );
          callback();
        }
      }
    }(times, 0);
  
    window.setTimeout(internalCallback, factor);
  }

  function getWinnerName(){
    hiddenItems();
    axios.get('http://localhost:5000/get-contestant')
      .then(result=> {
        setDeceleratingTimeout(function() { randomName(result) }, 10, 40);
        setTimeout(function() {
          reverseHidden();
          declareWinner()
        }, 8000);
      })
      .catch(err=>console.log(err));
  }

  function hiddenItems(){
    $('#winner').hide();
    $('#rafflenumber').show();
  }

  function reverseHidden(){
    $('#winner').show();
    $('#rafflenumber').hide();
  }

  function resetButton(){
    $('#roll').show();
    $('#winner').hide();
    $('#rafflenumber').hide();
  }

  function getNumberOfParticipants(){
    axios.get('http://localhost:5000/get-contestant')
      .then(result => {
        $('#numOfRaffles').text(result.data.length);
      })
      .catch(err=>console.log(err));
  }

  function declareWinner(){
    const getid = $('#uniqueid').text()
    axios.get(`http://localhost:5000/get-contestant/${getid}`)
      .then(contestant=>{
        console.log(contestant);
        $('#winner').html('<span>And the winner is...</span><br>' + contestant.data.rafflename + '<br>'+contestant.data.name +'<br>'+contestant.data.contactnum);
        axios.post(`http://localhost:5000/api/send-email`,{"emailTo":contestant.data.email,"subjectTitle":"SITE Raffle Promo","subjectContent":contestant.data.rafflename})
          .then(info=>{
            console.log(info);
          })
          .catch(err=>console.log(err));
      })
  }

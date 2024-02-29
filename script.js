function validate() {
    var date = document.getElementById('visitDate').value;
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(date)) {
      alert('Invalid date format. Please enter in YYYY-MM-DD.');
      return false;
    } else {
      var resultDiv = document.getElementById('result');
      var name = document.getElementById('userName').value;
      var address = document.getElementById('userAddr').value;
      var state = document.getElementById('userState').value;
      var phone = document.getElementById('userPhone').value;
      var email = document.getElementById('userEmail').value;
      var contactMethod = '';
      
      if (document.getElementById('contactEmail').checked) {
        contactMethod += 'Email';
      } else if (document.getElementById('contactPhone').checked) {
        contactMethod += 'Phone';
      } else if (document.getElementById('contactPostal').checked) {
        contactMethod += 'Postal';
      }
      
      var incident = document.getElementById('userIncident').value;
      
      resultDiv.innerHTML = '<strong>' + name + '</strong><br/>' +
                             address + '<br/>' +
                             state + '<br/>' +
                             phone + '<br/>' +
                             email + '<br/>' +
                             contactMethod + '<br/>' +
                             incident;
      return false;
    }
  }
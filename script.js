// Custom JavaScript for Pet Boarding Management

document.addEventListener('DOMContentLoaded', function () {
    // Example JavaScript to handle form validation
    var forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add('was-validated');
        }, false);
      });
    
    // Razorpay Payment Integration
    var options = {
      "key": "YOUR_RAZORPAY_KEY_ID", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Pet Boarding",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "handler": function (response){
        alert(response.razorpay_payment_id);
        // You can handle the response here to verify the payment and update your database
      },
      "prefill": {
        "name": "Test User",
        "email": "testuser@example.com",
        "contact": "9999999999"
      },
      "notes": {
        "address": "Test Address"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    
    var rzp1 = new Razorpay(options);
    
    document.getElementById('rzp-button1').onclick = function(e){
      rzp1.open();
      e.preventDefault();
    }
  });
  

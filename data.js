document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  const countEl = document.getElementById("cart-count");

  if (countEl) {
    countEl.textContent = cart.length;
  }

  document.querySelectorAll(".add-to-cart").forEach(button => {
    const productName = button.dataset.name;

    if (cart.includes(productName)) {
      button.innerHTML = "✔ Added";
      button.classList.replace("btn-dark", "btn-success");
      button.disabled = true;
    }

    button.addEventListener("click", () => {
      if (cart.includes(productName)) {
        alert("⚠️ This Product Already Added In Cart!");
        return;
      }

      cart.push(productName);
      
      sessionStorage.setItem("cart", JSON.stringify(cart));

      if (countEl) {
        countEl.textContent = cart.length;
      }

      alert("🛒 '" + productName + "' Added ✅");

      button.innerHTML = "✔ Added";
      button.classList.replace("btn-dark", "btn-success");
      button.disabled = true;
    });
  });
});

/* FORM */
$(document).ready(function() {
    $('.simple-form').submit(function(event) {
        event.preventDefault(); 

        
        let name = $('input[placeholder="Enter your name"]').val();
        let email = $('input[type="email"]').val();
        let message = $('textarea').val();

        
        if (name == "" || email == "" || message == "") {
            alert("Please fill in all the required fields before submitting!");
        } else {
           
            alert("Thank you, " + name + "Thanks for reaching out! Our team will contact you soon.");
            
            
            $('.simple-form')[0].reset();
        }
    });
});



 function runCompare(id, val) {
        const data = val.split('|');
        document.getElementById('res-name' + id).innerText = data[0] || '-';
        document.getElementById('res-brand' + id).innerText = data[1] || '-';
        document.getElementById('res-price' + id).innerText = data[2] || '-';
        document.getElementById('res-sensor' + id).innerText = data[3] || '-';
        document.getElementById('res-video' + id).innerText = data[4] || '-';
    }


    
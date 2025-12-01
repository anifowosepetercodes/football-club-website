// gallery
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load


  document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".gallery-item");
  const loadMoreBtn = document.getElementById("loadMore");

  let current = 0;
  const itemsToShow = 21;

  function showItems() {
    for (let i = current; i < current + itemsToShow && i < items.length; i++) {
      items[i].style.display = "block";
    }
    current += itemsToShow;

    if (current >= items.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", showItems);

  // Show first set on load
  showItems();
});

// newsletter

  function validateEmailInput() {
    const emailInput = document.getElementById("ema");
    const messageSpan = document.getElementById("ema-error");
    const email = emailInput.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset previous styles and message
    messageSpan.textContent = "";
    messageSpan.classList.remove("error", "success");

    if (email === "") {
      messageSpan.textContent = " input your email.";
      messageSpan.classList.add("error");
      return;
    }

    if (!pattern.test(email)) {
      messageSpan.textContent = "invalid email address.";
      messageSpan.classList.add("error");
      return;
    }

    // Show success message
    messageSpan.textContent = "✓ Thank you for subscribing!";
    messageSpan.classList.add("success");

    // Clear input
    emailInput.value = "";

    // Clear success message after 3 seconds
    setTimeout(() => {
      messageSpan.textContent = "";
      messageSpan.classList.remove("success");
    }, 2000);
  }



        //
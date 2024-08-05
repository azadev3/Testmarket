//top category area
document.addEventListener("DOMContentLoaded", function () {
  const firstRadio = document.querySelector('.n_category-head input[type="radio"]');
  if (firstRadio) {
    firstRadio.checked = true;
  }

  const categories = document.getElementById("categories");
  if (categories) {
    categories.classList.add("open");

    const icon = document.querySelector(".n_crop-icon img");
    if (icon) {
      icon.style.transform = "rotate(180deg)";
    }
  }
  document.querySelectorAll(".n_category-head").forEach((categoryHead) => {
    categoryHead.addEventListener("click", function () {
      const radio = this.querySelector('input[type="radio"]');
      if (radio) {
        if (!radio.checked) {
          radio.checked = true;
        }
      }
      const allRadios = document.querySelectorAll('.n_category-head input[type="radio"]');
      allRadios.forEach((r) => {
        if (r !== radio) {
          r.checked = false;
        }
      });
    });
  });
});

function toggleAccordion() {
  const categories = document.getElementById("categories");
  if (categories) {
    categories.classList.toggle("open");

    const icon = document.querySelector(".n_crop-icon img");
    if (categories.classList.contains("open")) {
      icon.style.transform = "rotate(180deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  }
}

//top category area (mobile)
document.addEventListener("DOMContentLoaded", function () {
  const firstRadio = document.querySelector('.n_category-head input[type="radio"]');
  if (firstRadio) {
    firstRadio.checked = true;
  }

  const categories = document.getElementById("categoriesmobile");
  if (categories) {
    categories.classList.add("open");

    const icon = document.querySelector(".n_crop-icon img");
    if (icon) {
      icon.style.transform = "rotate(180deg)";
    }
  }
  document.querySelectorAll(".n_category-head").forEach((categoryHead) => {
    categoryHead.addEventListener("click", function () {
      const radio = this.querySelector('input[type="radio"]');
      if (radio) {
        if (!radio.checked) {
          radio.checked = true;
        }
      }
      const allRadios = document.querySelectorAll('.n_category-head input[type="radio"]');
      allRadios.forEach((r) => {
        if (r !== radio) {
          r.checked = false;
        }
      });
    });
  });
});

function toggleAccordionMobile() {
  const categories = document.getElementById("categoriesmobile");
  if (categories) {
    categories.classList.toggle("open");

    const icon = document.querySelector(".n_crop-icon img");
    if (categories.classList.contains("open")) {
      icon.style.transform = "rotate(180deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  }
}

//marketplace category area
function toggleMarketplace() {
  const itemsContainer = document.getElementById("marketplace-items");
  const toggleIcon = document.querySelector(".n_toggle-icon img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_marketplace-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("marketplace-items");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_marketplace-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

//marketplace category area (mobile)
function toggleMarketplaceMobile() {
  const itemsContainer = document.getElementById("marketplace-itemsmobile");
  const toggleIcon = document.querySelector(".n_toggle-icon img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_marketplace-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("marketplace-itemsmobile");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_marketplace-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

//discounts category area
function toggleDiscounts() {
  const itemsContainer = document.getElementById("discounts-items");
  const toggleIcon = document.querySelector(".n_toggle-icon-discounts img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_discounts-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("discounts-items");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_discounts-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

//discounts category area (mobile)
function toggleDiscountsMobile() {
  const itemsContainer = document.getElementById("discounts-itemsmobile");
  const toggleIcon = document.querySelector(".n_toggle-icon-discounts img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_discounts-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("discounts-itemsmobile");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_discounts-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

//country category area
function toggleCountry() {
  const itemsContainer = document.getElementById("country-items");
  const toggleIcon = document.querySelector(".n_toggle-icon-country img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_country-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("country-items");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_country-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

//country category area (mobile)
function toggleCountryMobile() {
  const itemsContainer = document.getElementById("country-itemsmobile");
  const toggleIcon = document.querySelector(".n_toggle-icon-country img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_country-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("country-itemsmobile");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_country-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

//price range category area
function togglePriceRange() {
  const itemsContainer = document.getElementById("priceRange-items");
  const toggleIcon = document.querySelector(".n_toggle-icon-priceRange img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_priceRange-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("priceRange-items");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_priceRange-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

//price range category area (mobile)
function togglePriceRangeMobile() {
  const itemsContainer = document.getElementById("priceRange-itemsmobile");
  const toggleIcon = document.querySelector(".n_toggle-icon-priceRange img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_priceRange-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("priceRange-itemsmobile");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_priceRange-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

//ratings category area
function toggleRatings() {
  const itemsContainer = document.getElementById("ratings-items");
  const toggleIcon = document.querySelector(".n_toggle-icon-ratings img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_ratings-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("ratings-items");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_ratings-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

//ratings category area
function toggleRatingsMobile() {
  const itemsContainer = document.getElementById("ratings-itemsmobile");
  const toggleIcon = document.querySelector(".n_toggle-icon-ratings img");
  if (itemsContainer.classList.contains("open")) {
    itemsContainer.classList.remove("open");
    toggleIcon.style.transform = "rotate(0deg)";
  } else {
    itemsContainer.classList.add("open");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLabel() {
    document.querySelectorAll(".n_ratings-item").forEach(function (label) {
      const radio = label.querySelector('input[type="radio"]');
      const itemLabel = label.querySelector(".n_item-label");
      const itemsContainer = document.getElementById("ratings-itemsmobile");

      itemsContainer.classList.add("open");
      if (radio && radio.checked) {
        itemLabel.classList.add("activelabel");
      } else {
        itemLabel.classList.remove("activelabel");
      }
    });
  }

  // Initialize label state on page load
  updateActiveLabel();

  document.querySelectorAll(".n_ratings-item").forEach(function (label) {
    label.addEventListener("click", function () {
      updateActiveLabel();
    });
  });
});

// CAROUSEL HOME PAGE TOP PRODUCT
$(document).ready(function () {
  $(".owl-carousel-top-product").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 7,
      },
      1400: {
        items: 8,
      },
    },
  });
});

// CAROUSEL HOME PAGE VIEWED DEALS
$(document).ready(function () {
  $(".owl-carousel-viewed-deals").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
      1400: {
        items: 6,
      },
    },
  });
});

// custom select
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownMenuButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdown = document.querySelector(".custom-dropdown");

  dropdownButton.addEventListener("click", function () {
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    }
  });

  dropdownMenu.querySelectorAll("a").forEach(function (option) {
    option.addEventListener("click", function () {
      dropdownButton.innerHTML = this.innerHTML + ' <span class="arrow"></span>';
      dropdown.classList.remove("active");
    });
  });
});

// MOBILE TOGGLE MENU (FILTERS)
document.querySelector(".filter-mobile").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
  document.querySelector(".sidebar-overlay").classList.toggle("open");
});

document.querySelector(".sidebar-overlay").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.remove("open");
  document.querySelector(".sidebar-overlay").classList.remove("open");
});

document.getElementById("close_filter_icon").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.remove("open");
  document.querySelector(".sidebar-overlay").classList.remove("open");
});


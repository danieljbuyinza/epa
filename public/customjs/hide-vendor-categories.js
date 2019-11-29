const theVendors = document.getElementById("the-vendors");
theVendors.style.display = "none";

const venues = document.getElementById("venues");
venues.addEventListener("click", hideVendorCategories);

function hideVendorCategories(event) {
    const vendorCategories = document.getElementById("vendor-categories");
    const pageHeading = document.getElementById("page-heading");
    vendorCategories.style.display = "none";
    pageHeading.style.display = "none";
    theVendors.style.display = "block";
}
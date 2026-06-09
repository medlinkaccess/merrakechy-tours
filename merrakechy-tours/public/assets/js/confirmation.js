// assets/js/confirmation.js

document.addEventListener('DOMContentLoaded', function() {
    // Get booking info from localStorage
    const bookingInfoJson = localStorage.getItem('bookingInfo');
    
    if (bookingInfoJson) {
        try {
            const bookingInfo = JSON.parse(bookingInfoJson);
            displayBookingConfirmation(bookingInfo);
            
            // Recommend related programs
            recommendPrograms(bookingInfo.category, bookingInfo.programId);
            
            // Clear localStorage after displaying
            // localStorage.removeItem('bookingInfo');
        } catch (error) {
            console.error('Error parsing booking info:', error);
            displayErrorMessage();
        }
    } else {
        displayErrorMessage();
    }

    // Function to display booking confirmation
    // Function to display booking confirmation
   function displayBookingConfirmation(booking) {
       document.getElementById('booking-number').textContent = booking.bookingNumber;
       document.getElementById('program-name').textContent = booking.programName;
       document.getElementById('booking-date').textContent = booking.date;
       document.getElementById('booking-guests').textContent = `${booking.adults} adult(s), ${booking.children} child(ren)`;
       document.getElementById('booking-price').textContent = `$${booking.price}`;
       
       document.getElementById('customer-name').textContent = booking.customerName;
       document.getElementById('customer-email').textContent = booking.customerEmail;
       document.getElementById('customer-phone').textContent = booking.customerPhone;
       
       if (booking.specialRequests && booking.specialRequests.trim()) {
           document.getElementById('special-requests').textContent = booking.specialRequests;
       }
   }
   
   // Function to display error message
   function displayErrorMessage() {
       document.querySelector('.confirmation-header').innerHTML = `
           <div class="confirmation-icon error">
               <i class="fas fa-exclamation-circle"></i>
           </div>
           <div class="confirmation-title">
               <h2>Booking Information Not Found</h2>
               <p>We couldn't retrieve your booking information. This might happen if you've refreshed the page or accessed this page directly.</p>
           </div>
       `;
       
       document.querySelector('.booking-details').innerHTML = `
           <div class="error-message">
               <p>Please return to our services page to make a new booking.</p>
               <a href="services.html" class="btn btn-primary">Browse Services</a>
           </div>
       `;
       
       document.querySelector('.confirmation-actions').style.display = 'none';
       document.querySelector('.what-next').style.display = 'none';
   }
   
   // Function to recommend related programs
   function recommendPrograms(category, currentProgramId) {
       // Get appropriate data source
       let dataSource;
       switch(category) {
           case 'activity':
               dataSource = activitiesData;
               break;
           case 'tour':
               dataSource = toursData;
               break;
           case 'transportation':
               dataSource = transportationData;
               break;
           default:
               console.warn('Unknown category:', category);
               return;
       }
       
       // If data source doesn't exist, exit
       if (!dataSource) {
           console.warn('Data source not loaded');
           return;
       }
       
       // Get 3 random programs from the same category (excluding current program)
       const programIds = Object.keys(dataSource).filter(id => id !== currentProgramId);
       
       // If there are no other programs, exit
       if (programIds.length === 0) {
           document.querySelector('.recommended-section').style.display = 'none';
           return;
       }
       
       // Shuffle array and take first 3 (or less if fewer exist)
       shuffleArray(programIds);
       const recommendedIds = programIds.slice(0, Math.min(3, programIds.length));
       
       // Create HTML for recommended programs
       let recommendedHtml = '';
       
       recommendedIds.forEach(id => {
           const program = dataSource[id];
           
           recommendedHtml += `
               <div class="service-card">
                   <div class="service-image">
                       <img src="${program.mainImage}" alt="${program.title}">
                   </div>
                   <div class="service-info">
                       <div class="service-title">
                           <h3>${program.title}</h3>
                           <div class="service-price">From <span>$${program.price}</span></div>
                       </div>
                       <div class="service-meta">
                           <span><i class="far fa-clock"></i> ${program.duration}</span>
                           <span><i class="fas fa-map-marker-alt"></i> ${program.location}</span>
                       </div>
                       <p>${program.subtitle}</p>
                       <div class="service-actions">
                           <a href="details.html?category=${category}&id=${id}" class="btn btn-outline">View Details</a>
                           <a href="checkout.html?category=${category}&id=${id}" class="btn btn-primary">Book Now</a>
                       </div>
                   </div>
               </div>
           `;
       });
       
       document.getElementById('recommended-programs').innerHTML = recommendedHtml;
   }
   
   // Function to shuffle an array (Fisher-Yates algorithm)
   function shuffleArray(array) {
       for (let i = array.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [array[i], array[j]] = [array[j], array[i]];
       }
       return array;
   }
});
// booking-confirmation.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Booking confirmation page loaded');
    
    // Only initialize elements that exist on this page
    const elements = {
        backButton: document.querySelector('.back-button'),
        printButton: document.querySelector('.print-button')
    };
    
    // Add your booking confirmation specific code here
    if (elements.backButton) {
        elements.backButton.addEventListener('click', function() {
            window.history.back();
        });
    }
    
    if (elements.printButton) {
        elements.printButton.addEventListener('click', function() {
            window.print();
        });
    }
});
// Add this to your confirmation script
document.addEventListener('DOMContentLoaded', function() {
    // Set confirm step as active and checkout as completed
    const checkoutStep = document.querySelector('[data-step="1"]');
    const confirmStep = document.querySelector('[data-step="2"]');
    const progressLine = document.querySelector('.progress-line');
    
    if (checkoutStep) {
        checkoutStep.classList.remove('active');
        checkoutStep.classList.add('completed');
    }
    if (confirmStep) {
        confirmStep.classList.add('active');
    }
    if (progressLine) {
        progressLine.classList.add('active');
    }
});
// Instead of directly accessing elements, check if they exist first:
const element = document.getElementById('some-element');
if (element && element.classList) {
    element.classList.add('some-class');
}

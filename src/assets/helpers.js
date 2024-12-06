// import doctors from '../data/doctors.json'
// import availableTiming from '../data/availableTiming.json'


  
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  // Function to generate the next 14 days
   export const getNext14Days = (value) => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < value; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i); // Increment day
      const day = nextDate.getDate();
      const month = monthNames[nextDate.getMonth()];
      const year = nextDate.getFullYear();
      dates.push(`${day} ${month} ${year}`); // Format date as "12 Dec 2024"
    }
    return dates;
  };

 // Call the function

  



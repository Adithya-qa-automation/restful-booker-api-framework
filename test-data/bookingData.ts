export const createBookingPayload = ()=>{
    
        return {
        "firstname": `Adi_${Date.now()}`,
        "lastname": "Tester",
        "totalprice": 1000,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2024-01-01",
          "checkout": "2024-01-05"
        },
        "additionalneeds": "Breakfast"
      }
}
export const updateBookingPayload = ()=>{
    return{
        
          "firstname": "Updated Adi",
          "lastname": "Tester",
          "totalprice": 1000,
          "depositpaid": true,
          "bookingdates": {
            "checkin": "2024-01-01",
            "checkout": "2024-01-05"
          },
          "additionalneeds": "Breakfast"
        
    }
}
 type Booking = {
    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: {
        checkin: string;
        checkout: string;
    }
    additionalneeds: string;
}

type Body = {
bookingid: number;
booking: Booking;

};

export type BookingResponse<T> = {
body: T | null;
status: number
}
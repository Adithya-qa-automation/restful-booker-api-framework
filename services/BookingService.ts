import {APIRequestContext} from "@playwright/test";
import{ApiResponse, Booking, CreateBookingResponseBody} from "../models/booking";
import{getAuthHeaders, JSON_HEADERS} from "../utils/headers";




export default class BookingService {
    
    constructor(private request: APIRequestContext) {}
    
    async createBooking(bookingData: Booking): Promise<ApiResponse<CreateBookingResponseBody>>{

        const response = await this.request.post('/booking', {
            headers: JSON_HEADERS,
          data: bookingData});
        const body = await response.json();
        return{
            body,
            status: response.status()
        }
}

async getBooking(bookingId: number): Promise<ApiResponse<Booking>>{

    const response = await this.request.get(`/booking/${bookingId}`);
    if(response.status() !== 200){
        return {
            body: null,
            status: response.status()
        }
    }

    const body = await response.json();
    return {
        body,
        status: response.status()
    }
}

async updateBookingWithoutToken(bookingId: number, bookingData: Booking): Promise<ApiResponse<Booking>>{

    const response = await this.request.put(`/booking/${bookingId}`,{data: bookingData});
    return {

        body: null,
        status: response.status()
    }
}

async updateBookingWithToken(bookingId: number, bookingData: Booking, token: string): Promise<ApiResponse<Booking>>{

    const response = await this.request.put(`/booking/${bookingId}`, 
        {
        headers: getAuthHeaders(token),
      data: bookingData});
    const body = await response.json();
    return {
        body,
        status: response.status()
    }
}

async deleteBookingWithoutToken(bookingId: number): Promise<ApiResponse<null>>{
    const response = await this.request.delete(`/booking/${bookingId}`);
    return {

        body: null,
        status: response.status()
    }
}

async deleteBookingWithToken(bookingId: number, token: string): Promise<ApiResponse<null>>{
    const response = await this.request.delete(`/booking/${bookingId}`, {
        headers: getAuthHeaders(token)
    });
    return {

        body: null,
        status: response.status()
    }
}
}
    
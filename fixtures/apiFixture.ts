import {test as base, expect} from '@playwright/test';
import AuthService from "../services/AuthenticationService"
import BookingService from '../services/BookingService';

type ApiFixture = {
    token: string;
    bookingService: BookingService;
}

export const test = base.extend<ApiFixture>({
    token: async({request}, use)=>{
        const authService = new AuthService(request)
        const response = await authService.getToken();

    expect(response.status).toBe(200);
    expect(response.token).toBeTruthy();

    await use(response.token);
    },
    bookingService: async({request}, use)=>{
        await use(new BookingService(request));
    }
})

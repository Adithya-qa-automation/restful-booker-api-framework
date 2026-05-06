import { expect } from '@playwright/test';
import { test } from '../../fixtures/apiFixture';
import{ApiResponse, Booking} from '../../models/booking';
import{createBookingPayload, updateBookingPayload} from '../../test-data/bookingData';

test('API E2E', async ({ token, bookingService}) => {
//let token: string;
let bookingId: number;
let responseBooking: Booking;

/*   await test.step('Validate the authentication and get token', async () => {
  const response = await authService.getToken();
  token = response.token;
  const status: number = response.status;
  expect(status).toBe(200);
  expect(typeof(token)).toBe('string');
  expect(token.length).toBeGreaterThan(5);
})
 */
await test.step('Create a new booking', async()=>{
  const requestBody:Booking = createBookingPayload();
  const response = await bookingService.createBooking(requestBody)
  expect(response.body).not.toBeNull();
  const body =  response.body!;
  bookingId = body.bookingid;
  responseBooking = body.booking
  expect(response.status).toBe(200);
  expect(bookingId).toBeGreaterThan(0);
  expect(responseBooking).toMatchObject(requestBody);
})

await test.step('Get the created booking and validate the details', async()=>{

  const response = await bookingService.getBooking(bookingId);
  expect(response.status).toBe(200);
  const bookingDetails =  response.body;
  expect(bookingDetails).toMatchObject(responseBooking);
})



await test.step('Update the booking and validate the updated details', async()=>{

const updatedRequestBody: Booking = updateBookingPayload();


const unauthorizedResponse =  await bookingService.updateBookingWithoutToken(bookingId, updatedRequestBody);
expect(unauthorizedResponse.status).toBe(403);

const authorizedResponse = await bookingService.updateBookingWithToken(bookingId, updatedRequestBody, token);
expect(authorizedResponse.status).toBe(200);
const updatedBookingDetails =  authorizedResponse.body;
expect(updatedBookingDetails).toMatchObject(updatedRequestBody);
})

await test.step('Delete the booking and validate the deletion', async()=>{

  const responseWithoutToken: ApiResponse<null> = await bookingService.deleteBookingWithoutToken(bookingId);
  expect(responseWithoutToken.status).toBe(403);

  const responseWithToken: ApiResponse<null> = await bookingService.deleteBookingWithToken(bookingId, token);
  expect(responseWithToken.status).toBe(201);
})

await test.step('Validate the booking deletion by trying to get the deleted booking', async()=>{

  const response = await bookingService.getBooking(bookingId);
  expect(response.status).toBe(404);
})


  })
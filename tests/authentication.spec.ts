import { test, expect } from '@playwright/test'
import { createEndMark, createStartMark } from "../src/utils";

test('POST /auth/login responds within 800ms and 300ms on average', async ({ request }) => {
    let timesArray: number[] = [];

    for (let i=0; i<50; i++) {

        // 1. Create a starting mark
        const startMark = createStartMark();

        // 2. Execute the API call
        const response = await request.post(`auth/login`, {
            data: {
                "email": "maria@mail.com",
                "password": "12345"
            }
        });

        // 3. Create an ending mark
        const endMark = createEndMark();

        // 4. Measure the duration between the two marks
        const measurement = performance.measure(
            '/auth/login API Latency',
            'request-start',
            'request-end'
        );

        // 5. Assign the duration [ms]
        const duration = +(measurement.duration.toFixed(2));
        timesArray.push(duration);

        // API request validation
        expect(response.ok()).toBeTruthy();
        expect(await response.json()).toMatchObject({
            access_token: expect.any(String),
            refresh_token: expect.any(String)
        });

        // Performance check
        expect(duration).toBeLessThan(800);

        // Clean up marks/measures just in case
        performance.clearMarks();
        performance.clearMeasures();
    }

    // Calculate the average response time and assert
    const average = timesArray.reduce((total: number, current: number) => total + current) / timesArray.length;
    console.log(`POST /auth/login average: ${average.toFixed(2)}ms`);
    expect(average).toBeLessThan(300);
});

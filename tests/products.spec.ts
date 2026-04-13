import {test, expect, APIResponse} from '@playwright/test'
import {createEndMark, createStartMark} from "../src/utils";

test('GET /products responds within 1000ms', async ({ request }) => {
    // 1. Create a starting mark
    const startMark = createStartMark();

    // 2. Execute the API call
    const response = await request.get(`products`);

    // 3. Create an ending mark
    const endMark = createEndMark();

    // 4. Measure the duration between the two marks
    const measurement = performance.measure(
        '/products API Latency',
        'request-start',
        'request-end'
    );

    // 5. Assign the duration [ms]
    const duration = measurement.duration;

    console.log(`GET /products latency: ${duration.toFixed(2)}ms`);

    // API request validation
    expect(response.ok()).toBeTruthy();

    // Performance check
    expect(duration).toBeLessThan(1000);

    // Clean up marks/measures just in case
    performance.clearMarks();
    performance.clearMeasures();
});

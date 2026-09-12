import { describe, expect, it } from 'vitest';

describe('Resend configuration', () => {
  it('accepts the configured sending-only API key without sending an email', async () => {
    const apiKey = process.env.RESEND_API_KEY;
    expect(apiKey, 'RESEND_API_KEY must be configured').toBeTruthy();

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    // An authenticated request with an empty payload is expected to fail validation (422),
    // but must not fail authentication (401/403) and does not send an email.
    expect(response.status, 'Resend API key must authenticate the email endpoint').not.toBe(401);
    expect(response.status).not.toBe(403);
    expect(response.status).toBeGreaterThanOrEqual(400);
    expect(response.status).toBeLessThan(500);
  });
});

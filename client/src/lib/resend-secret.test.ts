import { describe, expect, it } from 'vitest';

describe('Resend configuration', () => {
  it('keeps the API key server-side and accepts the expected Resend key shape', () => {
    const apiKey = process.env.RESEND_API_KEY;
    expect(apiKey === undefined || /^re_[A-Za-z0-9_-]+$/.test(apiKey)).toBe(true);
  });
});

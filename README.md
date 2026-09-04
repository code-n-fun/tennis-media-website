# Court Report

Copy `.env.example` to `.env.local`, set Sanity and Resend values, then run `npm install` and `npm run dev`.

Newsletter signup creates an opted-in Resend contact in the configured Topic. Send `src/emails/Newsletter.tsx` as a Resend Broadcast; it includes `{{{RESEND_UNSUBSCRIBE_URL}}}` for managed preferences and unsubscribe.

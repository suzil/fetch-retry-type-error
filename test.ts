import fetchRetry from 'fetch-retry';
import originalFetch from 'node-fetch';

const fetch = fetchRetry(originalFetch);

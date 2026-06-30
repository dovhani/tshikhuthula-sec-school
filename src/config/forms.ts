/**
 * Web3Forms access key — public token used by the contact and enrolment
 * forms to deliver submissions to the school inbox without any backend.
 *
 * Get a free key at https://web3forms.com — enter the destination email
 * (where form submissions should land); the access key is emailed to you.
 * This token is safe to expose in client-side code.
 *
 * [ACTION REQUIRED] Replace the placeholder below with the real key.
 * Until then, the forms will show a delivery error on submit.
 */
export const WEB3FORMS_ACCESS_KEY = '3bb39263-2490-491b-89f8-213fa513edae';

/** Web3Forms submission endpoint. */
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

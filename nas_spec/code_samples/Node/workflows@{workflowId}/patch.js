import { Checkout } from 'checkout-sdk-node';

let cko = new Checkout('your_client_secret_here', {
	client: 'ack_XXXXXXXXXXXX',
	scope: ['gateway'], // array of scopes
	environment: 'sandbox', // or "production"
});

// Or if you use api keys:
// const cko = new Checkout('sk_sbox_XXX', { pk: 'pk_sbox_XXX'}});

try {
	let workflows = await cko.workflows.patch('wf_2i7z3lwdoe5uzmomm7yzrytqdy', {
		name: 'Webhooks workflow updated',
	});
} catch (err) {
	console.log(err.name);
}

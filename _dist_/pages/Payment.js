/* src/pages/Payment.svelte generated by Svelte v3.43.1 */
import {
	SvelteComponentDev,
	dispatch_dev,
	init,
	noop,
	safe_not_equal,
	validate_slots
} from "../../web_modules/svelte/internal.js";

const file = "src/pages/Payment.svelte";

function create_fragment(ctx) {
	const block = {
		c: noop,
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Payment', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Payment> was created with unknown prop '${key}'`);
	});

	return [];
}

class Payment extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Payment",
			options,
			id: create_fragment.name
		});
	}
}

export default Payment;
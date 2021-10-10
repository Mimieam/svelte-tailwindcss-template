import './Base.css.proxy.js';
/* src/components/Base.svelte generated by Svelte v3.43.1 */
import {
	SvelteComponentDev,
	add_location,
	attr_dev,
	detach_dev,
	dispatch_dev,
	element,
	init,
	insert_dev,
	noop,
	safe_not_equal,
	validate_slots
} from "../../web_modules/svelte/internal.js";

const file = "src/components/Base.svelte";

function create_fragment(ctx) {
	let div;

	const block = {
		c: function create() {
			div = element("div");
			attr_dev(div, "class", "svelte-1fzm8wn");
			add_location(div, file, 25, 0, 302);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
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
	validate_slots('Base', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Base> was created with unknown prop '${key}'`);
	});

	return [];
}

class Base extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Base",
			options,
			id: create_fragment.name
		});
	}
}

export default Base;
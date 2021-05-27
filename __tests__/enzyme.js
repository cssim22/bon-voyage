import React from "react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import Fetch from "../fetch";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router, Link } from "react-router-dom";

// import toJson from "enzyme-to-json";

import { Button } from "@material-ui/core";
import App from "../client/components/App.jsx";
import Map from "../client/components/Map.jsx";
import NewTripModal from "../client/components/NewTripModal.jsx";

// import { ExpansionPanelActions } from "@material-ui/core";
// import App from '../client/components/App.jsx';

configure({ adapter: new Adapter() });

describe("React unit test", () => {
	xdescribe("App unit test", () => {
		let wrapper;
		// const props =

		beforeAll(() => {
			wrapper = shallow(<App />);
		});

		it("renders a map element", () => {
			expect(wrapper.containsMatchingElement(<Map />)).toEqual(true);
		});
		it("renders a router tag with all elements included", () => {
			expect(wrapper.containsMatchingElement(<Modal />)).toEqual(true);
		});
		it("renders a router tag with all elements included", () => {
			expect(wrapper.containsMatchingElement(<Button />)).toEqual(true);
		});
		it("contains a newtripmodal component", () => {
			expect(wrapper.containsMatchingElement(<NewTripModal />)).toEqual(true);
		});
	});

	// xdescribe("NewTripModal component test", () => {
	// 	let wrapper;
	// 	// const props =

	// 	beforeAll(() => {
	// 		wrapper = shallow(<App />);
	// 	});

	// 	// it("contains a form", () => {
	// 	// 	expect(wrapper.find(<NewTripModal />)).dive().find(<form />).toEqual(true);
	// 	// })
	// 	// it("renders a router tag with all elements included", () => {
	// 	// 	expect(wrapper.containsMatchingElement(<Modal />)).toEqual(true);
	// 	// })
	// 	// it("renders a router tag with all elements included", () => {
	// 	// 	expect(wrapper.containsMatchingElement(<Button/>)).toEqual(true);
	// 	// })
	// 	// it("contains a newtripmodal component", () => {
	// 	// 	expect(wrapper.containsMatchingElement(<NewTripModal />)).toEqual(true);
	// 	// })
	// });

	describe("NewTripModal component test", () => {
		let wrapper;
		const mock1 = jest.fn();
		const handleSubmit = ()=>{
			return 'hello'
		}
		beforeAll(() => {
			wrapper = shallow(<NewTripModal handleSubmit/>);
		});

		it("Check that the modal contains a form", () => {
			expect(wrapper.find('form').type()).toEqual('form');
		})	
		it("check the number of textfields within form being rendered", () => {
			expect(wrapper.find('form').children()).toHaveLength(11);
		})	
		
	});
})


import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Button } from "@material-ui/core";
import App from "../client/components/App.jsx";
import Map from "../client/components/Map.jsx";
import NewTripModal from "../client/components/NewTripModal.jsx";

configure({ adapter: new Adapter() });

describe("React unit test", () => {
	describe("App unit test", () => {
		let wrapper;

		beforeAll(() => {
			wrapper = shallow(<App />);
		});

		it("renders a map element", () => {
			expect(wrapper.containsMatchingElement(<Map />))
			.toEqual(true);
		});
		it("renders a router tag with all elements included", () => {
			expect(wrapper.containsMatchingElement(<Modal />))
			.toEqual(true);
		});
		it("renders a router tag with all elements included", () => {
			expect(wrapper.containsMatchingElement(<Button />))
			.toEqual(true);
		});
		it("contains a newtripmodal component", () => {
			expect(wrapper.containsMatchingElement(<NewTripModal />))
			.toEqual(true);
		});
	});

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
			expect(wrapper.find('form').type())
			.toEqual('form');
		})	
		it("check the number of textfields within form being rendered", () => {
			expect(wrapper.find('form').children())
			.toHaveLength(11);
		})	
	});
})

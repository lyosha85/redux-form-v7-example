import React from 'react';
import { reduxForm, Field } from 'redux-form';

let DemoForm = () => {
	return (
		<form>
			<label htmlFor="cut_off_time">Cut off time</label>
			<Field name="cut_off_time" component="input" />
			<button type="Submit">Submit</button>
		</form>
	);
};

DemoForm = reduxForm({
	form: 'demo'
})(DemoForm);

export default DemoForm;

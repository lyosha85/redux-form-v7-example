import React from 'react';
import { reduxForm, Field } from 'redux-form';
import showResults from './showResults';

const validate = values => {
	const errors = {};
	if (!values.cut_off_time) {
		errors.cut_off_time = 'Required';
	}
	return errors; // has to be the exact same shape as values object
};

let DemoForm = ({ handleSubmit, submitting }) => {
	return (
		<form onSubmit={handleSubmit(showResults)}>
			<label htmlFor="cut_off_time">Cut off time</label>
			<Field name="cut_off_time" component="input" />
			<button type="Submit" disabled={submitting}>
				Submit
			</button>
		</form>
	);
};

DemoForm = reduxForm({
	form: 'demo',
	validate
})(DemoForm);

export default DemoForm;

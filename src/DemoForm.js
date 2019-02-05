import React from 'react';
import { reduxForm, Field } from 'redux-form';
import showResults from './showResults';

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
	form: 'demo'
})(DemoForm);

export default DemoForm;

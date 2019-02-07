import React from 'react';
import { reduxForm, Field } from 'redux-form';
import showResults from './showResults';

const validateHhMm = t =>
	/^(?:(?:(?:0?\d|1[012]):[0-5]\d(?::00)? ?[ap|AP]m|M)|(?:[01]?\d|2[0-3]):[0-5]\d(?::00)?)$/.test(t);

const validate = values => {
	const errors = {};
	if (!values.cut_off_time) {
		errors.cut_off_time = 'Required';
	}
	if (!validateHhMm(values.cut_off_time)) {
		errors.cut_off_time = 'Invalid Time';
	}
	return errors; // has to be the exact same shape as values object
};

const createRenderer = render => ({ input, meta, label }) => {
	return (
		<div>
			{meta.error && meta.touched ? <span> {meta.error} </span> : ''}
			<label>{label}</label>
			{render(input, label)}
		</div>
	);
};

const RenderInput = createRenderer((input, label) => <input {...input} placeholder={label} />);
const RenderSelect = createRenderer((input, label) => <select {...input} placeholder={label} />);

let DemoForm = ({ handleSubmit, submitting }) => {
	return (
		<form onSubmit={handleSubmit(showResults)}>
			<Field label="Cut off time" name="cut_off_time" component={RenderInput} />
			<Field label="Open?" name="open_or_closed" component={RenderSelect} />
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

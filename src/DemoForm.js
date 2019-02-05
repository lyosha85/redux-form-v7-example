import React from 'react';
import { reduxForm } from 'redux-form';

let DemoForm = () => {
	return <div>Test</div>;
};

DemoForm = reduxForm({
	form: 'demo'
})(DemoForm);

export default DemoForm;

import React from 'react';
import { reduxForm } from 'redux-form';

let DemoForm = () => {
	return <div>Test</div>;
};

DemoForm = reduxForm({})(DemoForm);

export default DemoForm;

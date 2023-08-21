import * as yup from "yup";


let email_regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
let bank_account_regex = new RegExp(/^[0-9]{9,18}$/);
let amount_regex = new RegExp(/^[0-9]{1,10}\.[0-9]{2}$/);


const company_validation = {
    'company_name': yup.string().required('required').min(3, 'tooshort').max(20, 'toolong'),
    'city': yup.string().required('required').min(3, 'tooshort').max(30, 'toolong'),
    'street': yup.string().required('required').min(3, 'tooshort').max(20, 'toolong'),
    'post_code': yup.string().required('required').test({
        name: 'is_valid_postcode',
        message: 'invalid_post_code',
        test(value, ctx) {
            return /^\d{2}-\d{3}$/.test(value)
        }
    }),
    'vat': yup.string().required('required').test({
        name: 'is_valid_vat',
        message: 'invalid_vat',
        test(value, ctx) {
            return /^\d{3}-\d{3}-\d{2}-\d{2}$/.test(value)
        }
    }),
    'phone': yup.string().required('required').min(9, 'tooshort').max(15, 'toolong'),
    'email': yup.string().required('required').test({
        name: 'is_valid_email',
        message: 'invalid_format',
        test(value, ctx) {
            return email_regex.test(value)
        }
    }),
    'bank_account': yup.string().required('required').test({
        name: 'is_valid_bank_account',
        message: 'invalid_format',
        test(value, ctx) {
            return bank_account_regex.test(value)
        }
    }),
}

const itemSchema = yup.object().shape({
    name: yup.string().required('required').min(3, 'tooshort').max(30, 'toolong'),
    amount: yup.string().required('required').test({
        name: 'is_valid_amount',
        message: 'invalid_amount',
        test(value, ctx) {
            return amount_regex.test(value)
        }
    }),
    unit: yup.string().required('required').min(1, 'tooshort').max(10, 'toolong'),
    tax: yup.string().required('required').oneOf(['0%', '8%', '12%', '19%', '21%'], 'invalid_tax'),
    price: yup.string().required('required').test({
        name: 'is_valid_price',
        message: 'invalid_amount',
        test(value, ctx) {
            return amount_regex.test(value)
        }
    }),
  });
const ArrayOfItemsSchema = yup.array().of(itemSchema);

const schema = yup.object().shape({
    no: yup.string().required('required').min(1, 'tooshort').max(2, 'toolong'),
    created: yup.string().required('required'),
    valid: yup.string().required('required'),
    // companies' forms
    recipient_company_name: company_validation['company_name'],
    sender_company_name: company_validation['company_name'],
    recipient_city: company_validation['city'],
    sender_city: company_validation['city'],
    recipient_street: company_validation['street'],
    sender_street: company_validation['street'],
    recipient_post_code: company_validation['post_code'],
    sender_post_code: company_validation['post_code'],
    recipient_vat: company_validation['vat'],
    sender_vat: company_validation['vat'],
    recipient_phone: company_validation['phone'],
    sender_phone: company_validation['phone'],
    recipient_email: company_validation['email'],
    sender_email: company_validation['email'],
    recipient_bank_account: company_validation['bank_account'],
    sender_bank_account: company_validation['bank_account'],
    // invoice items fields
    items: ArrayOfItemsSchema
});


export default schema;

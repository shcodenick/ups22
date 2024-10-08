export type InvoiceFormType = {
    id?: number | undefined,
    no: string,
    created: string,
    valid: string,
    sender_company_name: string,
    sender_street: string,
    sender_post_code: string,
    sender_city: string,
    sender_vat: string,
    sender_phone: string,
    sender_email: string,
    sender_bank_account: string,
    recipient_company_name: string,
    recipient_street: string,
    recipient_post_code: string,
    recipient_city: string,
    recipient_vat: string,
    recipient_phone: string,
    recipient_email: string,
    recipient_bank_account: string,
    items: {name: string, amount: string, unit: string, tax: string, price: string}[] | undefined
}


export type InvoicesListType = InvoiceFormType[];

const defaultValues:InvoiceFormType = {
    id: 0,
    no: '',
    created: '',
    valid: '',
    sender_company_name: '',
    sender_street: '',
    sender_post_code: '',
    sender_city: '',
    sender_vat: '',
    sender_phone: '',
    sender_email: '',
    sender_bank_account: '',
    recipient_company_name: '',
    recipient_street: '',
    recipient_post_code: '',
    recipient_city: '',
    recipient_vat: '',
    recipient_phone: '',
    recipient_email: '',
    recipient_bank_account: '',
    items: [{name: '', amount: '', unit: '', tax: '', price: ''}]
}

export default defaultValues;
from django import forms


class ContactMeMessage(forms.Form):
    customer_name = forms.CharField(label='Name', max_length=100)
    email_address = forms.CharField(label='Email Address', max_length=200)
    phone_number = forms.CharField(label='Phone Number', max_length=20)
    message = forms.CharField(label='Message', max_length=5000)

function billingFunction() {
    
    if(document.getElementById('same').checked==true)
    {
        billingName.value= shippingName.value;
        billingZip.value=shippingZip.value;
    }

    else
    {
        billingName.value=null;
        billingZip.value=null;
    }
    
}
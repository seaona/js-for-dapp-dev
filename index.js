console.log("hello")

window.addEventListener('load', function() {
    if(typeof window.ethereum !== 'undefined') {
        console.log('Metamask detected')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML = "Metamask has been detected"
    }

    else {
        console.log('Metamask not available')
        alert("You need to install Metamask")
    }
})

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async () => {
    console.log("dsmad")
    await ethereum.request({
        method: 'eth_requestAccounts'
    })

    const mmCurrentAccount = document.getElementById('mm-current-account');
    mmCurrentAccount.innerHTML = etherum.selectedAddress
}
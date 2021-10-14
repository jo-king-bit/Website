function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function openNavA() {
  document.getElementById("mySidenav1").style.width = "250px";
}
function closeNavA() {
  document.getElementById("mySidenav1").style.width = "0";
}
function openNavB() {
  document.getElementById("mySidenav2").style.width = "250px";
}
function closeNavB() {
  document.getElementById("mySidenav2").style.width = "0";
}
function openNavC() {
  document.getElementById("mySidenav3").style.width = "250px";
}
function closeNavC() {
  document.getElementById("mySidenav3").style.width = "0";
}
    let saveFile = () => {
    	
        // Get the data from each element on the form.
    	const name = document.getElementById('name');
        const email = document.getElementById('email');
        const msg = document.getElementById('msg');
        
        // This variable stores all the data.
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Email: ' + email.value + ' \r\n ' + 
            'Message: ' + msg.value;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }
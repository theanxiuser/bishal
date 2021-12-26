document.addEventListener("DOMContentLoaded", () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    
    // Display and hiden description of project 
    for (i = 1; i <= 6; i++) {
        let j = 'p'+i+'_desc';
        let k = 'p'+i;
        
        document.getElementById(k).addEventListener(
            "mouseover", function () {
                document.getElementById(j).style.visibility = "visible";
            }
        );
        document.getElementById(k).addEventListener(
            "mouseout", function () {
                document.getElementById(j).style.visibility = "hidden";
            }
        );
    }

    function sendMail() {

        //getting values from input fields
        var name=Form.name.value;
        var sender=Form.sender.value;
        var subject=Form.subject.value;
        var content=Form.content.value;
      
       
        //Sending email
      
        Email.send({
            SecureToken : "08b564f9-a2b4-4347-94e8-c7351c33b652",
            To : 'isha.stupid@gmail.com',
            From : sender,
            Subject : subject,
            Body : content,
        }).then(
          message => alert(message)
        );
      
      }
});
function ajax(){//Creating an XHR Object
    var xhttp =  new XMLHttpRequest();
    //Eventlistener
    xhttp.onreadystatechange = function(){
        //condition
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var ohead = "";
            ohead=`<tr>
            <th scope="col">SL No.</th>
            <th scope="col">Item Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit</th>
            <th scope="col">Department</th>
            <th scope="col">Notes</th>
            <th>Status</th>
            </tr>`;
            
            var Jgrocery = response.grocery;
            var output = "";
            for (var i = 0; i < Jgrocery.length; i++) {
                output += `<tr>
                <td class="sel1">${Jgrocery[i].SNo}</td>
                <td class="sel2">${Jgrocery[i].Item}</td>
                <td class="sel3">${Jgrocery[i].Quantity}</td>
                <td class="sel4">${Jgrocery[i].Unit}</td>
                <td class="sel5">${Jgrocery[i].Department}</td>
                <td class="sel6">${Jgrocery[i].Notes}</td>
                <td class="sel7"><input class="check" type="checkbox"></td>
                </tr>`;
              }
              document.getElementById("grocerytitle").innerHTML = ohead;
              document.getElementById("groceryitems").innerHTML = output;
        }
    }
   
    xhttp.open("GET","grocery.json", true);
    xhttp.send();
    }

    function change() {
        console.log("see");
        let length = 10;
        var s1 = Array.from(document.querySelectorAll(".sel1"));
        var s2 = Array.from(document.querySelectorAll(".sel2"));
        var s3 = Array.from(document.querySelectorAll(".sel3"));
        var s4 = Array.from(document.querySelectorAll(".sel4"));
        var s5 = Array.from(document.querySelectorAll(".sel5"));
        var s6 = Array.from(document.querySelectorAll(".sel6"));
        var s7 = Array.from(document.querySelectorAll(".sel7"));
        var check = Array.from(document.querySelectorAll(".check"));
        for (var i = 0; i < length; i++) {
          if (check[i].checked) {
            console.log(i);
            // s1[i].style.backgroundColor = "indianred";
            // s2[i].style.backgroundColor = "indianred";
            // s3[i].style.backgroundColor = "indianred";
            // s4[i].style.backgroundColor = "indianred";
            // s5[i].style.backgroundColor = "indianred";
            // s6[i].style.backgroundColor = "indianred";
            // s7[i].style.backgroundColor = "indianred";
            // s1[i].style.textDecoration = "line-through";
            s2[i].style.textDecoration = "line-through";
            // s3[i].style.textDecoration = "line-through";
            // s4[i].style.textDecoration = "line-through";
            // s5[i].style.textDecoration = "line-through";
            s6[i].style.textDecoration = "line-through";
            
          } else {
            console.log("sno");
           
            s1[i].style.backgroundColor = "rgb(232, 241, 238)";
            s2[i].style.backgroundColor = "rgb(232, 241, 238)";
            s3[i].style.backgroundColor = "rgb(232, 241, 238)";
            s4[i].style.backgroundColor = "rgb(232, 241, 238)";
            s5[i].style.backgroundColor = "rgb(232, 241, 238)";
            s6[i].style.backgroundColor = "rgb(232, 241, 238)";
            s7[i].style.backgroundColor = "rgb(232, 241, 238)";
            s1[i].style.textDecoration = "";
            s2[i].style.textDecoration = "";
            s3[i].style.textDecoration = "";
            s4[i].style.textDecoration = "";
            s5[i].style.textDecoration = "";
            s6[i].style.textDecoration = "";
          }
        }
    
      }
      

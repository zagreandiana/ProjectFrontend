
// 1. Un formular HTML contine doua checkbox-uri (select-uri). Primul combobox contine judete. La selectarea unui judet din primul
// combobox, se va popula cel de-al doilea combobox cu orasele corespunzatoare judetului selectat. 
// Nota: Orasele corespunzatoare fiecarui judet se vor memora intr-un sir.
    var citiesByState = {
            "Cluj-Napoca": ["Cluj","Dej", "Turda", "Gherla", "Huedin"],
            "Maramures": ["Baia Mare", "Baia Borsa", "Borsa", "Sighet"],
            "Bistrita-Nasaud": ["Nasaud", "Sangeorz-Bai", "Bistrita", "Beclean"]
    };

    function makeSubmenu(value) 
    {
    if(value.length==0) {
        document.getElementById("citySelect").innerHTML = "<option></option>";
    }
    else {
        var citiesOptions = "";
        for(cityId in citiesByState[value]) {
            citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
        }
        document.getElementById("citySelect").innerHTML = citiesOptions;
    }
    };
    function displaySelected() 
    { 
        var country = document.getElementById("countrySelect").value;
        var city = document.getElementById("citySelect").value;
        alert(country+"\n"+city);
    };
    
    function resetSelection()
    {
        document.getElementById("countrySelect").selectedIndex = 0;
        document.getElementById("citySelect").selectedIndex = 0;
    }   

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // 2. Sa se scrie un program care la dublu click pe un cuvant va afisa acel cuvant intr-un alert

    function dubluClick(){
        alert("Apasa-ma");
    }
    

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // 3. 

    let id = (id) => document.getElementById(id);

    let classes = (classes) => document.getElementsByClassName(classes);
    
    let email = id("email"),
      form = id("form"),
      errorMsg = classes("error"),
      successIcon = classes("success-icon"),
      failureIcon = classes("failure-icon");
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      engine(email, 0, "Email cannot be blank");
    });
    
    let engine = (id, serial, message) => {
      if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    
        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
      } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
    
        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
      }
    };
    

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    // 4. Sa se construiasca dinamic o lista neordonata cu 5 elemente.
    function listaCuElementeDinamice(lungimeLista){
        let lista = [];
        for(let i=0; i<lungimeLista; i++){
            lista.push(Math.floor(Math.random() * lungimeLista))
        }
        alert(lista);
    }
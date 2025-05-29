//all global varaible
let userInfo;
// (below line) creating this variable to store the 1st letter of gmail before @
let user;
//this area creating to selct the data of BOOking(module)below line
let allBookingData = []; // creating variable (their value is array)
//(below line) this array store the similar data of (booking) which is displaying on screen 
let allInHouseData = [];

let allArchieveData = [];
//(above) this array for ARcheiveData
let allCashData = [];
//(above) it is FOR CASHIER
let allCashArchieveData = [];
//(above) used to store the Cashier data when they click on Archieve button (in cashier FORM)

// below line (store the (.navbar-brand(class of ->where hotel NAme change)))
let navBrand = document.querySelector(".navbar-brand");
// below line (store the (.logout-btn(class of ->Logout button)))
let logoutBtn = document.querySelector(".logout-btn");
//creating the bookingForm variable and(selecting the booking form)
let bookingForm = document.querySelector(".booking-form");
// now selecting the input field from the form(below line) (querSelectorAll->used to select the all input)
let allBInput = bookingForm.querySelectorAll("input");
let bookingTextarea = bookingForm.querySelector("textarea");

let inHouseForm = document.querySelector(".inhouse-form");
let allInHInput = inHouseForm.querySelectorAll("input");
let InHTextarea = inHouseForm.querySelector("textarea");
console.log(allInHInput);
//textarea is not selected (on upper line("input") so selection seprarately(REMEBER->querSelector used to select 1 input))

//console.log(allBInput);
//console.log(bookingTextarea);
//(below line) is taking the class from(button-close) and storin it (so form automatically cut when data is registered) 
let modalCloseBtn = document.querySelectorAll(".btn-close");
//(below line) slecting the table body content (from booking page) to change thier contant
let bookingListTableBody = document.querySelector(".booking-list");
let inHouseListTableBody = document.querySelector(".inhouse-list");
let archieveListTableBody = document.querySelector(".archieve-list");
//(above) it is used for ARCHIEVE TABLE (called in ShowTable())
//(below line) this is used for update button (on displaying data ->BOOKING FORM)
let bRegisterBtn = document.querySelector(".b-register-btn");
let inHRegisterBtn = document.querySelector(".in-house-reg-btn");

//(below) when we use this varaible this will select all buton like(BOOKING,INHOUSE,ARCHIEVE)
let allTabBtn = document.querySelectorAll(".tab-btn");
//(below) selecting the (Search button) to perform operation on it 
let searchElement = document.querySelector(".search-input");
//(below) this is for CASHIERBTN (in CASHIER)
let cashierBtn = document.querySelector(".cashier-tab");
let cashierTab = document.querySelector("#cashier");
//(above) it store the CASHIER TABLE (if cashier name present then this table open) (for active work FOR CASHIER NAME)
let BookingTab = document.querySelector("#booking");
//(above) it store the BOOKING TABLE to show active (if cashier name not present) (for active work FOR CASHIER NAME)
let cashierForm = document.querySelector(".cashier-form");
//(above) it select the INPUT field from the from where our cashier Name will show (CASHIER BUTTON)
let allCashierInput = cashierForm.querySelectorAll("input");
//(all input which store in CASHIER FORM will come in this)
let cashBtn = document.querySelector(".cash-btn");
//(above) it's ADDCASH button in our (CASHIER BUTTON) which displaying the cashier name ,so when it clicked
//(below) used to get the table content froM CASHIER TABLE
let cashierTableBody = document.querySelector(".cashier-list");
//(below) used toSHOW tht TOTAL of CASHIER table
let cashTotal = document.querySelector(".total");
//(below) selecting the closeCshier button (in CASHIER FORM )
let closeCashierBtn = document.querySelector(".close-cashier-btn");
//(below) this used to display data in Archieve IN CASHIER ARCHIEVE TABLE
let cashierArchieveTableBody = document.querySelector(".cashier-archieve-list");
//(below) this display the toal mound in ARCHIEVE CASHIER TABLE(when user lcik on archieve)
let archieveTotal = document.querySelector(".archieve-total");
//(below) use to do the wprk in(PRINT) button (differne tforms->booking,registration,cashier etc)
let allprintBtn = document.querySelectorAll(".print-btn");
//(below) is also work simlar for(print button) but only for Cashier(ArchieveCash->print Button) we do different
let archievePrintBtn = document.querySelector(".archieve-print-btn");
let cashierTabPan = document.querySelector(".cashier-tab-pan");
//(below) work on TOTALBOOKING,TOTAL INHOUSE,TOTAL ARCHIEVE
let AlltotalBtn = document.querySelectorAll(".total-btn");
//(below) used to show the weheter the guest in the room or not (below the Inhouse table)
let showBookingRoomsElement = document.querySelector(".show-booking-rooms");
//(below) used to show the weheter the guest in the room or not (below the Inhouse table)
let showInHouseRoomsElement = document.querySelector(".show-inhouse-rooms");










//CHECK USER LOGIN OR NOT
//SEESSION STORAGE HAVE ONLY STORE DATA UTIL OR USER LOGIN (IF THERE IS NO DATA MEANS USER NOT LOGIN)
if (sessionStorage.getItem("__au__") == null)
// if session storage is equal to NULL it means user is not login
{
    //(IF SESSION STORAGE i equal to null then send the user to LOGIN PAGE)
    window.location = "../index.html";

    //IF SESSION STORAGE HAVE NO DATA THEN USER GO BACK AND AGAIN LOGIN
}
//take out the data from the(SESSION STORAGE) and storing it in userInfo
userInfo = JSON.parse(sessionStorage.getItem("__au__"));
//(below line) changin the HOTEL NAME 
navBrand.innerHTML = userInfo.hotelname
//printing that data into console(userinfor ->taked data from SESSION STORAGE)
//(below line) is used to split(the gmail avi@gmail ->([0]-avi)([1]-gmail.com) we want onli avi to make key(unique in session storage)
//storing the gmail 1st leeteers before @ into user variable
user = (userInfo.email.split("@")[0]);
console.log(user);





//print(Button) coding (for all forms)
for (let btn of allprintBtn) {
    //selcting button to perform work on them 
    btn.onclick = () => {
        //(below) calling the(print) function from the (window)
        window.print();
    }
}
//(below) special for(ArchieveCshier->Print btn) to print data (aboveprint function is not wrie printing for this button)
archievePrintBtn.onclick = () => {
    //(below line) hide the back information(ArchieveCshier->print) on click it
    cashierTabPan.classList.add('d-none');
    window.print();
}
modalCloseBtn[3].onclick = () => {
    //(below line) to bring back the hide information after print it (ArchieveCshier->print) on click it
    cashierTabPan.classList.remove('d-none');
}


//check hotels room(not greater than give rooms)
const checkRooms = (element) => {

    //(userinfor) toalroom given 5 (at starting Login time) so now we give room lesser than 5 ,6th room not avillable in hotel
   //(below) not use Number() then it copare the string(when we enter total rooms then we want to comapre number)
   //but they comapre string (30->total rooms) i write 4(now 4 is comapring with string not number)
    if (Number(userInfo.totalRoom) < Number(element.value)) {
        swal("Warning", `Total ${userInfo.totalRoom} rooms is available in the hotel`, 'warning')
        element.value = userInfo.totalRoom;
        
    }
    
}





allBInput[2].oninput = (event) => {
    checkRooms(event.target);
}



allInHInput[2].oninput = (event) => {
    checkRooms(event.target);
}

//(hotelrooms close workm)





//CREATING FUNCTION TO FETCH THE DATA FROM THE KEY(unique key(created bhy email leter) which store data)
//from that key we fetch the data
const fetchData = (key) => {
    //(upper line) we send the key(from which key we want to fetch the data)
    if (localStorage.getItem(key) != null)
    //(top line) if key is present in local storage then we fetch the data 
    {
        //so now we fetch the data from the key
        //(below line) here  the key come to fetch the data
        const data = JSON.parse(localStorage.getItem(key)); //(const data is new varaible created)
        // now we return the data after fetch it
        return data;
    }
    else {
        return [];
    }
}



//(below line) from there we pass the key to fetchData function
allBookingData = fetchData(user + "_allBookingData") //this how the key name made and we pass it
//now we get the data and now we show it in SHOW BOOKING DATA 
allInHouseData = fetchData(user + "_allInHouseData");
//(below) for ARchieveData (they read the data ) (fetchdata is function) so calling and passing him the key from where to read the data
allArchieveData = fetchData(user + "_allArchieveData");
//(below) for CASHIER DATA (they read the data ) (fetchdata is function) so calling and passing him the key from where to read the data
allCashData = fetchData(user + "_allCashData");
//(below) used to store the cashier data when they click on archeive button
allCashArchieveData = fetchData(user + "_allCashArchieveData");



//formate date(to show the date properly)
const formatDate = (data, isTime) => {
    //(above line) we will pass our date 
    const date = new Date(data);
    //(above line) sotrin the data(date) into date varaible
    //now we want to find the year(from this given date)
    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let time = date.toLocaleTimeString() // this function gives you time
    //(below line) this 0 will on month (1-3-25 but now 1-03-25 (03 ->0 will be added ))
    dd = dd < 10 ? "0" + dd : dd
    mm = mm < 10 ? "0" + mm : mm
    return `${dd}-${mm}-${yy} ${isTime ? time : ''}`
    //(this will return this from where function called(SHOWBOOKDATA->)
}


//REGISTRATION CODING (START)
const registrationFunc = (textarea = null, inputs, array, key) => {

    //below line(reading the bookingTexare value and storing it in key(notice)) 
    //why textarea data take separately because it is not any input field(so it not come under loop(for other data))
    let data = {
        notice: textarea && textarea.value, //(it text area is present then we fetch the value)
        inHouse: false, //adding one more property of Inhouse 
        createdAt: new Date() // creating(createdAt key which store the date(the time at which registration done automatically))
    }
    // console.log(data);
    //STARTING THE LOOP TO TAKE OTHER DATA FROM INPUT FIELD
    for (let element of inputs) {
        //element taking data from(allBInoput->it's varaible declare top)
        //(below line) element.name reads (keyword give in profile.html ,name="notice")
        let key = element.name;
        //(below line) it reads only the data from the form (in input form)
        let value = element.value;
        //console.log(key,value); 
        //(BELOW LINE) now we put the all data(above 3 lines (element,name,element.value))
        data[key] = value
        //(above line) data is storing the(bookingtextarea value (notice is type of text:) [key other input naem] and value other input data)
    }
    // console.log(data); 
    //NOW WE CREATE THE KEY
    //(below line) pushing the data into allBookingData
    array.unshift(data); //unshift push the data on array top (first new data store in bottom of table but now it store top of table)
    //Now in local storage(we email to create KEY because email is UNIQUE)
    //how key made(user is variable store the 1st letter of gmail and joing 1st letter of gmail with(text->allBookingData))
    localStorage.setItem(key, JSON.stringify(array));
    swal("Good Job !", "Booking Success", 'success');


}

//REGISTRATION CODING (END)


//SHOW  DATA
const ShowData = (element, array, key) => {
    let tmp = key.split("_")[1];

    // now we start the loop for (allBookingData =where we fetch the data from the key(function))
    //(BELOW line) we do this loop empty before it otherwise(same data agin print when new data print)
    element.innerHTML = '';
    //(below line) item (object store her) and their number in(index) like->onject0,object1,object2 (remove console.log-- from comment and check(below writen) in console)
    array.forEach((item, index) => {
        //(above line) the object will go in item and their indexing number will go in index
        //console.log(index,item);
        //(below line) += use if the data is stored initiall they not remove wehn new data come 
        element.innerHTML += `
        
    <tr>
                                        <td class="no-print text-nowrap">${index + 1}</td>
                                        <td class="text-nowrap">${item.location}</td>
                                        <td class="text-nowrap">${item.room}</td>
                                        <td class="text-nowrap">${item.fullname}</td>
                                        <td class="text-nowrap">${formatDate(item.checkInDate)}</td>
                                      <!--(to or bottom line)If you write like this->(item.checkInDate,time) then time will also come -->
                                        <td class="text-nowrap">${formatDate(item.checkOutDate)}</td>
                                        <td class="text-nowrap">${item.totalPeople}</td>
                                         
                                        <td class="text-nowrap">${item.mobile}</td>
                                        <td class="text-nowrap">${item.price}</td>
                                         <td class="text-nowrap">${item.notice}</td>
                                       
                                        <td class="text-nowrap no-print">${formatDate(item.createdAt, true)}</td>
                                        <!--(Above line) calling the FORMATDATE function(used to set the exactly date and time) -->
                                        <td class="text-nowrap no-print">
                                        <!--(Above line)nowrap used so our icon not move in booking form-->
                                          
                                        <!--CREATING BUTTOS FOR EDIT LIKE-->

                                            <!--(p-1,px-2 is used for reduce size)-->
                                            <!--(below)${tmp == 'allArchieveData' && 'd-none'} meaning when this key come (we don't show EDIT BUTTON) -->
                                            <button class="${tmp == 'allArchieveData' && 'd-none'} btn edit-btn p-1 px-2 btn-primary ">
                                                <i class="fa fa-edit"></i>
                                            </button>

                                            <button class="btn checkin-btn p-1 px-2 text-white btn-info">
                                                <i class="fa fa-check"> </i>
                                            </button>
                                            
                                            <button class="btn del-btn p-1 px-2  btn-danger">
                                                <i class="fa fa-trash"></i>
                                            </button>

                                        </td>
                                    </tr>

    `
    });
    deleteDatafunction(element, array, key);
    updateDataFunction(element, array, key);
    CheckInAndCheckout(element, array, key);
}




//UPDATE CODING(BUTTON) (SIMILAR LIKE DELETE BUTTON WORK)
const updateDataFunction = (element, array, key) => {
    //IN this loop we perform the SELECT work
    let allEditButton = element.querySelectorAll(".edit-btn");
    //we start the loop
    allEditButton.forEach((btn, index) => {
        //(below lime)when update button clicked so our register button open to update the data
        //(below line) open the registration form
        btn.onclick = () => {

            //(above line) used to open form on clck
            //when update button clicked then the registration form
            let tmp = key.split("_")[1];
            tmp == 'allBookingData' ? bRegisterBtn.click() : inHRegisterBtn.click()

            //(return false) function is used to disable the code below it 
            //for update button
            let allButton = tmp == 'allBookingData'
                ? bookingForm.querySelectorAll("button")
                : inHouseForm.querySelectorAll("button")


            let allInput = tmp == 'allBookingData'
                ? bookingForm.querySelectorAll("input")
                : inHouseForm.querySelectorAll("input")


            let textarea = tmp == 'allBookingData'
                ? bookingForm.querySelector("textarea")
                : inHouseForm.querySelector("textarea")


            //(below line) it add the Update button
            //(update button) is already created inprofile.html we just implement it here
            allButton[0].classList.add("d-none");
            //we remove the register button(because we have to update not register)
            allButton[1].classList.remove("d-none");

            //when we click on update button(data comeback which we already register)
            //NOW we want only data(data stored in array) and we give INDEX to array to fetch data form array
            let object = array[index];
            //(above) now we fetch direct data from ARRAY not from table(above line when which update button you click all of that data come
            //NOW (the data we get from array) we fill back in REGISTRATION FORM
            allInput[0].value = object.fullname;
            allInput[1].value = object.location;
            allInput[2].value = object.room;
            allInput[3].value = object.totalPeople;
            allInput[4].value = object.checkInDate;
            allInput[5].value = object.checkOutDate;
            allInput[6].value = object.price;
            allInput[7].value = object.mobile;
            textarea.value = object.notice;
            //when we click on update button(it further click on register button)
            allButton[1].onclick = () => {
                let formdata = {
                    notice: textarea.value, //(bookingtextarea->stores the dat of form(top created variable))
                    createdAt: new Date(),
                }
                for (let element of allInput)
                //elemtn varibale storing the data from(allBInput)
                {
                    //we read th name and keyword of all input field(when we update it)
                    let key = element.name; //key variable store the name(from element)
                    let value = element.value;
                    formdata[key] = value //formdata storing the(new data and other dta so we store other input field in this also
                    // and we save the data from formdata into array(created belwo allBookingData)    
                }
                //now we update the data in array
                array[index] = formdata;
                allButton[0].classList.remove("d-none")
                allButton[1].classList.add("d-none");

                //(below ) now we cut the form after update it
                tmp == "allBookingData"
                    ? bookingForm.reset('')
                    : inHouseForm.reset('');

                //now we cut the form (after update and reset it)
                tmp == "allBookingData"
                    ? modalCloseBtn[0].click()
                    : modalCloseBtn[1].click()

                //now our data is update on array not in local storage(local storage diplaying data on screen)
                localStorage.setItem(key, JSON.stringify(array));
                //(below) call this function to see the update data on display
                ShowData(element, array, key);

            }



        }
    });

}
//END-UPDATE CODING 






//DELETE BUTTON WORK(side icon where our data display on screen)
//BOOKING DELETE CODING
function deleteDatafunction(element, array, key) {
    let alldeleteBtn = element.querySelectorAll(".del-btn"); //(delelet button(red color))
    //now we strat the loop for all delete button(data adding dleet button adding(red color->write where register data show on page))
    alldeleteBtn.forEach((btn, index) => {
        //((btn->all button come) and index store their serial number,we need the index to delete the data from array)
        //(belo line) funciton callback function
        btn.onclick = () => {

            //(below line) ARE YOU SHURE TO DELTE IT
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        //(END 0F ARE YOU SURE TO DELETE)
                        //(below line) it delete the data from array not from where data diplaying
                        //(below line) index is important to delete data form array(1->means delete only 1 row),if you do(index,2) it delet 2
                        array.splice(index, 1);
                        //now we delete data from local storage
                        //(below line) when data is deleted from array
                        //now the key(created for storing data in local storage we pick it,and our new array)
                        //new arrar(allBookingData) from which our data deleted we update that array into local storage 
                        //(so once our data delete from local storage) it deleet from the display screen
                        localStorage.setItem(key, JSON.stringify(array));
                        //(top line) now data is deleted permantly
                        showBookingRooms();


                        //(blow line)calling ShowBookingData to (show the new data on display after delet)
                        //(below) show data (->(bookingListTableBody it bringing the content of the table )&allBookingDta is array)
                        ShowData(element, array, key);


                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                    } else {
                        swal("Your imaginary file is safe!");
                    }
                });


        }

    });
}


//CheckIn and Checkout coding (STAT)
//(below line) const means constant
const CheckInAndCheckout = (element, array, key) => {
    //(below) .check-btn is the id give in (Button->show data)
    let allCheckBtn = element.querySelectorAll(".checkin-btn");
    //starting thr loop for(allcheckBtn)
    allCheckBtn.forEach((btn, index) => {
        //(above) receiving the btn and the index(which help to fetch dataa from array)
        btn.onclick = () => {
            //(above use when we click on checkin button (tick option))
            let temprary = key.split("_")[1];
            //(above) it seprate key (allBookingData and INhouseData so we can perform the work on it to push the data and apply conditions)



            //Now we fetch the data from (Booking table when we click on btn)
            let data = array[index];
            //(above ) when we click button they fetch the button from array acc to index
            //(ARRAY) is storing the data of BOOKING and Inhouse (so we cannot directly push the data)
            //(Key) similar key have 2 key 1 of BOOKING nad other of INHOUSE (we want to push data INHOUSE KEY)
            ///AFTER FETCH TEH DATA FROM ARRAY ( let data = array[index];) we delete data from BOOKING
            array.splice(index, 1);
            //(above) after deltion we updat now in local storage
            localStorage.setItem(key, JSON.stringify(array));
            //(above) replace the array after deletion (in booking) and update new array in LocalStorage
            //NOW Push the data into (INHOUSE ARRAY)
            if (temprary == "allBookingData")
            //(above if in(temprary) value come(allBookingData so we understand it was clicked by BOOKING(tick option in table)))
            {
                //(below) now we push data (InhOUSEData ) which we ftech from (let data = array[index];)
                allInHouseData.unshift(data);
                localStorage.setItem(user + "_allInHouseData", JSON.stringify(allInHouseData));
                ShowData(element, array, key);
                showBookingRooms();
                showInHouseRooms();
                showTotal();
            }
            else if (temprary == "allArchieveData") {
                //(above) wehn click on temprary and (allArchieveData) tick comes then
                //it will pus this data into back to (BOOKING DATA) ,why we back this data ?
                //bec if same customer come after long time,we search on data and bring it back (by update it) after rewriting it
                allBookingData.unshift(data);
                localStorage.setItem(user + "_allBookingData", JSON.stringify(allBookingData));
                ShowData(element, array, key);
                showInHouseRooms();
                showBookingRooms();
                showTotal();


            }
            else { //THIS IS FOR ARCHIEVE DATA

                //(below) now we push data (allArchieveData ) which we ftech from (let data = array[index];)
                allArchieveData.unshift(data);
                localStorage.setItem(user + "_allArchieveData", JSON.stringify(allArchieveData));
                ShowData(element, array, key);
                showBookingRooms();
                showInHouseRooms(); 
                showTotal();
            }

        }
    });

}

//checkin and checkout coding(end)





//SHow Booking rooms
const showBookingRooms = () => {
    //(below) put this empty
    showBookingRoomsElement.innerHTML = '';
    allBookingData.forEach((item, index) => {
       
        showBookingRoomsElement.innerHTML += `
    <div class="card text-center px-0 col-md-2">
                <div class="bg-danger text-white fw-bold card-header">
                    <!--below it's the header where we show the booked rooms-->
                    ${item.room}
                </div>
                <div class="bg-success text-white fw-bold card-body">
                    <p>${formatDate(item.checkInDate)}</p>
                    <p>TO</p>
                    <p>${formatDate(item.checkOutDate)}</p>
                </div>
                </div>
    `;
    })
}
showBookingRooms();


//SHow inhouse rooms
const showInHouseRooms = () => {
    //(below) put tbis empty
    showInHouseRoomsElement.innerHTML = '';
    allInHouseData.forEach((item, index) => {
        showInHouseRoomsElement.innerHTML += `
    <div class="card text-center px-0 col-md-2">
                <div class="bg-danger text-white fw-bold card-header">
                    <!--below it's the header where we show the booked rooms-->
                    ${item.room}
                </div>
              <div class=" card-body">
            
                               <img src="${item.inHouse ? '../img/man.png' : '../img/lock.jpg'}" class="w-100" alt="">
                            </div> 

                             <div class="card-footer">
                            
                                <button class="in-btn action-btn btn text-white">In</button>
                                <button class="out-btn action-btn btn text-white">Out</button>
                            </div>

                </div>
    `;
    });
    //(below work for button (if guest present in room then (put man image) tohriwse put lock image(man not in hotel)))
    //in coding
     let allInBtn = showInHouseRoomsElement.querySelectorAll(".in-btn");
    allInBtn.forEach((btn,index)=>{
        btn.onclick = () =>{
          //first we fetch the data
          let data = allInHouseData[index];
          //below doing this to put (true) in house data
          data.inHouse = true;
          //now our data replace(which we update from false->true) in allUnHouseData array
          allInHouseData[index] = data;
          localStorage.setItem(user+"_allInHouseData",JSON.stringify(allInHouseData))
          showInHouseRooms();
        }
    })
    //out coding(for button)
let allOutBtn = showInHouseRoomsElement.querySelectorAll(".out-btn");
allOutBtn.forEach((btn,index)=>{
    btn.onclick = () =>{
      //first we fetch the data
      let data = allInHouseData[index];
      //below doing this to put (true) in house data
      data.inHouse = false;
      //now our data replace(which we update from false->true) in allUnHouseData array
      allInHouseData[index] = data;
      localStorage.setItem(user+"_allInHouseData",JSON.stringify(allInHouseData))
      showInHouseRooms();
    }
})
}
showInHouseRooms();



//show Total Coding

const showTotal = () => {
    //(below) print the leangth (how much data added 7 rows) so they print 7 number on our button with name 
    AlltotalBtn[0].innerText = "Total Booking = " + allBookingData.length;
    //(below) print the total number on 1 index button (InHuse Button)
    AlltotalBtn[1].innerText = "Total InHouse = " + allInHouseData.length;
    AlltotalBtn[2].innerText = "Total Archieve = " + allArchieveData.length;
}
showTotal();


//(end) Show Total Coding



//LOGOUT CODING
logoutBtn.onclick = () => {
    logoutBtn.innerHTML = "please wait.."
    // after some time we send the user to login page
    setTimeout(() => {
        logoutBtn.innerHTML = "Logout";
        // after click logout delete the(SESSION STORAGE KEY) to delete the data
        sessionStorage.removeItem("__au__");
        //sending the user to the home page
        window.location = "../index.html";

    }, 3000)
}
console.log(userInfo);



//START BOOKING STORE CODING
//(e) used to declare the event
bookingForm.onsubmit = (e) => {
    e.preventDefault(); // if you not use your page reload they want server to go their
    // the above line used to declare the defination of call by function
    registrationFunc(bookingTextarea, allBInput, allBookingData, user + "_allBookingData");

    // declaring the event default

    //after register the data(In booking form) RESET it to use it agin 
    bookingForm.reset('');
    //(below line) now your modum(booking form) cut when data is registed (bCloseBtn is variable defien top)
    modalCloseBtn[0].click();
    ShowData(bookingListTableBody, allBookingData, user + "_allBookingData");
    showTotal();
    showBookingRooms();
}



//START CASHIER STORE CODING
//(e) used to declare the event
cashierForm.onsubmit = (e) => {
    e.preventDefault(); // if you not use your page reload they want server to go their
    // the above line used to declare the defination of call by function
    registrationFunc(null, allCashierInput, allCashData, user + "_allCashData");

    // declaring the event default

    //after register the data(In booking form) RESET it to use it agin 
    cashierForm.reset('');
    //(below line) now your modum(booking form) cut when data is registed (bCloseBtn is variable defien top)
    modalCloseBtn[2].click();

    //(below) calling the showcashfunction to see the data newly updated fast instead of realoading it 
    showCashierFunction();

}



//START In HOUSE BOOKING CODING
//(e) used to declare the event
inHouseForm.onsubmit = (e) => {
    e.preventDefault(); // if you not use your page reload they want server to go their
    // the above line used to declare the defination of call by function
    registrationFunc(InHTextarea, allInHInput, allInHouseData, user + "_allInHouseData");

    // declaring the event default

    //after register the data(In booking form) RESET it to use it agin 
    inHouseForm.reset('');
    //(below line) now your modum(booking form) cut when data is registed (bCloseBtn is variable defien top)
    modalCloseBtn[1].click();
    ShowData(inHouseListTableBody, allInHouseData, user + "_allInHouseData");
    showTotal();
    showInHouseRooms();
}


const searchFunction = () => {
    //(below) it meaning search the word by breav=king i    nto letters(a,av,avi,avin,avine,avinee,avineet) and it comes in SMALL letters
    let value = searchElement.value.toLowerCase();
    //(below) (.tabcontent is the mian in which all our table comes(BOOKINGTABLE,INHOUSE TABLE etc in html, and search-pane is id given to all Tbale))
    //(below) we do this te search the letter on table
    let tableElement = document.querySelector(".tab-content .search-pane.active");
  

    //NOW we slect the Table Row
    //(below) selecting th table row from table body (from variable->html)
    let tableRow = tableElement.querySelectorAll("tbody tr");
    for (let el of tableRow) {
        //below ->fetch the data from table from 0 index
        let srNo = el.querySelectorAll("TD")[0].innerText;
        let location = el.querySelectorAll("TD")[1].innerText;
        let roomNo = el.querySelectorAll("TD")[2].innerText;
        let fullname = el.querySelectorAll("TD")[3].innerText;
        let Mobile = el.querySelectorAll("TD")[7].innerText;
        let Price = el.querySelectorAll("TD")[8].innerText;
        if (srNo.indexOf(value) != -1)
        //(above) mathcing srNo if it; not equal to -1 then
        {
            //if it match we hide the tablerow (other data hide only that data show)
            el.classList.remove('d-none');
        }
        else if (location.toLowerCase().indexOf(value) != -1)
        //(now i can cehck with Location (data can be find by help of LOCATION alse))
        {
            el.classList.remove('d-none');
            
        }
        else if (roomNo.toLowerCase().indexOf(value) != -1 )
        //(now i can cehck with RoomNo (data can be find by help of RoomNo alse))
        {
            el.classList.remove('d-none');
            
             
            
        }
        else if (fullname.toLowerCase().indexOf(value) != -1)
        //(now i can cehck with Name (data can be find by help of Name alse))
        {
            el.classList.remove('d-none');
        }
        else if (Mobile.toLowerCase().indexOf(value) != -1)
        //(now i can cehck with Mobile number (data can be find by help of Mobile alse))
        {
            el.classList.remove('d-none');
        }
        else if (Price.toLowerCase().indexOf(value) != -1)
        //(now i can cehck with Price (data can be find by help of Price alse))
        {
            el.classList.remove('d-none');
        }
        else {
            //if it not match (srNo not matched then)
            el.classList.add('d-none');   // so all data will be hide (so thta data not exist)
        }
    }


}


//SEARCH CODING (START)
//(below) on searching we have to perform some operation
searchElement.oninput = () => {
    searchFunction()
}
//SEARCH CODING(END)




//refresh ui data coding 
for (let btn of allTabBtn)
//this function is used to display the new data on table frequently 
{
    btn.onclick = () => {
        ShowData(bookingListTableBody, allBookingData, user + "_allBookingData");
        ShowData(inHouseListTableBody, allInHouseData, user + "_allInHouseData");
        ShowData(archieveListTableBody, allArchieveData, user + "_allArchieveData");
    }
}






ShowData(bookingListTableBody, allBookingData, user + "_allBookingData"); //(allBookingData is array) and(bookingListTableBody) fetch the data from the key
ShowData(inHouseListTableBody, allInHouseData, user + "_allInHouseData");
ShowData(archieveListTableBody, allArchieveData, user + "_allArchieveData");



//Cashier coding (START)


//show cashier work..
const showCashierFunction = () => {
    //(below) setting toal amount initially 0
    let totalAmount = 0;
    //(below when loop start it empty and add the data acc to loop ) we do this so similar data not add and siplay it agian
    cashierTableBody.innerHTML = '';
    //starting the loop
    allCashData.forEach((item, index) => {
        //(below we use + to conver STRING to NUMber otherwise our total amount come in add (string format 10+20=`1020 this is wrong due to string addition))
        totalAmount += +item.amount;
        //(above) using + to add the previous data with new data 
        //here we show the data 

        cashierTableBody.innerHTML += `
                                   
                                    <tr>
                                    <!--index+1 start the counting with 1-->
                                        <td>${index + 1}</td>
                                        <td>${item.roomNo}</td>
                                        <td>${item.cashierName}</td>
                                        
                                        <td>${formatDate(item.createdAt, true)}</td>
                                        <td>${item.amount}</td>
                                    </tr>
        `
    });
    //(below) setting the total amount in cashtotal(to display in HTMl)
    cashTotal.innerHTML = "<i class='fa fa-rupee'></i> " + totalAmount;
    //(above) we use i calss to write the symbol RS in front of our cash
}
showCashierFunction();


//show cashierArchieve work..
const showCashArchFunction = () => {
    //(below) setting toal amount initially 0
    let totalAmount = 0;
    //(below when loop start it empty and add the data acc to loop ) we do this so similar data not add and siplay it agian
    cashierArchieveTableBody.innerHTML = '';
    //starting the loop
    allCashArchieveData.forEach((item, index) => {
        //(below we use + to conver STRING to NUMber otherwise our total amount come in add (string format 10+20=`1020 this is wrong due to string addition))
        totalAmount += +item.total;
        //(above) using + to add the previous data with new data 
        //here we show the data 

        cashierArchieveTableBody.innerHTML += `
                                   
                                    <tr>
                                    <!--index+1 start the counting with 1-->
                                        <td>${index + 1}</td>
                                      
                                        <td>${item.cashierName}</td>
                                        
                                        <td>${formatDate(item.createdAt, true)}</td>
                                        <td>${item.total}</td>
                                    </tr>
        `
    });
    //(below) setting the total amount in archievecash(to display in HTMl)
    archieveTotal.innerHTML = "<i class='fa fa-rupee'></i> " + totalAmount;
    //(above) we use i calss to write the symbol RS in front of our cash
}
showCashArchFunction();



cashBtn.onclick = () => {

    allCashierInput[2].value = sessionStorage.getItem("c_name");
    //(above) it selct the (name) from session storage and set into the from (CASHIER form where it's name displayed) 
}



cashierBtn.onclick = () => {
    if (sessionStorage.getItem("c_name") == null)
    //(above) we create new key(c_name) if it is null then we enter the name of the cashier
    {
        let name = window.prompt("Enter your name ! ");
        if (name)
        //(above) if name is present then this if-else execute
        {
            sessionStorage.setItem("c_name", name);
            //(above) is name exist (create the key in session storage and store the data (name) which will give)
        }
        else {
            allTabBtn[0].classList.add("active");
            //(above) this active the BOOKING BUTTON if name is not preent 
            BookingTab.classList.add("active");
            //(above) it add the TABLE (when active seleted)
            cashierBtn.classList.remove("active");
            //(above line) remove CASHIER BUTTON FROM ACTIVE to show the BOOKING BUTTON ACTIVE
            cashierTab.classList.remove("active");
            //(above) it add the CASHIER TABLE if it is active
        }
    }
    else {
        //(below) if name is exist then else print
        allCashierInput[2].value = sessionStorage.getItem("c_name");
        //(above) it selct the (name) from session storage and set into the from (CASHIER form where it's name displayed) 
    }
}
//Cashier coding (END)


//close cashier coding
closeCashierBtn.onclick = () => {
    //(above) when click on closeCshier bUtton we check 1st that data is present in Cashier table or not
    if (allCashData.length > 0)
    //(above) if allcashData length is greater than 0 it means data is present in it
    {
        let data = {
            //(below) by reading the data fromSessionStorage we fetch the cashier Name from it
            cashierName: sessionStorage.getItem("c_name"),
            //(below) we get the  total from reading cashTotal
            total: cashTotal.innerText,
            //(it pass the new date)
            createdAt: new Date()
        }
        //(below) pushing the (data) in our array
        allCashArchieveData.push(data);
        //(below) put this array empty to see the updated value (when showCshierfunction calling below )
        allCashData = [];
        //now we delete the data after fetch it 
        localStorage.removeItem(user + "_allCashArchieveData");
        //now we store the above data (creating the key and store the (array(array and key name is same don't confuse)) in it)
        localStorage.setItem(user + "_allCashArchieveData", JSON.stringify(allCashArchieveData));
        
        //(below) remove the cashier name when click on Close cashie rbutton and ask agin new name
        sessionStorage.removeItem("c_name");     
        //(below) calling showfunction to see the updated data  
        showCashierFunction();


    }
    else {
        swal('Warning', "There is Nocash to close", 'warning');
    }
}

//YOUT PROFILE PAGE which open after login cannot open directly(login->profile page)
//because once user click logout (the data delete from session key) 
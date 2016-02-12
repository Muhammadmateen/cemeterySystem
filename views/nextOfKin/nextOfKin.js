


app.controller("nextOfKinctrl", function(firebaseUrl,$firebaseArray,$firebaseObject,$scope){

    var vm = this;
    var ref = new Firebase(firebaseUrl);
    vm.hideDetails =true;
    vm.showForm = true;

    var ref = new Firebase(firebaseUrl+"Graveyard Location");
    vm.graveyardName = $firebaseArray(ref);



    vm.graveyardName.$loaded().then(function()
    {
        vm.showForm = false;
    })

    vm.gId;
    vm.graveId = function(id)
    {
        for(var i =0; i < vm.graveyardName.length;i++)
        {
            if(id == vm.graveyardName[i].graveyard_name)
            {
                vm.gId = vm.graveyardName[i].$id;
                //console.log(vm.gId);
                break;
            }
        }
    };


    vm.bDetails;
    vm.searchBdetails = function(id)
    {
        var ref = new Firebase(firebaseUrl+"Graveyard Location/"+vm.gId+"/Occupied_Graves/"+vm.burialId);
        vm.bDetails = $firebaseObject(ref);
        vm.bDetails.$loaded().then(function()
        {
            vm.bDetails.date = new Date(vm.bDetails.date);

            if(vm.bDetails.GraveNo != undefined )
            {
                vm.hideDetails =false;

            }
            else
            {
                vm.hideDetails =true;
                alert("No record found!")

            }

        })
    };

});



/*

<div id="page-wrapper" class="contact">

    <!-- Header -->

<header id="header" class="alt">

<nav id="nav">
<ul>

<li class="current"><a ui-sref="home">Home</a></li>
<li><a ui-sref="grave_availability">Grave Availability</a></li>
<li><a ui-sref="sign-In">Sign In</a></li>
<li><a ui-sref="nextOfKin">Next Of Kin</a></li>
<li><a ui-sref="about-us">About Us</a></li>
<li><a ui-sref="contact-us">Contact Us</a></li>
</ul>
</nav>
</header>



    <!-- Main -->
<article id="main">

<header class="special container">
<span class="icon fa-bar-chart-o"></span>
<h2>Next Of Kin </h2>

</header>

    <!-- One -->
<section class="wrapper style4 special container 75%">

    <!-- Content -->
<div class="content">

<div>

<h1><b>Burial Details</b></h1>


<div>

<form name="certificateIssuance" ng-submit="ctrl.searchBdetails()">

<div style="text-align: left">
<label><b>Select Graveyard</b></label>
<select ng-model="ctrl.graveyard" ng-change="ctrl.graveId(ctrl.graveyard)" required>
<option ng-repeat="aa in ctrl.graveyardName">{{aa.graveyard_name}}</option>
</select>
</div>

<div style="text-align: left">
<br>
<label><b>Enter Key</b></label>
<input type="text" ng-model="ctrl.burialId" required placeholder="Enter Key">
</div>

<br><br>

<button type="submit" ng-disabled="certificateIssuance.$invalid">Search</button>
</form>

<div ng-hide="ctrl.hideDetails" style="text-align: left">
<table class="export-table">
<tr>
<th>Grave No</th>
<td>{{ctrl.bDetails.GraveNo}}</td>
</tr>
<tr>
<th>Burial Name</th>
<td>{{ctrl.bDetails.burialName}}</td>
</tr>
<tr>
<th>Father Name</th>
<td>{{ctrl.bDetails.fatherName}}</td>
</tr>
<tr>
<th>Gender</th>
<td>{{ctrl.bDetails.gender}}</td>
</tr>
<tr>
<th>Age</th>
<td>{{ctrl.bDetails.age}}</td>
</tr>
<tr>
<th>Date</th>
<td>{{ctrl.bDetails.date}}</td>
</tr>
<tr>
<th>Address</th>
<td>{{ctrl.bDetails.address}}</td>
</tr>
<tr>
<th>Picture</th>
<td><img ng-src={{ctrl.bDetails.pic}}></td>
</tr>


</table>
</div>


</div>



</div>


</div>
</section>

</article>

    <!-- Footer -->
<footer id="footer">


<ul class="copyright">
<li>&copy; Created by M.Bilal Yousuf </li>
</ul>

</footer>

</div>
<ui-view></ui-view>*/

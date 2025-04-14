function sourcecode(){
    let sleep_time = document.getElementById('sleeping-hrs').value
    let travel_hrs = document.getElementById('travel-hrs').value
    let vehicle = document.querySelector('input[name ="vehicle"]:checked')?.value
    let food = document.querySelector('input[name = "food"]:checked')?.value
    let time = document.querySelector('input[name = "spending_time"]:checked')?.value
    let power = document.querySelector('input[name = "power"]:checked')?.value
    let unit = parseFloat(document.getElementById('units').value);

    sleep_time = parseFloat(sleep_time);
    travel_hrs = parseFloat(travel_hrs);
    

    if(isNaN(sleep_time)||sleep_time<0||sleep_time>24){
        alert("please enter the valid hours");
        return;
    }
    if(isNaN(travel_hrs)||travel_hrs<0||travel_hrs>24){
        alert('please enter the valid hours that you travel');
        return;
    }
    if(!vehicle){
        alert("Select any vehicle!!!");
        return;
    }
    if(!food){
        alert("select any food type");
        return;
    }
    if(!time){
        alert('slect any option according to question');
        return;
    }
    if(!power){
        alert("select true or false");
        return;
    }
    if(isNaN(unit)){
        alert('enter no of units');
        return;
    }
                const co2perhr = sleep_time * 0.09
                const yearlyco2 = co2perhr * 365;

                const travelco2perhr = {
                    car: 2.3,
                    bike:1.2,
                    public_transport: 0.5,
                    high_pollution_Vehicles:3.0,
                    none: 0
                };
                let vehicleco2perhr = travelco2perhr[vehicle]
                let vehicleco2peryear = travel_hrs * vehicleco2perhr *365;
    
                const foodperday = {
                    veg:1,
                    non_veg:3,
                    both:2
                };
                let foodco2perday = foodperday[food]
                let foodco2peryear = foodco2perday * 365;

                const spend = {
                    inside:0.7,
                    outside:1.2
                };
                let spending_perday = spend[time]
                let spending_peryear = spending_perday * 365;

                const energy ={
                    yes:0,
                    no: 2
                }
                let co2_energy_perday = energy[power]
                let co2_energy_peryear = co2_energy_perday * 365;

                const co2_based_current_peryear = unit * 12;
            

              const output =  co2_energy_peryear + spending_peryear + foodco2peryear + vehicleco2peryear + yearlyco2 + co2_based_current_peryear;
              const co2_absorbed_per_tree = 24; // in kg per year
    const trees_to_plant = Math.ceil(output / co2_absorbed_per_tree); 
    localStorage.setItem("result",trees_to_plant)
    // localStorage.setItem("energy_peryear",co2_energy_peryear)
    // localStorage.setItem("spending_time",spending_peryear)
    // localStorage.setItem("foodperyear",foodco2peryear)
    // localStorage.setItem("vehiclehrs",vehicleco2peryear)
    // localStorage.setItem("timing",yearlyco2)
    window.location.href ="result.html";
    
}
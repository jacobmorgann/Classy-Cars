let car = new Cars ("Honda",
                    "CRV",
                    2008,
                    10000,
                    1,
                    "Bass Boosted Stero",
                    "4 Wheel Drive",
                    "GPS");
let carAnnouncement = document.querySelector(".bestCar")
carAnnouncement.textContent = "The " + car.typeCar + " " + car.makeCar + " is the best option on the lot today! It includes " + car.special_Gadget1 + ", " + car.special_Gadget2 + ", and " + car.special_Gadget3;

const special_Gadgets = ["Bass Boosted Stero", "4 Wheel Drive", "GPS", "Vacuum", "Dash Cam", "Padded Seat Cushion"];

const carLot = new Array ()

for (let index = 1; index <= 10; index ++){
    car = new Cars (
        "Chevy", "Equinox", 2016, 15000, 3,
        special_Gadgets [Math.floor(Math.random()*special_Gadgets.length)],
        special_Gadgets [Math.floor(Math.random()*special_Gadgets.length)],
        special_Gadgets [Math.floor(Math.random()*special_Gadgets.length)]
    );

    carLot.push(car)
}
const carList = document.createElement("ul");

carLot.forEach(element => {
    let str = `${element.special_Gadget1}, ${element.special_Gadget2} and ${element.special_Gadget3}`;
    let carListItem = document.createElement("li");
    carListItem.textContent = str;
    carList.append(carListItem);
});

let carArea = document.querySelector(".selectionOfCars")
carArea.append(carList);

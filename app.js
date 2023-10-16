var carVariants = {
    honda: {
        civic: {
            type: {
                img: "images/reborn.jpg",
                name: "Honda Civic Reborn",
                model: 2006,
                color: ["red", "black", "white"],
                description: "It's fuel efficient, stylish, and fun to drive, all traits that make the 2024 Honda Civic a winner in our book.",
                price: 150000
            }
        },
        city: {
            type: {
                img: "images/city.jpg",
                name: "Honda City",
                model: 2016,
                color: ["red", "black", "white"],
                description: "ABS and EBD are still standard, as are the dual front airbags. Unlike previous generations, the entire City model range is all powered by the L15Z1.",
                price: 150000
            }
        }
    },
    kia: {
        sorento: {
            type: {
                img: "images/sorento.jpg",
                name: "Kia Sorento",
                model: 2022,
                color: ["blue", "silver", "gray"],
                description: "The Kia Sorento offers a spacious interior, advanced safety features, and a comfortable ride.",
                price: 250000
            }
        },
        sportage: {
            type: {
                img: "images/sportage.jpg",
                name: "Kia Sportage",
                model: 2019,
                color: ["white", "black", "red"],
                description: "The Kia Sportage is a compact SUV known for its reliability and stylish design.",
                price: 180000
            }
        }
    },
    toyota: {
        sedan: {
            type: {
                img: "images/sedan.jpg",
                name: "Toyota Sedan",
                model: 2021,
                color: ["silver", "blue", "white"],
                description: "The Toyota Sedan is a practical and fuel-efficient car with a comfortable interior.",
                price: 170000
            }
        },
        hatchback: {
            type: {
                img: "images/hatchback.jpg",
                name: "Toyota Hatchback",
                model: 2020,
                color: ["red", "black", "gray"],
                description: "The Hatchback combines style and versatility, making it a popular choice among buyers.",
                price: 180000
            }
        }
    },
    suzuki: {
        swift: {
            type: {
                img: "images/swift.jpg",
                name: "Suzuki Swift",
                model: 2018,
                color: ["blue", "red", "silver"],
                description: "The Suzuki Swift is a compact car known for its nimble handling and affordability.",
                price: 130000
            }
        },
        vitara: {
            type: {
                img: "images/vitara.jpg",
                name: "Suzuki Vitara",
                model: 2020,
                color: ["gray", "black", "white"],
                description: "The Suzuki Vitara is a compact SUV with a comfortable interior and good fuel economy.",
                price: 200000
            }
        }
    }
};

var company = document.getElementById("company")
var brand = document.getElementById("brand")
var allCars = document.getElementById("allCars")



for (var key in carVariants) {
    // console.log(key)
    company.innerHTML += `
     <option value="${key}" > ${key.toUpperCase()}</option>
     `
    for (var key1 in carVariants[key]) {
        for (var key2 in carVariants[key][key1]) {
            console.log(carVariants[key][key1][key2])
                allCars.innerHTML += `
                <div class="col">
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title">${carVariants[key][key1][key2].name}</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
        <h6>Model: 2006</h6>
        <h2>150000</h2>
    </div>

    <div>
    <div>
                `
            }
        
    }


}
function onCompanyChange() {
    // console.log(company.value)
    for (var key in carVariants[company.value]) {
        brand.innerHTML += `
     <option value="${key}" > ${key.toUpperCase()}</option>
     `
    }
}
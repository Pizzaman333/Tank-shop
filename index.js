const tanksData = [
  {
    title: "T-72",
    price: 2000000,
    photo: "./images/T72.jpg",
    nation: "Soviet Union",
    era: "Cold War",
    description: "The T-72 was developed as a cost-effective, mass-producible main battle tank for the Soviet Union. It has been widely exported and remains in service in many countries with various upgrades. Its combination of mobility, armor, and firepower made it a staple of Cold War armored warfare."
  },
  {
    title: "A7V",
    price: 120000,
    photo: "./images/A7V.webp",
    nation: "Germany",
    era: "WW1",
    description: "The A7V was Germany’s only tank to see action in WWI. With thick armor and a crew of up to 18 men, it was heavily armed but slow. Only 20 were built, making it one of the rarest tanks of the war."
  },
  {
    title: "Leopard 2",
    price: 12000000,
    photo: "./images/Leopard2.jpg",
    nation: "Germany",
    era: "Modern",
    description: "The Leopard 2 is a highly regarded German main battle tank, featuring advanced armor and a powerful 120mm cannon. Renowned for its accuracy and mobility, it is widely used by NATO allies. Its continuous upgrades ensure its relevance in modern warfare."
  },
  {
    title: "T-34",
    price: 500000,
    photo: "./images/T34.jpg",
    nation: "Soviet Union",
    era: "WW2",
    description: "The T-34 was a revolutionary tank of World War II, combining sloped armor, mobility, and a powerful gun. Its simple yet effective design allowed for mass production, making it a backbone of Soviet armored forces. It played a crucial role in the defeat of Nazi Germany."
  },
  {
    title: "Mark V",
    price: 100000,
    photo: "./images/MarkV.jpg",
    nation: "UK",
    era: "WW1",
    description: "The Mark V was a British WWI tank that played a key role in breaking trench warfare deadlocks. With its distinctive rhomboid shape, it could cross trenches and navigate rough terrain. Despite being slow and cumbersome, it paved the way for future tank development."
  },
  {
    title: "M60 Patton",
    price: 500000,
    photo: "./images/M60Patton.jpg",
    nation: "USA",
    era: "Cold War",
    description: "The M60 Patton was the backbone of the U.S. armored forces during the Cold War. It featured a powerful 105mm gun and improved armor over its predecessors. Although replaced by the M1 Abrams, upgraded versions still serve in some countries today."
  },
  {
    title: "Renault FT",
    price: 80000,
    photo: "./images/RenaultFT.jpg",
    nation: "France",
    era: "Interwar",
    description: "The Renault FT was the world’s first tank to feature a fully rotating turret, setting the standard for future designs. Light and agile for its time, it saw combat in WWI and remained in service in various countries for decades."
  },
  {
    title: "Tiger 131",
    price: 4500000,
    photo: "./images/Tiger1.jpg",
    nation: "Germany",
    era: "WW2",
    description: "Tiger 131 is one of the most famous tanks from World War II, known for its thick armor and powerful 88mm gun. Despite its superior firepower, it was expensive and mechanically complex. Captured by British forces in 1943, it remains operational and is displayed at the Bovington Tank Museum."
  },
  {
    title: "Merkava",
    price: 4500000,
    photo: "./images/Merkava.jpg",
    nation: "Israel",
    era: "Modern",
    description: "Designed for crew survivability, the Merkava is Israel’s primary battle tank. It features a unique rear troop compartment, allowing it to transport infantry. Its advanced protection systems and powerful armament make it highly effective in urban and desert warfare."
  },
  {
    title: "T-28",
    price: 200000,
    photo: "./images/T28.jpg",
    nation: "Soviet Union",
    era: "Interwar",
    description: "The T-28 was a Soviet multi-turreted medium tank designed for breakthrough operations. While innovative, its complex design made it vulnerable to mechanical issues. It saw limited action during the Winter War and early WWII."
  },
  {
    title: "Vickers Medium Mark II",
    price: 150000,
    photo: "./images/VickersMediumII.jpg",
    nation: "UK",
    era: "Interwar",
    description: "The Vickers Medium Mark II was one of the first tanks to incorporate a fully enclosed rotating turret. It served in the British Army between WWI and WWII and influenced later tank designs. While slow, it provided valuable experience in armored warfare."
  },
  {
    title: "M4 Sherman",
    price: 400000,
    photo: "./images/M4Sherman.jpg",
    nation: "USA",
    era: "WW2",
    description: "The M4 Sherman was the workhorse of the U.S. military during World War II. Reliable and easy to produce, it was used in large numbers across multiple battlefronts. While not the most heavily armored or armed tank, its adaptability and mass production made it a crucial asset in the Allied victory."
  },
  {
    title: "T-90",
    price: 3000000,
    photo: "./images/T90.jpg",
    nation: "Russia",
    era: "Modern",
    description: "The T-90 is a modern Russian battle tank with a strong balance of firepower, protection, and mobility. It features reactive armor and an active protection system to counter threats. It is widely exported and serves as the backbone of Russia’s armored forces."
  },
  {
    title: "Challenger 2",
    price: 11000000,
    photo: "./images/Challenger2.jpg",
    nation: "UK",
    era: "Modern",
    description: "The Challenger 2 is the British Army’s main battle tank, known for its exceptional armor protection and rifled 120mm gun. It holds the record for the longest tank-on-tank kill. Despite its weight, it is highly durable and combat-proven in various conflicts."
  },
  {
    title: "Chieftain",
    price: 750000,
    photo: "./images/Chieftain.jpg",
    nation: "UK",
    era: "Cold War",
    description: "The Chieftain was the UK’s main battle tank during the Cold War, featuring heavy armor and a powerful 120mm gun. It set the foundation for future British tank designs and was exported to several nations. Its advanced firepower made it a formidable opponent in its era."
  },
  {
    title: "Panther",
    price: 6000000,
    photo: "./images/Panther.jpg",
    nation: "Germany",
    era: "WW2",
    description: "The Panther was Germany’s answer to Soviet armor, boasting superior firepower, armor, and mobility. It outclassed many Allied tanks but was plagued by reliability issues. Despite these problems, it was one of the most effective tanks of World War II."
  },
  {
    title: "AMX-56 Leclerc",
    price: 8500000,
    photo: "./images/Leclerc.jpg",
    nation: "France",
    era: "Modern",
    description: "The Leclerc is France’s cutting-edge main battle tank, boasting high-speed mobility and an autoloading 120mm gun. It is one of the fastest tanks in the world, capable of rapid deployment. Its sophisticated fire control system makes it a formidable force on the battlefield."
  },
  {
    title: "T-55",
    price: 250000,
    photo: "./images/T55.jpg",
    nation: "Soviet Union",
    era: "Cold War",
    description: "The T-55 was one of the most widely produced tanks in history, serving in numerous conflicts throughout the Cold War. Featuring a simple yet effective design, it was known for its durability and ease of maintenance. Many are still in service today with modifications."
  },
  {
    title: "M1 Abrams",
    price: 6000000,
    photo: "./images/M1Abrams.jpg",
    nation: "USA",
    era: "Modern",
    description: "The M1 Abrams is a modern main battle tank known for its advanced composite armor and powerful 120mm smoothbore gun. It features a gas turbine engine, providing exceptional speed and mobility. It has been a key component of U.S. military operations since the 1980s."
  },
  {
    title: "Stridsvagn 103",
    price: 3500000,
    photo: "./images/Strv103.jpg",
    nation: "Sweden",
    era: "Cold War",
    description: "The Stridsvagn 103, or S-Tank, was a Swedish Cold War-era main battle tank with a unique turretless design. Instead of a rotating turret, it used its suspension to aim its fixed 105mm gun. It featured an autoloader and was one of the most well-defended and low-profile tanks of its time."
}
];


const tanksElements = tanksData
  .map(
    (tank) => `<li class="tanks-item">
                <h2 class="tanks-title">${tank.title}</h2>
                <img class="tanks-image" src="${tank.photo}" alt="${tank.title}">
                <p class="tanks-text">Price: $${tank.price}</p>
            </li>`
  )
  .join("");
const tankSection = document.querySelector(".tanks");
tankSection.innerHTML = tanksElements;


// assets/js/data/tours.js

// Tours data
const toursData = {
    'zagora-2-days': {
        title: '2-Days Zagora Desert Tour',
        subtitle: 'Experience the magic of the Zagora Desert with an overnight stay in a Berber camp',
        heroImage: '../assets/images/tours/zagora-desert.jpg.jpeg',
        mainImage: '../assets/images/tours/zagora-desert.jpg.jpeg',
        price: 60,
        duration: '2 days / 1 night',
        location: 'Zagora Desert',
        groupSize: '2-50 people',
        rating: 4.8,
        galleryImages: [
            '../assets/images/tours/zagora-desert.jpg.jpeg',
            '../assets/images/tours/zagora1.jpeg',
            '../assets/images/tours/zagora2.jpeg',

        ],
        reviews: 145,
        description: `
            <h3>Tour Overview</h3>
            <p>This 2-days adventure takes you from Marrakech to the magical Zagora Desert, crossing the majestic High Atlas Mountains and exploring the ancient Kasbah of Aït Benhaddou along the way.</p>
            <p>Experience an overnight stay in a traditional Berber desert camp, enjoy camel trekking across golden dunes, and witness the spectacular sunset and sunrise over the desert landscape. The journey provides authentic cultural experiences with opportunities to connect with local Berber people and learn about their way of life.</p>
          
        `,
        mapImage: '../assets/images/itinerary/zagora.png',

        itinerary: [

        ],
        includes: [
            'Transportation in comfortable air-conditioned vehicle',
            'Hotel pickup and drop-off in Marrakech',
            'One night stay in the desert camp',
        ],
        bring: [
            'Comfortable clothing and walking shoes',
            'Warm jacket (desert nights can be cold)',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
        ],
        availability: 'Daily departures, year-round',
        additionalInfo: {
            'Difficulty': 'Easy - moderate',
            'Language': 'English, French, Arabic, Spanish',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 48h before'
        },
        relatedPrograms: ['ourika-valley', 'imlil-atlas', 'merzouga-3-days']
    },

    'ourika-valley': {
        title: 'Ourika Valley Day Trip',
        subtitle: 'Discover lush landscapes and Berber villages in the Atlas Mountains foothills',
        heroImage: '../assets/images/tours/ourika-valley.jpg',
        mainImage: '../assets/images/tours/ourika-valley.jpg',

        price: 20,
        duration: '1 day (8 hours)',
        location: 'Ourika Valley, Atlas Mountains',
        groupSize: '2-50 people',
        rating: 4.7,
        galleryImages: [
            '../assets/images/tours/ourika-valley.jpg',
            '../assets/images/tours/ourika1.jpeg',
            '../assets/images/tours/ourika3.jpeg',

        ],
        reviews: 187,

        description: `
            <h3>Tour Overview</h3>
            <p>Escape the city heat and discover the natural beauty of Ourika Valley, located just 30 kilometers from Marrakech in the foothills of the Atlas Mountains. This refreshing day trip takes you through scenic landscapes, traditional Berber villages, and along the refreshing Ourika River.</p>
            <p>Visit an authentic Berber home where you'll enjoy traditional Moroccan hospitality with mint tea and homemade bread. Learn about the traditional lifestyle of the indigenous Berber people who have inhabited these mountains for thousands of years.</p>
            <p>The highlight of the tour is a guided hike to the spectacular Setti Fatma waterfalls, where you can cool off in the clear mountain waters. Throughout the day, you'll have plenty of opportunities to capture stunning photographs of the valley's verdant landscapes and mountain vistas.</p>
        `,
        mapImage: '../assets/images/itinerary/ourika.png',
        itinerary: [

        ],
        includes: [
            'Round-trip transportation from your Marrakech accommodation',
            'Visit to a traditional Berber home with tea ceremony',
        ],
        bring: [
            'Comfortable walking shoes',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
        ],
        availability: 'Daily departures',
        additionalInfo: {
            'Difficulty': 'Easy to moderate (waterfall hike is moderate)',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['imlil-atlas', 'zagora-2-days', 'camel-ride']
    },

    'imlil-atlas': {
        title: 'Imlil Atlas Mountains Tour',
        subtitle: 'Hike through stunning mountain landscapes and traditional Berber villages',
        heroImage: '../assets/images/tours/imlil-atlas.jpg',
        mainImage: '../assets/images/tours/imlil-atlas.jpg',
        price: 20,
        duration: '1 day (9 hours)',
        location: 'Imlil, High Atlas Mountains',
        groupSize: '2-50 people',
        rating: 4.9,
        galleryImages: [
            '../assets/images/tours/imlil-atlas.jpg',
            '../assets/images/tours/imlil-atlas1.jfif',
            '../assets/images/tours/imlil-atlas2.webp',

        ],
        reviews: 109,
        description: `
            <h3>Tour Overview</h3>
            <p>Discover the breathtaking beauty of the High Atlas Mountains on this day trip to Imlil, a charming Berber village nestled at the foot of North Africa's highest peak, Mount Toubkal (4,167m). This tour offers a perfect blend of natural scenery, cultural immersion, and light adventure.</p>
            <p>From Marrakech, you'll journey through picturesque landscapes and traditional mountain villages, witnessing the authentic rural lifestyle of the Berber people who have inhabited these mountains for generations. Upon reaching Imlil, you'll enjoy a guided hike through terraced fields, walnut groves, and stunning viewpoints.</p>
            <p>The hiking route is tailored to your fitness level and preferences, with options ranging from easy walks to more challenging trails. Throughout the day, your knowledgeable guide will share insights about Berber culture, local flora and fauna, and the fascinating history of the region.</p>
        `,
        mapImage: '../assets/images/itinerary/imlil.png',

        itinerary: [

        ],
        includes: [
            'Round-trip transportation from your Marrakech accommodation',
            
        ],
        bring: [
            'Hiking or sturdy walking shoes',
            'Layered clothing (temperatures can vary in the mountains)',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
        ],
        availability: 'Daily departures, year-round',
        additionalInfo: {
            'Difficulty': 'Easy to moderate (hiking difficulty can be adjusted)',
            'Language': 'English, French, Arabic, Berber',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['ourika-valley', 'zagora-2-days', 'hot-air-balloon']
    },

    'marrakech-city-tour': {
        title: 'Marrakech City Tour',
        subtitle: 'Dive into the heart of Marrakech with a passionate local guide through vibrant souks and historic sites',
        heroImage: '../assets/images/tours/marrakech.jpeg',
        mainImage: '../assets/images/tours/marrakech.jpeg',
        galleryImages: [
            '../assets/images/tours/marrakech.jpeg',
            '../assets/images/tours/marrakech1.jpeg',
            '../assets/images/tours/marrakech3.webp',
        ],
        price: 60,
        duration: '3-4 hours',
        location: 'Marrakech Medina and New City',
        groupSize: '2-50 people',
        rating: 4.8,
        reviews: 289,
        description: `
        <h3>Tour Overview</h3>
        <p>Dive into the heart of Marrakech with a passionate local guide who will reveal the soul of this magical city. This comprehensive walking tour takes you through the labyrinthine streets of the ancient medina, where every alley tells a story and every door hides a secret.</p>
        <p>Wander through vibrant souks bursting with colors, aromas, and sounds that awaken all your senses. Discover historic palaces with intricate architecture, hidden gardens that offer peaceful respites, and the legendary Djemaa el-Fna square where Morocco's rich cultural heritage comes alive through storytellers, musicians, and performers.</p>
        <p>This isn't just a tour—it's a journey through colors, culture, and authentic Moroccan life. Your expert local guide will share insider knowledge, historical anecdotes, and cultural insights that you'd never discover on your own, making this an unforgettable immersion into the real Marrakech.</p>
    `,

        includes: [
            'Walking tour of Marrakech medina and main attractions',
            'Guided exploration of souks and artisan quarters',
            'Cultural insights and historical commentary',

        ],
        bring: [
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera for capturing colorful scenes',
        ],
        availability: 'Daily departures at 9:00 AM, year-round',
        additionalInfo: {
            'Difficulty': 'Moderate - involves 4-5 hours of walking on uneven surfaces',
            'Language': 'English, French, Arabic, Spanish (specify preference)',
            'Group Size': 'Small groups for intimate experience',
            'Confirmation': 'Immediate confirmation upon booking',
            'Cancellation': 'Free cancellation up to 24 hours before',
            'Duration': 'Approximately 6-7 hours with lunch break',
            'Meeting Point': 'Central Marrakech location (details provided upon booking)',
            'Weather': 'Tour operates in all weather conditions'
        },
        relatedPrograms: ['cooking-class', 'hammam-spa', 'majorelle-garden', 'quad-biking']
    },

    "ouzoud-waterfalls": {
        title: "Ouzoud Waterfalls Day Trip",
        subtitle: "Discover Morocco's most spectacular waterfalls surrounded by lush greenery",
        heroImage: "../assets/images/tours/ozod.jpeg", // Using existing image as placeholder
        mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder

        price: 20,
        duration: "8-0 hours",
        location: "Middle Atlas Mountains",
        groupSize: "4-50 people",
        rating: 4.8,
        galleryImages: [
            '../assets/images/tours/ozod.jpeg',
            '../assets/images/tours/ouzoud1.jpeg',
            '../assets/images/tours/ouzoud2.jpeg',

        ],
        reviews: 156,
        description: `
        <h3>Tour Overview</h3>
        <p>Experience the natural wonder of the Ouzoud Waterfalls on this full-day excursion from Marrakech. Standing at an impressive 110 meters (360 feet) tall, these cascading falls are the highest in North Africa and one of Morocco's most spectacular natural attractions.</p>
        
        <p>Your journey begins with a scenic drive through olive groves and traditional Berber villages in the Middle Atlas region. Upon arrival at Ouzoud, you'll be captivated by the magnificent waterfalls plunging dramatically into the river below, creating constant rainbows in the mist and a thundering soundtrack to your experience.</p>
        
        <p>With your knowledgeable guide, follow paths down to the basin of the falls where you can take a refreshing boat ride to get closer to the cascades (optional extra). Along the way, watch for the mischievous Barbary macaques, the only monkeys native to North Africa, that inhabit the area.</p>
        
        <p>After working up an appetite, enjoy lunch at a local restaurant overlooking the falls. The afternoon offers free time to further explore the area at your own pace, perhaps taking a swim in the natural pools (seasonal), visiting small local shops, or simply relaxing in this idyllic setting before returning to Marrakech.</p>
    `,
        mapImage: '../assets/images/itinerary/oroud.png',

        itinerary: [

        ],
        includes: [
            "Round-trip transportation from Marrakech in air-conditioned vehicle",
        ],
        bring: [
            "Comfortable walking shoes",
            "Sun protection (hat, sunglasses, sunscreen)",
            "Swimwear and towel (if you wish to swim, seasonal)",
            "Camera",
            "Light jacket (can be cool near the falls, especially in winter)"
        ],
        availability: "Daily, year-round",
        additionalInfo: {
            "Difficulty": "Moderate - includes walking on uneven terrain and steps",
            "Minimum Age": "None - suitable for all ages",
            "Languages": "English, French, Arabic",
            "Confirmation": "Immediate confirmation",
            "Cancellation": "Free cancellation up to 24 hours before",
            "Not Included": "Lunch (approximately 80-150 MAD per person), boat ride (approximately 20 MAD per person), gratuities"
        },
        relatedPrograms: ["ourika-valley", "essaouira", "imlil-atlas"]
    },

    "essaouira": {
        title: "Essaouira Day Trip",
        subtitle: "Explore the charming coastal city with its blue and white medina and fresh sea breeze",
        heroImage: "../assets/images/tours/essaouira.jpg", // Using existing image as placeholder
        mainImage: "../assets/images/tours/ourika-valley.jpg",

        price: 20,
        duration: "8-10 hours",
        location: "Atlantic Coast",
        groupSize: "4-50 people",
        rating: 4.7,
        galleryImages: [
            '../assets/images/tours/essaouira.jpg',
            '../assets/images/tours/essaouira1.jfif',
            '../assets/images/tours/essaouira2.jpeg',

        ],
        reviews: 142,
        description: `
        <h3>Tour Overview</h3>
        <p>Escape the heat and bustle of Marrakech for a refreshing day trip to Essaouira, a charming coastal city on Morocco's Atlantic shore. With its fortified medina, bustling fishing port, broad beaches, and refreshing sea breeze, Essaouira offers a perfect contrast to the inland cities.</p>
        
        <p>The journey to Essaouira takes you through the Moroccan countryside and the unique argan forests, where you might spot goats climbing the trees to eat the fruit. A stop at a local women's cooperative provides insight into traditional argan oil production and the opportunity to purchase authentic products.</p>
        
        <p>Upon arrival in Essaouira, you'll be captivated by the city's distinct character - a unique blend of Portuguese, Berber, and French influences visible in its architecture and culture. The UNESCO-listed medina with its blue and white color scheme, impressive ramparts, and artisan workshops is a photographer's dream.</p>

       
    `,
        mapImage: '../assets/images/itinerary/essaouira.png',

        itinerary: [

        ],
        includes: [
            "Round-trip transportation from Marrakech in air-conditioned vehicle",
            
        ],
        bring: [
            "Comfortable walking shoes",
            "Sun protection (hat, sunglasses, sunscreen)",
            "Light jacket or windbreaker (it can be windy on the coast)",
            "Camera",
            "Beach gear if you plan to enjoy the beach (seasonal)"
        ],
        availability: "Daily, year-round",
        additionalInfo: {
            "Difficulty": "Easy - mostly flat terrain with some walking",
            "Minimum Age": "None - suitable for all ages",
            "Languages": "English, French, Arabic",
            "Confirmation": "Immediate confirmation",
            "Cancellation": "Free cancellation up to 24 hours before",
            "Not Included": "Lunch (approximately 100-200 MAD per person), optional activities, gratuities"
        },
        relatedPrograms: ["marrakech-tour", "ouzoud-waterfalls", "agafay-desert"]
    },

    "agafay-desert": {
       title: "Private trip to Agafay Desert",
    subtitle: "Customize your desert experience with quad biking, camel rides, and dinner under the stars",
    heroImage: "../assets/images/tours/agafay.jpg",
    mainImage: "../assets/images/tours/agafay1.jfif",
    price: 60, // Base price for transport
    duration: "Half Day",
    
    location: "Agafay Desert, near Marrakech",
    
    groupSize: "Private",
    rating: 4.8,
    galleryImages: [
        "../assets/images/tours/agafay.jpg",
        "../assets/images/tours/agafay1.jfif",
        "../assets/images/tours/agafay2.jfif",
        "../assets/images/tours/agafay4.jpeg"
    ],
    reviews: 122,
    description: `
        <h3>Experience Overview</h3>
        <p>Escape Marrakech for an unforgettable day in the Agafay Desert. This is not a fixed program — you can choose from several exciting activities to build your perfect experience. Whether you're into adventure, cultural immersion, or just a relaxing dinner under the stars, this is for you.</p>

        <p>Activities are optional and can be added during booking. An agent will contact you to confirm your preferred setup after you place the order.</p>

        <h4>Available Activities:</h4>
        <ul>
            <li>🚙 Transportation from/to Marrakech – €60</li>
            <li>🏍️ Quad Biking Adventure (1h) – €30</li>
            <li>🐫 Camel Ride Experience (1h) – €20</li>
            <li>🍽️ Dinner with Traditional Show – €25</li>
        </ul>

        <p><em>Prices are per person. You can choose one or multiple activities. Total cost will be confirmed by phone after booking.</em></p>
    `,
    includes: [
        "Round-trip transportation from Marrakech",
        "Free time to enjoy the desert",
        "Option to choose activities on site",
        "Assistance from our team for custom planning"
    ],
    bring: [
        "Comfortable shoes and desert-friendly clothes",
        "Sun protection (hat, glasses, sunscreen)",
        "Scarf or bandana (for dust)",
        "Camera",
    ],
    availability: "Daily, year-round",
    additionalInfo: {
        "Difficulty": "Easy – suitable for all ages",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24h before",
        "Note": "One of our agents will call you after booking to confirm the activities"
    },
    relatedPrograms: ["zagora-2-days", "camel-ride", "quad-biking"]
},

    'ouarzazate-3-days': {
        title: 'Ouarzazate & Desert Tour',
        subtitle: 'Journey through cinematic landscapes, ancient kasbahs, and desert oases',
        heroImage: '../assets/images/tours/ourzazat1.jpeg',
        mainImage: '../assets/images/tours/ourzazat1.jpeg',
        galleryImages: [
            '../assets/images/tours/ourzazat1.jpeg',
            '../assets/images/tours/ourzazat2.jpeg',
            '../assets/images/tours/ourzazat3.jpeg',
        ],
        price: 20,
        location: 'Ouarzazate, Skoura, and Draa Valley',
        groupSize: '2-50 people',
        rating: 4.9,
        reviews: 178,
        description: `
        <h3>Tour Overview</h3>
        <p>Explore the iconic city of Ouarzazate, known as the "Hollywood of Morocco", and its surrounding desert treasures on this immersive day adventure. Visit legendary filming locations, UNESCO-listed kasbahs, and palm-filled valleys that reflect centuries of Moroccan history.</p>
        <p>Discover the cinematic Aït Benhaddou Kasbah.</p>
        <p>This tour is perfect for culture lovers, photographers, and anyone seeking a deeper look into Morocco’s Saharan gateway.</p>
    `,
        mapImage: '../assets/images/itinerary/ourzazat.png',
        itinerary: [
            // You can optionally fill in day-by-day later
        ],
        includes: [
            'Transportation in a comfortable, air-conditioned 4×4 or minibus.',
            'Pick up and drop-off at your Marrakech accommodation.',
        ],
        bring: [
            'Warm clothing for desert nights',
            'Comfortable shoes and light layers',
            'Sun protection (hat, sunscreen, glasses)',
            'Camera or phone for stunning landscapes',
        ],
        availability: 'Daily departures, year-round',
        additionalInfo: {
            'Difficulty': 'Easy to Moderate',
            'Language': 'English, French, Arabic, Spanish',
            'Confirmation': 'Instant upon booking',
            'Cancellation': 'Free up to 24h before departure'
        },
        relatedPrograms: ['zagora-2-days', 'merzouga-3-days', 'ait-benhaddou']
    },
    'merzouga-3-days': {
    title: '3-Days Merzouga Desert Tour',
    subtitle: 'Cross the Atlas, ride camels, and sleep under the Sahara stars',
    heroImage: '../assets/images/tours/marzoga1.jpeg',
    mainImage: '../assets/images/tours/marzoga1.jpeg',
    galleryImages: [
        '../assets/images/tours/marzoga1.jpeg',
        '../assets/images/tours/marzoga2.jpeg',
        '../assets/images/tours/marzoga3.jpeg',
    ],
    price: 110,
    duration: '3 days / 2 nights',
    location: 'Merzouga Desert',
    groupSize: '2–50 people',
    rating: 4.9,
    reviews: 267,
    description: `
        <h3>Tour Overview</h3>
        <p>This 3-days adventure takes you deep into the Moroccan Sahara, passing through the majestic Atlas Mountains and the dramatic Dades Gorges. Discover ancient kasbahs, Berber villages, and the UNESCO site of Aït Benhaddou.</p>
        <p>On Day 2, ride camels through golden dunes at sunset and arrive at a Berber camp in Merzouga, where you’ll enjoy dinner, music by the fire, and a night under the stars in a desert tent.</p>
        <p>This is the ultimate desert experience for adventurers and cultural explorers.</p>
    `,
    mapImage: '../assets/images/itinerary/merzouga-map.png',
   
    includes: [
        '2 nights stay ',
        'Comfortable transportation',
        'Hotel pickup and drop-off in Marrakech',
    ],
    bring: [
        'Warm clothes for desert night',
        'Comfortable shoes',
        'Sunglasses, sunscreen, and hat',
        'Camera',    ],
    availability: 'Daily departures, year-round',
    additionalInfo: {
        'Difficulty': 'Easy to Moderate',
        'Language': 'English, French, Arabic, Spanish',
        'Confirmation': 'Instant',
        'Cancellation': 'Free cancellation up to 48h before departure'
    },
    relatedPrograms: ['zagora-2-days', 'ouarzazate-3-days', 'camel-ride']
}

};
function calculateDynamicTourPrice(tourKey, numberOfPeople) {
    const tour = toursData[tourKey];
    if (!tour || !tour.groupPricing) {
        return tour ? tour.price : null;
    }
    for (const tier of tour.groupPricing) {
        if (numberOfPeople >= tier.min && numberOfPeople <= tier.max) {
            return numberOfPeople * tier.pricePerPerson;
        }
    }
    return null;
}

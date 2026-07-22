interface Testimonial {
    id: number;
    name: string;
    activity: string;
    rating: number;
    maxRating: number;
    text: string;
    avatar: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "MARIANNE SIMONIS",
        activity: "Jet Skiing",
        rating: 4,
        maxRating: 5,
        text: "I had an exhilarating experience riding the jet ski! The speed and agility of the machine made it easy to navigate the waves, and the views of the coastline were breathtaking. I can't wait to do it again!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        name: "LUCAS HERNANDEZ",
        activity: "Scuba Diving",
        rating: 5,
        maxRating: 5,
        text: "Scuba diving was absolutely amazing! The underwater world was vibrant and full of life. Swimming among the colorful fish and coral reefs was like entering another dimension. I highly recommend it!",
        avatar: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 3,
        name: "TINA PATEL",
        activity: "Skydiving",
        rating: 5,
        maxRating: 5,
        text: "Skydiving was the most thrilling experience of my life! The freefall was exhilarating, and the view from above was simply stunning. I felt like I was flying, and the adrenaline rush was unbeatable!",
        avatar: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 4,
        name: "JAMES LEE",
        activity: "Rock Climbing",
        rating: 4,
        maxRating: 5,
        text: "Rock climbing challenged my limits both physically and mentally. Reaching the top was an incredible feeling of accomplishment. The scenery from the cliff was worth every ounce of effort!",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 5,
        name: "SOPHIA CHEN",
        activity: "Parasailing",
        rating: 5,
        maxRating: 5,
        text: "Soaring high above the ocean was a dream come true! The gentle breeze and panoramic views created a sense of pure freedom. The crew was professional and made me feel completely safe throughout.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 6,
        name: "DAVID MARTINEZ",
        activity: "White Water Rafting",
        rating: 4,
        maxRating: 5,
        text: "The rapids were intense and the teamwork required made it even more exciting. Our guide was knowledgeable and kept us safe while pushing the thrill factor. An unforgettable adventure!",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 7,
        name: "EMMA WILSON",
        activity: "Hot Air Balloon",
        rating: 5,
        maxRating: 5,
        text: "Floating silently above the landscape at sunrise was magical. The colors of the sky and the peaceful atmosphere made this one of the most serene experiences I've ever had. Truly breathtaking!",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 8,
        name: "MICHAEL BROWN",
        activity: "Bungee Jumping",
        rating: 5,
        maxRating: 5,
        text: "The leap of faith was terrifying and exhilarating all at once! The rebound felt like flying and the rush of adrenaline was unlike anything else. If you're on the fence, just do it!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnN8ZW58MHx8MHx8fDA%3D",
    },
];